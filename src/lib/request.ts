import type { GeoContext } from '../types/geo';

export function getClientIp(request: Request): string {
  const cfIp = request.headers.get('CF-Connecting-IP');
  if (cfIp) return cfIp;

  const forwardedFor = request.headers.get('X-Forwarded-For');
  const first = forwardedFor?.split(',')[0]?.trim();
  if (first) return first;

  return 'unknown';
}

// A structural type (no index signature) so the real `CfProperties`
// interface from the Cloudflare adapter is assignable here without an
// `as` cast — we only ever read these five fields.
type CfLike = Partial<
  Record<'city' | 'latitude' | 'longitude' | 'country' | 'timezone' | 'asOrganization', unknown>
>;

function asString(value: unknown): string | undefined {
  return typeof value === 'string' ? value : undefined;
}

export function getGeoContext(cf: CfLike | undefined): GeoContext {
  return {
    city: asString(cf?.city),
    latitude: asString(cf?.latitude),
    longitude: asString(cf?.longitude),
    country: asString(cf?.country),
    timezone: asString(cf?.timezone),
    asOrganization: asString(cf?.asOrganization),
  };
}

export interface ParsedCoords {
  lat: number;
  lon: number;
}

export function parseCoords(geo: GeoContext): ParsedCoords | null {
  if (!geo.latitude || !geo.longitude) return null;
  const lat = parseFloat(geo.latitude);
  const lon = parseFloat(geo.longitude);
  if (Number.isNaN(lat) || Number.isNaN(lon)) return null;
  return { lat, lon };
}

// Search engines and link-preview bots crawl from their own infrastructure
// (mostly US-based), not the sharer's or searcher's location — so without
// this, Googlebot indexing mip.lt (and Twitter/Facebook/etc. generating a
// share preview) would always see the English branch, undermining the
// site's actual target: ranking for Lithuanian queries. Bots always get
// the Lithuanian branch regardless of their own geolocation; only real
// visitors get the geo-based LT/EN split. Plain substring match is
// deliberate — this only ever changes which language renders, never
// gates access or content, so spoofing it has no real payoff.
const CRAWLER_USER_AGENTS = [
  'googlebot',
  'bingbot',
  'duckduckbot',
  'yandexbot',
  'baiduspider',
  'slurp', // Yahoo
  'facebookexternalhit',
  'twitterbot',
  'linkedinbot',
  'slackbot',
  'discordbot',
  'telegrambot',
  'whatsapp',
];

export function isCrawler(userAgent: string | null): boolean {
  if (!userAgent) return false;
  const ua = userAgent.toLowerCase();
  return CRAWLER_USER_AGENTS.some((bot) => ua.includes(bot));
}
