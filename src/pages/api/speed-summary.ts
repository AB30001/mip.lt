import type { APIRoute } from 'astro';
import { z } from 'zod';
import { getSpeedSummaryArticle } from '../../lib/speed-summaries';
import { computeSpeedFacts } from '../../lib/speedtest-facts';

export const prerender = false;

const requestSchema = z.object({
  ping: z.number().nonnegative(),
  download: z.number().nonnegative(),
  upload: z.number().nonnegative(),
  lang: z.enum(['lt', 'en']),
});

export const POST: APIRoute = async ({ request }) => {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(null, { status: 400 });
  }

  const parsed = requestSchema.safeParse(body);
  if (!parsed.success) {
    return new Response(null, { status: 400 });
  }
  const { ping, download, upload, lang } = parsed.data;

  const facts = computeSpeedFacts({ pingMs: ping, downloadMbps: download, uploadMbps: upload }, lang);
  const summary = getSpeedSummaryArticle(download, lang);

  return Response.json({ facts, summary }, { headers: { 'cache-control': 'no-store' } });
};
