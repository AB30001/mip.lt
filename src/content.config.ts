import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { articleSchema } from '@shared/article-schema';

const itNaujienos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/it-naujienos' }),
  schema: articleSchema,
});

export const collections = {
  'it-naujienos': itNaujienos,
};
