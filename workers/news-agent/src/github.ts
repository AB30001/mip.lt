import { z } from 'zod';
import { GITHUB_REPO } from './config';

export interface ArticleFile {
  path: string;
  content: string;
}

const API = 'https://api.github.com';

const refSchema = z.object({ object: z.object({ sha: z.string() }) });
const commitSchema = z.object({ tree: z.object({ sha: z.string() }) });
const shaSchema = z.object({ sha: z.string() });

function authHeaders(token: string): HeadersInit {
  return {
    authorization: `Bearer ${token}`,
    accept: 'application/vnd.github+json',
    'content-type': 'application/json',
    'user-agent': 'mip-lt-news-agent',
  };
}

async function call<T>(schema: z.ZodType<T>, url: string, token: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, { ...init, headers: authHeaders(token) });
  if (!response.ok) {
    throw new Error(`GitHub API ${response.status} on ${url}: ${await response.text()}`);
  }
  return schema.parse(await response.json());
}

/**
 * Batches every article in the run into one commit via the Git Data API
 * (blobs -> tree -> commit -> ref update) so N articles produce one build
 * instead of N. ~5+N requests: get-ref, get-base-commit, N blobs, one
 * tree, one commit, one ref update.
 */
export async function commitArticles(token: string, files: ArticleFile[]): Promise<string> {
  const { owner, repo, branch } = GITHUB_REPO;
  const base = `${API}/repos/${owner}/${repo}`;

  const ref = await call(refSchema, `${base}/git/ref/heads/${branch}`, token);
  const baseCommitSha = ref.object.sha;

  const baseCommit = await call(commitSchema, `${base}/git/commits/${baseCommitSha}`, token);
  const baseTreeSha = baseCommit.tree.sha;

  const blobs = await Promise.all(
    files.map((file) =>
      call(shaSchema, `${base}/git/blobs`, token, {
        method: 'POST',
        body: JSON.stringify({ content: file.content, encoding: 'utf-8' }),
      }),
    ),
  );

  const tree = await call(shaSchema, `${base}/git/trees`, token, {
    method: 'POST',
    body: JSON.stringify({
      base_tree: baseTreeSha,
      tree: files.map((file, index) => ({
        path: file.path,
        mode: '100644',
        type: 'blob',
        sha: blobs[index].sha,
      })),
    }),
  });

  const commit = await call(shaSchema, `${base}/git/commits`, token, {
    method: 'POST',
    body: JSON.stringify({
      message: `content: add ${files.length} article(s) via news agent`,
      tree: tree.sha,
      parents: [baseCommitSha],
    }),
  });

  await call(refSchema, `${base}/git/refs/heads/${branch}`, token, {
    method: 'PATCH',
    body: JSON.stringify({ sha: commit.sha }),
  });

  return commit.sha;
}

export async function slugExists(token: string, slug: string): Promise<boolean> {
  const { owner, repo, contentDir, branch } = GITHUB_REPO;
  const url = `${API}/repos/${owner}/${repo}/contents/${contentDir}/${slug}.md?ref=${branch}`;
  const response = await fetch(url, { headers: authHeaders(token) });
  return response.ok;
}
