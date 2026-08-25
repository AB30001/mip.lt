import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Hand-rolled rather than @astrojs/sitemap: that integration only
// discovers statically-enumerated routes, and the blog (index,
// pagination, and post pages) is server-rendered now — so its
// auto-discovery silently produced a sitemap missing the entire blog.
// This route queries the collection directly, the same pattern rss.xml.ts
// already uses. File keeps the "sitemap-index.xml" name to match what
// robots.txt already points at, even though it's a flat list rather than
// an index of sub-sitemaps — at this site's scale a single file is well
// under the 50,000-URL sitemap limit, so no sharding is needed.
const PAGE_SIZE = 12;

export const GET: APIRoute = async ({ site }) => {
  const base = (site?.toString() ?? 'https://mip.lt/').replace(/\/$/, '');

  const posts = await getCollection('it-naujienos', ({ data }) => !data.draft);
  const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));

  const staticPaths = [
    '/',
    '/apie',
    '/kontaktai',
    '/privatumo-politika',
    '/naudojimosi-taisykles',
    '/greicio-testas',
    '/speed-test',
    '/it-naujienos',
  ];
  const paginationPaths = Array.from({ length: Math.max(0, totalPages - 1) }, (_, i) => `/it-naujienos/${i + 2}`);
  const postPaths = posts.map((post) => `/it-naujienos/${post.id}`);

  const urls = [...staticPaths, ...paginationPaths, ...postPaths];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url><loc>${base}${path}</loc></url>`).join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'content-type': 'application/xml' },
  });
};
