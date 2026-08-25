// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mip.lt',

  // Default rendering mode for every page. The homepage overrides this
  // per-page with `export const prerender = false` — everything else
  // (blog, feeds, sitemap) stays static and is read from disk at build time.
  output: 'static',

  adapter: cloudflare({
    // Without this, `Astro.request.cf` is empty in `astro dev`, so
    // IP/geo fields would appear undefined locally even though they
    // work once deployed.
    platformProxy: { enabled: true },
    // This app has no runtime image transforms (blog images are static,
    // optimized at build time via <Image />) — 'compile' skips the
    // adapter's default Cloudflare Images runtime binding, which this
    // project has no use for.
    imageService: 'compile',
  }),

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
