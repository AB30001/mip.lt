# mip.lt

A minimalist Lithuanian web app on Cloudflare Workers: an IP address + local
weather tool at `/`, and a Lithuanian IT news blog at `/it-naujienos`.

## Stack

Astro 6, Tailwind CSS v4, Cloudflare Workers (static assets + SSR), Cloudflare
KV, Zod. Content is Markdown via Astro Content Collections — no CMS.

## Development

```bash
npm install
npm run dev
```

`astro dev` runs with `platformProxy` enabled, so `Astro.request.cf` (IP
geolocation) is populated locally the same way it is in production.

## Deploy

```bash
npm run build
npm run deploy            # site worker
npm run deploy:agent      # news-agent worker
```

The news-agent worker (`workers/news-agent/`) generates and commits new
articles on a daily cron using DeepSeek's API. It needs `DEEPSEEK_API_KEY`,
`GITHUB_TOKEN`, and `AGENT_RUN_TOKEN` set via `wrangler secret put`, and a
KV namespace bound in `workers/news-agent/wrangler.jsonc`.

---

Built in collaboration with [Devhuset](https://devhuset.no).
