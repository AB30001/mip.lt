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
type CfLike = Partial<Record<'city' | 'latitude' | 'longitude' | 'country' | 'timezone', unknown>>;

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
