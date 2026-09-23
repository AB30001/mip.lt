# Content map — mip.lt

_Last updated: 2026-09-23_

## Rule
One primary intent per canonical URL. A new page is only created when no existing page serves that intent.

| URL | Status | Cluster | Primary keyword | Intent | Page type | Action | Priority | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | live | IP lookup | mano ip | utility | tool | refreshed (meta+H1 local 2026-09-23) | high | deploy pending |
| `/interneto-greicio-testas` | live | Speed test | interneto greičio testas / interneto matuokle | utility | tool | refreshed (meta local 2026-09-23) | high | deploy pending |
| `/internet-speed-test` | live | Speed test (EN) | (EN pair of LT tool) | utility | tool | leave | medium | — |
| `/it-naujienos` | live | IT news | it naujienos | informational | news | leave | low | — |
| `/it-naujienos/{slug}` | live | IT news long-tail | article-specific | informational | news | leave | low | news-agent |
| `/apie` | live | brand | — | navigational | info | refresh | medium | agent (trust copy done) |
| `/kontaktai` | live | brand | — | navigational | info | leave | low | — |
| EN homepage URL | rejected | — | — | — | — | prune | — | decided: no EN `/` (2026-09-21) |

## Cannibalization register
| Intent | Competing URLs | Resolution |
| --- | --- | --- |
| Speed test LT | `/interneto-greicio-testas` only | Keep single LT URL; `/internet-speed-test` is EN hreflang pair |
| IP lookup | `/` only | Do not add `/mano-ip` doorway |
| IT news hub | `/it-naujienos` only | Articles support, do not target hub KW on posts |

## Internal linking plan
| From | To | Anchor | Added |
| --- | --- | --- | --- |
| `/` | `/interneto-greicio-testas` or `/internet-speed-test` | existing CTA | yes (live) |
| `/` (LT) | `/it-naujienos` | IT naujienos | yes (live) |
| `/interneto-greicio-testas` | `/internet-speed-test` | English version | yes |
| `/internet-speed-test` | `/interneto-greicio-testas` | Lietuviška versija | yes |
| `/greicio-testas` | `/interneto-greicio-testas` | 301 redirect | yes (2026-09-23) |
| `/speed-test` | `/internet-speed-test` | 301 redirect | yes (2026-09-23) |
| Header nav to tools/news | — | — | not yet (C1 open) |
