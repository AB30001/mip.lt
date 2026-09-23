# SEO progress — mip.lt

_Last updated: 2026-09-23_
**Current phase:** 5 — On-page templates (tool titles/H1 shipped locally) → 8 tracking active
**Next review:** 2026-09-30

## Phases

### Phase 0 — Scope and access
- [x] Canonical domain and protocol/host confirmed
- [x] Target country and language confirmed
- [x] Primary conversion goal confirmed — tool completions (IP + speed test); decided from data 2026-09-21
- [x] Domain history established (repurposed)
- [~] Search Console and analytics access confirmed or recorded as missing — verification file + GoatCounter known; GSC login unconfirmed
- [x] CMS and publication workflow understood, including automated news-agent
- [x] Existing SEO documents and uncommitted work reviewed
- [x] `site-brief.md` written

**Gate:** market/language/topic known; conversion goal interim — paid research proceeded with tool/news seeds grounded in live products.

### Phase 1 — Baseline measurement
- [x] Mangools quota and plan caps recorded with date
- [x] `location_id` and `language_id` resolved and recorded
- [x] Existing Mangools request history checked
- [x] Indexable page inventory built
- [ ] Current rankings/visibility baseline — SERPWatcher queued 2026-09-23 (ranks pending first crawl)
- [x] Domain authority baseline (SiteProfiler overview refreshed 2026-09-23)
- [ ] Core Web Vitals baseline — not measured this session
- [x] Baseline table written below

### Phase 2 — Crawl and indexation integrity
- [x] `robots.txt` reviewed
- [x] `noindex` audited (404 only)
- [x] Canonical tags present on main templates
- [x] Homepage locale strategy decided: keep single `/` URL, crawlers stay LT; no EN homepage (B1 closed 2026-09-21)
- [x] Sitemap present, referenced from robots; `lastmod` added for posts
- [x] HTTP host is `https://mip.lt`
- [ ] Trailing-slash / 404 status spot-check on rendered URLs — pending deploy verify
- [x] Pagination handled (`/it-naujienos/1` redirects)
- [~] Locale routing — speed-test OK; homepage bilingual open

### Phase 3 — Keyword research and clustering
- [x] Seeds grounded in live tools + news
- [x] Candidates expanded; keyword IDs captured
- [x] Irrelevant terms excluded
- [x] Clustered by intent
- [x] SERPs validated for three finalists
- [x] One target URL per cluster
- [x] Cannibalization checked
- [x] Portfolio in `keyword-research.md` + Mangools list `6ab03dc4f94fc7cac5873868`

### Phase 4 — Architecture and internal linking
- [~] Structure supports tool clusters; news secondary
- [x] Speed-test LT↔EN visible link added
- [ ] Optional header nav (C1) deferred
- [x] Breadcrumbs on news
- [x] Speed URL rename to `/interneto-greicio-testas` + `/internet-speed-test` with 301s (local; deploy pending)

### Phase 5 — On-page templates and structured data
- [x] Thin pages got OG/Twitter via `PageMeta`
- [x] Article JSON-LD enriched
- [x] About/privacy trust copy aligned with GoatCounter
- [x] Homepage title/H1 refresh for `mano ip` — shipped locally 2026-09-23
- [x] Speed-test title/meta toward `interneto matuokle` — shipped locally 2026-09-23
- [ ] Spot-check rendered HTML post-deploy

### Phase 6 — Content production
- [ ] Homepage / speed-test copy briefs from SERPs — deferred (daily SERP quota exhausted 2026-09-23)
- [-] No mass new pages without approval

### Phase 7 — Off-page and links
- [x] Backlink baseline captured (refreshed 2026-09-23)
- [x] Spam patterns flagged (B5) — still present in top referring domains
- [ ] Owner decision on disavow — ignore unless GSC manual action (2026-09-21)

### Phase 8 — Tracking and review cadence
- [x] SERPWatcher tracking created — mip.lt LT desktop (`6ab3b4068a81efc7f5931622`), 6 portfolio KWs
- [ ] First rank crawl results — pending (~35 min estimate at create)
- [ ] Next review 2026-09-30

