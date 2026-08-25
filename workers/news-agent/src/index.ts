import { AUTHOR_NAME, DRAFT_DEFAULT, FEEDS, KV_HASH_TTL_SECONDS, MAX_ARTICLES_PER_RUN } from './config';
import { hashUrl, isSeen, markSeen } from './dedup';
import { toMarkdownFile } from './frontmatter';
import { generateArticle } from './generate';
import { type ArticleFile, commitArticles, slugExists } from './github';
import { articleSchema } from './schema';
import { fetchFeed } from './sources';
import type { AgentEnv } from './types';

interface RunSummary {
  committed: string[];
  skipped: string[];
}

async function uniqueSlug(token: string, slug: string): Promise<string> {
  let candidate = slug;
  let suffix = 2;
  while (await slugExists(token, candidate)) {
    candidate = `${slug}-${suffix}`;
    suffix += 1;
  }
  return candidate;
}

async function runAgent(env: AgentEnv): Promise<RunSummary> {
  const files: ArticleFile[] = [];
  const hashesToMark: string[] = [];
  const skipped: string[] = [];

  const candidates = (await Promise.all(FEEDS.map((feed) => fetchFeed(feed.url, feed.name)))).flat();

  for (const candidate of candidates) {
    if (files.length >= MAX_ARTICLES_PER_RUN) break;

    // Each candidate is isolated: one bad feed item or a transient
    // generation/validation failure must not abort the rest of the run.
    try {
      const hash = await hashUrl(candidate.link);
      if (await isSeen(env.SEEN_ARTICLES, hash)) continue;

      let result = await generateArticle(env.DEEPSEEK_API_KEY, candidate);
      if (!result.ok) {
        result = await generateArticle(env.DEEPSEEK_API_KEY, candidate, result.reason);
      }
      if (!result.ok) {
        skipped.push(`${candidate.link}: ${result.reason}`);
        continue;
      }

      const { slug, body, ...modelFields } = result.article;
      const finalSlug = await uniqueSlug(env.GITHUB_TOKEN, slug);

      // Re-validate against the exact schema the content collection uses,
      // now with the agent's own ground-truth fields stamped in — never
      // trust the model for sourceUrl/sourceName/publishedAt/draft.
      const article = articleSchema.parse({
        ...modelFields,
        sourceUrl: candidate.link,
        sourceName: candidate.sourceName,
        publishedAt: new Date(),
        draft: DRAFT_DEFAULT,
        author: AUTHOR_NAME,
      });

      files.push({
        path: `src/content/it-naujienos/${finalSlug}.md`,
        content: toMarkdownFile(article, body),
      });
      hashesToMark.push(hash);
    } catch (error) {
      skipped.push(`${candidate.link}: ${String(error)}`);
    }
  }

  const committed: string[] = [];

  if (files.length > 0) {
    await commitArticles(env.GITHUB_TOKEN, files);

    // Only after the commit succeeds: cron gets no automatic retry on
    // failure, so writing to KV before the commit would risk marking an
    // article "done" that never actually made it into the repo.
    await Promise.all(hashesToMark.map((hash) => markSeen(env.SEEN_ARTICLES, hash, KV_HASH_TTL_SECONDS)));
    committed.push(...files.map((file) => file.path));
  }

  return { committed, skipped };
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i += 1) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

export default {
  async fetch(request: Request, env: AgentEnv): Promise<Response> {
    if (request.method !== 'POST' || new URL(request.url).pathname !== '/run') {
      return new Response('Not found', { status: 404 });
    }

    const provided = request.headers.get('authorization') ?? '';
    if (!timingSafeEqual(provided, `Bearer ${env.AGENT_RUN_TOKEN}`)) {
      return new Response('Unauthorized', { status: 401 });
    }

    const summary = await runAgent(env);
    return Response.json(summary);
  },

  async scheduled(_controller: ScheduledController, env: AgentEnv, ctx: ExecutionContext): Promise<void> {
    ctx.waitUntil(
      runAgent(env)
        .then((summary) => console.log('news-agent run complete', summary))
        .catch((error) => console.error('news-agent run failed', error)),
    );
  },
} satisfies ExportedHandler<AgentEnv>;
