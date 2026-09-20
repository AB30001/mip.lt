# Site brief — mip.lt

_Last updated: 2026-09-20_

## Identity
- Canonical origin: `https://mip.lt` (from `astro.config.mjs` → `site`)
- Site topic: (1) no-friction visitor-context tools — public IP, ISP, local weather, internet speed test; (2) Lithuanian IT news
- Products / services: free utility tools; no paid product
- Audience: Lithuanian general internet users (tools) and Lithuanian tech readers (news)
- Monetization: none present
- Primary conversion goal: **tool completions** — organic visits that finish the IP lookup and/or speed test (decided 2026-09-21 from KWFinder: `mano ip` 2500/mo KD 17 dominates; news hub is a weak head term)
- Secondary goals: Lithuanian news reads as brand/content support; privacy-forward trust; GSC visibility for LT tool queries
- Monetization: none for now

## Market
- Target country: Lithuania (Mangools `location_id`: **2440**, `google.lt`)
- Language: Lithuanian primary; English for non-LT visitors on homepage/info pages and dedicated `/speed-test`
- Mangools `language_id`: **0** (unspecified)

## Domain history
- Status: **repurposed**
- Prior use: Lithuanian schoolchildren’s information portal (~2004–2005); later parked (“Užregistruotas domenas”)
- Implications: inherited backlinks exist (DA 17 / CF 22 / TF 21 as of 2026-09-20) but many are SEO spam farms; legitimate education links do not transfer topical relevance. KD up to ~30 is worth inspecting for LT tool queries.

## Stack
- Framework / hosting: Astro 6 + `@astrojs/cloudflare` → Cloudflare Workers
- Rendering: SSR for pages showing visitor IP; static 404 / feeds / sitemap
- CMS: Astro content collection `it-naujienos`
- Publication workflow: automated `workers/news-agent` cron `0 6 * * *`, max 2 articles/run, DeepSeek, commits to `main`
- Indexable page types: `/`, `/greicio-testas`, `/speed-test`, `/it-naujienos` (+ pagination + posts), `/apie`, `/kontaktai`, privacy, terms

## Access
- Search Console: verification file present (`public/googledc393aaa25163989.html`); owner access **unconfirmed**
- Analytics: GoatCounter (`miplt.goatcounter.com`), site-wide via `BaseLayout.astro`
- Mangools plan: **basic** / platform `combo`, checked 2026-09-20 — see `keyword-research.md`

## Constraints
- YMYL topic: no
- Must not change without discussion:
  - Homepage must show real visitor IP (drives SSR + prefetch 403 middleware + `private, no-store` on `/`)
  - `MAX_ARTICLES_PER_RUN = 2` scaled-content guardrail
  - Conversion goal still needs owner confirmation before large content investment
