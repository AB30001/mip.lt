// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mip.lt',

  // Default rendering mode for every page. Individual pages opt into SSR
  // with `export const prerender = false` — the homepage, blog (index,
  // pagination, posts), and the About/Contact/Privacy/Terms pages all do
  // this now, since the global header needs a real per-visitor IP on
  // every page. Only the 404 page, rss.xml, and sitemap-index.xml remain
  // static (content collection reads, no per-visitor data needed).
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

  vite: {
    plugins: [tailwindcss()],
  },
});
