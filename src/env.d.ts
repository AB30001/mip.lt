/// <reference path="../.astro/types.d.ts" />

// As of Astro 6 / @astrojs/cloudflare v13, `Astro.locals.runtime` is a
// deprecated shim whose properties throw on access — `Runtime` now only
// carries `cfContext`. `env`, `cf`, and `caches` moved elsewhere: `env`
// comes from `import { env } from 'cloudflare:workers'`, geolocation
// from `Astro.request.cf` (augmented below), and `caches` is the global.
type Runtime = import('@astrojs/cloudflare').Runtime;

declare namespace App {
  interface Locals extends Runtime {}
}

// lib.dom.d.ts's CacheStorage/Request (loaded because client <script>
// blocks need "dom") and worker-configuration.d.ts's versions are
// separate declarations that don't fully merge under `skipLibCheck` — the
// Workers-only `CacheStorage.default` and `Request.cf` end up missing.
// These are additive interface augmentations, safe because they only add
// members, never override one.
interface CacheStorage {
  readonly default: Cache;
}

interface Request {
  readonly cf?: IncomingRequestCfProperties;
}
