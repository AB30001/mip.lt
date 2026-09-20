# SEO audit — mip.lt

_Audited: 2026-09-20_

## Summary
- Findings: 0 critical, 3 high, 5 medium, 2 low
- Blockers needing user decision: 3

## Findings

### A1 — About page claimed “no tracking scripts” while GoatCounter loads site-wide
- **Priority:** high
- **Category:** content / trust
- **Affected page types:** `/apie`
- **Evidence:** `/apie` previously stated no tracking scripts; `BaseLayout.astro` loads GoatCounter on every page. Privacy policy already disclosed GoatCounter accurately.
- **Impact:** Trust / E-E-A-T inconsistency if discovered by users or reviewers.
- **Fix:** Align About copy with privacy disclosure (GoatCounter named, privacy-friendly framing).
- **Status:** fixed (2026-09-20)
- **Verified:** source change in `src/pages/apie.astro` (LT + EN)

### A2 — Privacy claimed IT news were “static pages” with no data collection
- **Priority:** high
- **Category:** content / trust
- **Affected page types:** `/privatumo-politika`
- **Evidence:** News routes are SSR and load GoatCounter via BaseLayout.
- **Impact:** Inaccurate privacy disclosure.
- **Fix:** Describe news as article pages that may use the same analytics as the rest of the site.
- **Status:** fixed (2026-09-20)
- **Verified:** `src/pages/privatumo-politika.astro` LT + EN

### A3 — Thin info pages lacked Open Graph / Twitter tags
- **Priority:** high
- **Category:** metadata
- **Affected page types:** `/apie`, `/kontaktai`, `/privatumo-politika`, `/naudojimosi-taisykles`
- **Evidence:** pages only emitted canonical in `slot="head"`.
- **Impact:** weak social/chat previews; inconsistent brand signal vs homepage/tools.
- **Fix:** shared `PageMeta.astro` with OG/Twitter + `og:site_name`.
- **Status:** fixed (2026-09-20)
- **Verified:** component wired into the four pages

### B1 — Homepage single-URL bilingual without hreflang
- **Priority:** medium
- **Category:** canonical / architecture
- **Affected page types:** `/` (and similarly geo-switched info pages)
- **Evidence:** crawlers forced to LT; EN users see EN HTML at same canonical `https://mip.lt/`. Speed-test already uses separate URLs + hreflang.
- **Impact:** EN homepage content is effectively unindexable as its own locale.
- **Fix:** either dedicated EN homepage URL + hreflang, or LT-only homepage with EN only on `/speed-test`.
- **Status:** closed — keep single `/`, crawlers LT-only for ranking; EN users may still see EN UI; no separate EN homepage (decided 2026-09-21)
- **Verified:** decision logged in `seo-progress.md`

### B2 — Article JSON-LD incomplete vs visible content
- **Priority:** medium
- **Category:** structured-data
- **Affected page types:** `/it-naujienos/{slug}`
- **Evidence:** Article JSON-LD lacked description, publisher, mainEntityOfPage, og:locale / site_name.
- **Impact:** weaker rich-result eligibility / incomplete entity graph.
- **Fix:** extend `SeoHead.astro`.
- **Status:** fixed (2026-09-20)
- **Verified:** source change in `SeoHead.astro`

### B3 — Sitemap lacked `lastmod` for posts
- **Priority:** medium
- **Category:** indexation
- **Affected page types:** all article URLs in sitemap
- **Evidence:** flat urlset with loc only.
- **Fix:** emit `lastmod` from `updatedAt` / `publishedAt`.
- **Status:** fixed (2026-09-20)
- **Verified:** `sitemap-index.xml.ts`

### B4 — Speed-test hreflang without visible language switch
- **Priority:** medium
- **Category:** architecture
- **Affected page types:** `/greicio-testas`, `/speed-test`
- **Evidence:** reciprocal hreflang present; UI had no alternate-language link.
- **Fix:** visible LT↔EN link under the intro.
- **Status:** fixed (2026-09-20)
- **Verified:** `SpeedTest.astro` + `speedtest-i18n.ts`

### B5 — Backlink profile polluted with SEO spam / PBN patterns
- **Priority:** medium
- **Category:** content / off-page
- **Affected page types:** domain-wide
- **Evidence:** SiteProfiler 2026-09-20 — 380 backlinks / 155 referring domains; many domains named for “seo/backlink/ranking”; spammy commercial anchors; Facebook OG still shows parked-domain title.
- **Impact:** noisy link equity; risk if Google discounts spam clusters.
- **Fix:** owner decision on disavow / ignore vs cleanup; do not buy links.
- **Status:** closed — ignore; do not disavow unless Search Console shows a manual action (decided 2026-09-21)
- **Verified:** SiteProfiler overview + backlink profile; no GSC penalty evidence

### C1 — Header/footer lack primary tool/news nav
- **Priority:** low
- **Category:** architecture
- **Affected page types:** site-wide chrome
- **Evidence:** header is logo + IP only; footer is legal links only. Homepage CTAs carry primary internal links.
- **Impact:** deeper pages rely on breadcrumbs/homepage CTAs for discovery.
- **Fix:** optional compact nav (speed test + IT naujienos) — defer until conversion goal confirmed.
- **Status:** open
- **Verified:** n/a

### C2 — Automated news volume vs scaled-content risk
- **Priority:** low
- **Category:** content
- **Affected page types:** `/it-naujienos/*`
- **Evidence:** news-agent publishes up to 2/day without human review; SERP for `it naujienos` dominated by established media (KD 23).
- **Impact:** hard to compete for head news terms with thin AI summaries; quality/brand risk.
- **Fix:** keep volume cap; prefer refresh of evergreen tool pages over chasing news head terms; consider human review gate if quality drops.
- **Status:** open (policy already caps volume)
- **Verified:** n/a

## Blocked items
| ID | Blocker | Needs | Owner |
| --- | --- | --- | --- |
| — | none open after 2026-09-21 decisions | — | — |
