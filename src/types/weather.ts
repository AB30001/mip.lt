/**
 * Shape of the `current` block from Open-Meteo's forecast endpoint, for the
 * query `?current=temperature_2m,weather_code&timezone=auto`. Every field
 * is optional — the upstream API, a timeout, or a malformed response can
 * all leave fields missing, and the weather card must fail closed (hide
 * itself) rather than render "undefined".
 */
export interface OpenMeteoCurrent {
  time?: string;
  temperature_2m?: number;
  weather_code?: number;
}

export interface OpenMeteoResponse {
  latitude?: number;
  longitude?: number;
  timezone?: string;
  current?: OpenMeteoCurrent;
}
