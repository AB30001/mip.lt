import { z } from 'zod';

/**
 * Frontmatter contract for src/content/it-naujienos/*.md.
 * This is the single source of truth: the Astro content collection
 * (src/content.config.ts) validates every markdown file against it at
 * build time, and the news agent (workers/news-agent/src/schema.ts)
 * validates its own constructed frontmatter object against it before
 * ever writing a file — so a malformed article fails in the worker,
 * not the build.
 *
 * `slug` and `body` are deliberately not part of this schema: slug
 * becomes the filename (not a frontmatter field) and body is the
 * markdown content below the frontmatter delimiter.
 */
export const articleSchema = z.object({
  title: z.string().max(65),
  description: z.string().max(155),
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
  tags: z.array(z.string()),
  sourceUrl: z.string().url().optional(),
  sourceName: z.string().optional(),
  localAngle: z.string().min(1),
  draft: z.boolean().default(false),
});

export type Article = z.infer<typeof articleSchema>;
