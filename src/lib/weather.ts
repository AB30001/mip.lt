import type { OpenMeteoResponse } from '../types/weather';

const CACHE_TTL_SECONDS = 15 * 60;
const FETCH_TIMEOUT_MS = 3000;

export interface WeatherResult {
  temperatureC: number;
  weatherCode: number;
}

// Rounding to 2 decimals (~1km) is deliberate: it's the synthetic cache
// key everyone in the same city shares, so one Open-Meteo call serves the
// whole neighbourhood instead of one per exact coordinate.
function buildCacheKey(lat: number, lon: number): Request {
  return new Request(`https://mip.lt/__cache/weather/${lat.toFixed(2)}/${lon.toFixed(2)}`);
}

// Type predicate, not a cast: the shallow shape check here is followed by
// real field-level typeof checks below before any number is trusted.
function isOpenMeteoResponse(value: unknown): value is OpenMeteoResponse {
  return typeof value === 'object' && value !== null;
}

function toWeatherResult(data: unknown): WeatherResult | null {
  if (!isOpenMeteoResponse(data)) return null;
  const temperatureC = data.current?.temperature_2m;
  const weatherCode = data.current?.weather_code;
  if (typeof temperatureC !== 'number' || typeof weatherCode !== 'number') return null;
  return { temperatureC, weatherCode };
}

export async function getWeather(lat: number, lon: number): Promise<WeatherResult | null> {
  const cache = caches.default;
  const cacheKey = buildCacheKey(lat, lon);

  const cached = await cache.match(cacheKey);
  if (cached) {
    return toWeatherResult(await cached.json());
  }

  const url = new URL('https://api.open-meteo.com/v1/forecast');
  url.searchParams.set('latitude', lat.toFixed(2));
  url.searchParams.set('longitude', lon.toFixed(2));
  url.searchParams.set('current', 'temperature_2m,weather_code');
  url.searchParams.set('timezone', 'auto');

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) return null;

    const data: unknown = await response.json();
    const result = toWeatherResult(data);
    if (!result) return null;

    const cacheResponse = new Response(JSON.stringify(data), {
      headers: {
        'content-type': 'application/json',
        'cache-control': `max-age=${CACHE_TTL_SECONDS}`,
      },
    });
    // Don't make the visitor wait on the cache write.
    cache.put(cacheKey, cacheResponse).catch((error) => console.error('weather cache put failed', error));

    return result;
  } catch (error) {
    console.error('open-meteo fetch failed', error);
    return null;
  } finally {
    clearTimeout(timeout);
  }
}
