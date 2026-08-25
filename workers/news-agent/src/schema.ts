import { z } from 'zod';
import { articleSchema } from '@shared/article-schema';

/**
 * What the OpenAI call must return directly (Part 3, step 3): title, slug,
 * description, localAngle, body, tags. This is the shared `articleSchema`
 * minus the fields the agent stamps itself from ground truth rather than
 * trusting the model for — `publishedAt` (run time), `updatedAt` (unused
 * on first publish), `draft` (config default), `author` (config constant —
 * there's only one byline site-wide, not something the model should pick),
 * and `sourceUrl`/`sourceName` (taken from the RSS candidate, never the
 * model) — plus the two fields the model produces that never live in
 * frontmatter: `slug` (becomes the filename) and `body` (the markdown
 * content).
 */
export const modelOutputSchema = articleSchema
  .omit({ publishedAt: true, updatedAt: true, draft: true, author: true, sourceUrl: true, sourceName: true })
  .extend({
    slug: z
      .string()
      .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, 'slug must be lowercase ASCII, hyphen-separated'),
    body: z.string().min(1),
  });

export type ModelOutput = z.infer<typeof modelOutputSchema>;

/**
 * Re-exported so the rest of the agent validates the final, agent-stamped
 * frontmatter object (modelOutput fields minus slug/body, plus
 * publishedAt/draft) against the exact same schema the content collection
 * uses — the "single source of truth" guarantee.
 */
export { articleSchema };
export type { Article } from '@shared/article-schema';