## Baseline
| Metric | Value | Source | Measured |
| --- | --- | --- | --- |
| Domain Authority | 17 | Mangools SiteProfiler | 2026-09-23 |
| Page Authority | 33 | SiteProfiler | 2026-09-23 |
| Citation Flow / Trust Flow | 26 / 22 | SiteProfiler | 2026-09-23 |
| Referring domains / backlinks | 173 / 405 | SiteProfiler backlink profile | 2026-09-23 |
| Referring IPs | 61 | SiteProfiler | 2026-09-23 |
| `mano ip` volume / KD | 2500 / 17 | KWFinder LT (via SERPWatcher create) | 2026-09-23 |
| `interneto greičio testas` volume / KD | 220 / 16 | KWFinder LT | 2026-09-23 |
| `interneto matuokle` volume / KD | 330 / unknown | SERPWatcher create | 2026-09-23 |
| `it naujienos` volume / KD | 70 / 23 | KWFinder LT | 2026-09-20 |
| Organic rankings | pending first crawl | SERPWatcher `6ab3b4068a81efc7f5931622` | 2026-09-23 |
| CWV | unknown | not measured | — |
| Plan / daily SERP remaining | basic/combo · serps 0/100 · related 0/100 | `kwfinder_get_quota_limits` | 2026-09-23 |

## Changes shipped
| Date | Change | Page types | Expected metric | Verified | Outcome |
| --- | --- | --- | --- | --- | --- |
| 2026-09-20 | About + privacy trust copy aligned with GoatCounter | info | trust / accuracy | source | |
| 2026-09-20 | `PageMeta` OG/Twitter on thin pages | info | richer shares | source | |
| 2026-09-20 | Article JSON-LD + og:site_name/locale | articles | richer entity markup | source | |
| 2026-09-20 | Sitemap `lastmod` for posts | sitemap | fresher crawl signals | source | |
| 2026-09-20 | Visible LT↔EN link on speed test | tools | locale discovery | source | |
| 2026-09-20 | SEO docs + Mangools list created | process | resumable SEO system | files | |
| 2026-09-23 | Homepage title + H1 toward `mano ip` / `mano ip adresas` | `/` | better SERP match | source | pending deploy |
| 2026-09-23 | Speed-test title/meta include `matuoklė` | speed tools | synonym coverage | source | pending deploy |
| 2026-09-23 | SERPWatcher LT desktop tracking (6 KWs) | process | rank baseline | Mangools | crawl pending |
| 2026-09-23 | SiteProfiler baseline refresh | process | DA/CF/links | Mangools | |

## Open work
| Item | Priority | Owner | Blocked by |
| --- | --- | --- | --- |
| Deploy URL renames + on-page meta | high | owner | explicit deploy ask |
| Spot-check rendered HTML post-deploy | medium | agent | deploy |
| SERPWatcher first ranks review | medium | agent | crawl complete |
| Fresh SERP re-check for copy briefs | low | agent | daily serps reset (~9h) |
| GSC ranking export | medium | owner | access |

## Decisions log
| Date | Decision | Reason |
| --- | --- | --- |
| 2026-09-20 | Prioritize IP + speed-test clusters over `it naujienos` head term | SERP owned by media; KD 23; thin AI news unlikely to win hub queries |
| 2026-09-20 | No new doorway URLs for IP/speed | Existing tools already map 1:1 to intents |
| 2026-09-20 | Interim conversion goal = tool completions + news reads | Unblocked research |
| 2026-09-21 | Primary goal = tool completions (IP + speed test) | Highest LT demand + existing pages map 1:1 |
| 2026-09-21 | No EN homepage URL; keep geo EN UX on `/` | Avoid cannibalization; EN SEO only via `/internet-speed-test` |
| 2026-09-21 | Ignore spam backlinks; no disavow unless GSC manual action | Disavow risk > benefit with no penalty signal |
| 2026-09-23 | Rename speed-test URLs to `/interneto-greicio-testas` + `/internet-speed-test` with 301s | Match primary LT/EN keyword phrases |
| 2026-09-23 | Create SERPWatcher before live deploy of meta refresh | Capture pre/post rank movement once pages are indexed |
