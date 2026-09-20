# Keyword research — mip.lt

_Researched: 2026-09-20_
_Location: Lithuania (id 2440) · Language: Any / unspecified (id 0)_
_Plan limits at time of research: basic/combo — related-keywords ~74/100 remaining before session; serps ~74/100; sp-overview used 1 for mip.lt_

## Seeds
| Seed | Rationale |
| --- | --- |
| koks mano ip | Exact LT phrasing for IP lookup intent |
| interneto greičio testas | Exact LT phrasing for speed-test tool |
| it naujienos | Matches live news section label/URL |
| interneto matuokle | Common LT synonym for speed test (ISP landing pages) |

## Portfolio

### Cluster: IP lookup (tool)
- **Intent:** transactional / navigational utility
- **Target URL:** `/` (existing)
- **Page type:** tool
- **Status:** target

| Keyword | Keyword ID | Volume | KD | CPC | Source | Relevance | Decision |
| --- | --- | --- | --- | --- | --- | --- | --- |
| mano ip | `3dc584565ecb3104efa2e89b85ba1e2c` | 2500 | 17 | null | import + details 2026-09-20 | primary | target |
| mano ip adresas | `2642add7c624a9f29ae962a5c9059cca` | 710 | unknown | null | import | secondary | target |
| koks mano ip | `4eca44973426363fc7fb7665d78e2ee3` | 240 | unknown | null | import | secondary | target |
| ip adresas | (from earlier import compact) | 540 | unknown | 0.32 | import | related glossary-ish | defer |

**SERP validation** (`mano ip`, desktop LT, 2026-09-20)
- Dominant intent / page type: instant IP display tool / homepage
- Freshness requirement: low — utility pages
- Top-result authority: manoip.lt #1; NordVPN LT; whatsmydns; skaičiuokles; internetomatuokle; Bite how-to
- Weaknesses observed: crowded with dedicated IP tools and ISP/VPN pages; mip.lt not in top 6 sampled
- SERP features and questions: none notable in payload; content types lean utility
- Format needed to compete: fast SSR IP + ISP + weather, clear LT title/H1, minimal chrome
- Decision and reasoning: **target** `/` — refresh on-page copy toward `mano ip` / `mano ip adresas` without creating a second competing URL

### Cluster: Speed test (tool)
- **Intent:** transactional utility
- **Target URL:** `/greicio-testas` (LT); `/speed-test` (EN pair)
- **Page type:** tool
- **Status:** target

| Keyword | Keyword ID | Volume | KD | CPC | Source | Relevance | Decision |
| --- | --- | --- | --- | --- | --- | --- | --- |
| interneto greičio testas | `fa98b38f036a49ddf04c59e83ea4ec47` | 220 | 16 | 0.12 | import + details | primary LT | target |
| interneto matuokle | `63225b2e6427b0f9c8e83a0680c929dd` | 330 | unknown | 0.11 | import | primary synonym | target |
| greičio testas | `ced0c6b6e77014edfe47df3e733ca09e` | 50 | unknown | 0.12 | import | secondary | target |

**SERP validation** (`interneto greičio testas`, desktop LT, 2026-09-20)
- Dominant intent / page type: ISP-branded speed-test landing pages (homepages)
- Freshness requirement: low
- Top-result authority: Telia, Bite, internetomatuokle.lt, Cgates, matuokle.lt, KIS
- Weaknesses observed: SERP owned by ISPs; independent tools exist but brand/trust heavy
- Format needed: in-browser test, no install, clear LT branding, explain results (static band articles now)
- Decision: **target** existing `/greicio-testas` — do not create a second speed-test URL; win on UX/privacy angle, not head-on ISP brand wars alone

### Cluster: IT news
- **Intent:** informational
- **Target URL:** `/it-naujienos`
- **Page type:** news index
- **Status:** defer (authority gap)

| Keyword | Keyword ID | Volume | KD | CPC | Source | Relevance | Decision |
| --- | --- | --- | --- | --- | --- | --- | --- |
| it naujienos | `a9a990dcb57ce3c50abd375d0d35450d` | 70 | 23 | null | import + details | section label | defer as growth bet |
| technologijų naujienos | `b9dcdfa326b97e88a550f9366896c66a` | 280 | unknown | null | import | broader media | reject as primary |

**SERP validation** (`it naujienos`, desktop LT, 2026-09-20)
- Dominant intent / page type: media homepages / portals
- Top results: technaujienos.lt, technews.lt, technologijos.lt, moksložinios, lrytas/it, manoit.lt
- Decision: **defer** competing for the head term; keep publishing curated LT explainers for long-tail / brand, do not spin doorway news hubs

## Rejected
| Keyword | Reason |
| --- | --- |
| speedtest | 82k LT volume but English brand SERP; use as EN secondary only if needed |
| what is my ip | 22.5k but English global intent; homepage already serves EN geo users |
| zebra internetas / mano teo savitarna | ISP-account noise from related expansion |
| technologijų naujienos as primary | media giants; wrong page type for thin AI news |

## Domain baseline (SiteProfiler, 2026-09-20)
- DA 17 · PA 33 · CF 22 · TF 21 · referring IPs 48
- Backlinks ~380 · referring domains ~155
- Competitors tool returned **0** competitive domains for mip.lt
- Facebook shares cache still shows parked-domain OG title

## Mangools artifacts
- Keyword list: `mip.lt — LT portfolio 2026-09-20` (list id `6ab03dc4f94fc7cac5873868`)
- Lookups performed:
  - `mangools_search_locations` Lithuania → 2440
  - `siteprofiler_get_overview` mip.lt
  - `siteprofiler_get_backlink_profile` / `find_competitors` mip.lt
  - `kwfinder_search_related_keywords` ×2 (speed + IP seeds)
  - `kwfinder_import_keywords` curated set (compact + full for IDs)
  - `kwfinder_get_keyword_details` ×3 finalists
  - `kwfinder_create_list` portfolio
