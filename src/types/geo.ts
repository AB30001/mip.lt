/**
 * The subset of `Astro.locals.runtime.cf` this app actually reads.
 * All fields are `string | undefined` on purpose: the `cf` object is
 * absent entirely in local dev without `platformProxy: { enabled: true }`,
 * and absent in the Cloudflare dashboard preview editor, so every field
 * must be treated as possibly missing rather than assumed present.
 */
export interface GeoContext {
  city: string | undefined;
  latitude: string | undefined;
  longitude: string | undefined;
  country: string | undefined;
  timezone: string | undefined;
  asOrganization: string | undefined;
}
