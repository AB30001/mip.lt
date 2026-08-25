import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async (context) => {
  const posts = (await getCollection('it-naujienos', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
  );

  return rss({
    title: 'mip.lt – IT naujienos',
    description: 'Lietuviškos IT naujienos ir paaiškinimai.',
    site: context.site ?? 'https://mip.lt',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: `/it-naujienos/${post.id}`,
    })),
  });
};
