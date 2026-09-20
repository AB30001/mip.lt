# Content map — mip.lt

_Last updated: 2026-09-20_

## Rule
One primary intent per canonical URL. A new page is only created when no existing page serves that intent.

| URL | Status | Cluster | Primary keyword | Intent | Page type | Action | Priority | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | live | IP lookup | mano ip | utility | tool | refresh | high | agent/owner |
| `/greicio-testas` | live | Speed test | interneto greičio testas / interneto matuokle | utility | tool | refresh | high | agent |
| `/speed-test` | live | Speed test (EN) | (EN pair of LT tool) | utility | tool | leave | medium | — |
| `/it-naujienos` | live | IT news | it naujienos | informational | news | leave | low | — |
| `/it-naujienos/{slug}` | live | IT news long-tail | article-specific | informational | news | leave | low | news-agent |
| `/apie` | live | brand | — | navigational | info | refresh | medium | agent (trust copy done) |
| `/kontaktai` | live | brand | — | navigational | info | leave | low | — |
| EN homepage URL | rejected | — | — | — | — | prune | — | decided: no EN `/` (2026-09-21) |

## Cannibalization register
| Intent | Competing URLs | Resolution |
| --- | --- | --- |
| Speed test LT | `/greicio-testas` only | Keep single LT URL; `/speed-test` is EN hreflang pair |
| IP lookup | `/` only | Do not add `/mano-ip` doorway |
| IT news hub | `/it-naujienos` only | Articles support, do not target hub KW on posts |

## Internal linking plan
| From | To | Anchor | Added |
| --- | --- | --- | --- |
| `/` | `/greicio-testas` or `/speed-test` | existing CTA | yes (live) |
| `/` (LT) | `/it-naujienos` | IT naujienos | yes (live) |
| `/greicio-testas` | `/speed-test` | English version | yes (2026-09-20) |
| `/speed-test` | `/greicio-testas` | Lietuviška versija | yes (2026-09-20) |
| Header nav to tools/news | — | — | not yet (C1 open) |
