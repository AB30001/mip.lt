import type { APIRoute } from 'astro';

export const prerender = false;

// GET: the ping/latency leg — instant, empty response to measure round-trip time.
export const GET: APIRoute = () => {
  return new Response(null, {
    status: 204,
    headers: { 'cache-control': 'no-store' },
  });
};

// POST: the upload leg. Drains the body chunk-by-chunk, counting bytes
// without buffering or processing them — this is I/O wait, not compute,
// so it stays well inside the free plan's per-invocation CPU budget
// regardless of payload size.
export const POST: APIRoute = async ({ request }) => {
  let bytesReceived = 0;

  if (request.body) {
    const reader = request.body.getReader();
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      bytesReceived += value.byteLength;
    }
  }

  return Response.json({ bytesReceived }, { headers: { 'cache-control': 'no-store' } });
};
