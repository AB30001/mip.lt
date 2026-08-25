import { defineMiddleware } from 'astro:middleware';

// Chrome's Private Prefetch Proxy speculatively fetches Google search
// results before the user clicks, routing the request through Google's
// own proxy specifically to hide the real visitor's IP from us during
// that speculative phase. Every page here shows the visitor's real IP
// (homepage hero, global header badge) — if Chrome serves that
// prefetched response as the actual navigation, the visitor sees
// Google's proxy IP instead of their own.
//
// Returning a non-2xx status for a prefetch/prerender request tells
// Chrome to discard the speculative response and issue a fresh request
// on the real click — this is the documented opt-out for exactly this
// personalized-content scenario, not a workaround.
// https://developer.chrome.com/blog/private-prefetch-proxy
//
// Only reaches SSR routes (the ones actually running through the
// Worker) — static pages never invoke this at all.
export const onRequest = defineMiddleware((context, next) => {
  const purpose = (
    context.request.headers.get('sec-purpose') ??
    context.request.headers.get('purpose') ??
    ''
  ).toLowerCase();

  if (purpose.includes('prefetch') || purpose.includes('prerender')) {
    return new Response(null, { status: 403 });
  }

  return next();
});
