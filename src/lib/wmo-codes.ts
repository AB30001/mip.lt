export type WeatherLang = 'lt' | 'en';

/**
 * Open-Meteo returns WMO weather-interpretation codes (numeric). This maps
 * the codes the API can return to short labels in each language this app
 * shows. An unmapped code (a future WMO addition Open-Meteo starts
 * returning) still has a temperature to show, so it falls back to a
 * generic label rather than hiding the whole card.
 */
const WMO_LABELS_LT: Record<number, string> = {
  0: 'Giedra',
  1: 'Beveik giedra',
  2: 'Debesuota su pragiedruliais',
  3: 'Debesuota',
  45: 'Rūkas',
  48: 'Šarminis rūkas',
  51: 'Silpnas dulksnojimas',
  53: 'Vidutinis dulksnojimas',
  55: 'Stiprus dulksnojimas',
  56: 'Silpnas šaltas dulksnojimas',
  57: 'Stiprus šaltas dulksnojimas',
  61: 'Silpnas lietus',
  63: 'Vidutinis lietus',
  65: 'Stiprus lietus',
  66: 'Silpnas šaltas lietus',
  67: 'Stiprus šaltas lietus',
  71: 'Silpnas sniegas',
  73: 'Vidutinis sniegas',
  75: 'Stiprus sniegas',
  77: 'Sniego kruopos',
  80: 'Trumpalaikis silpnas lietus',
  81: 'Trumpalaikis vidutinis lietus',
  82: 'Trumpalaikis stiprus lietus',
  85: 'Trumpalaikis silpnas sniegas',
  86: 'Trumpalaikis stiprus sniegas',
  95: 'Perkūnija',
  96: 'Perkūnija su silpna kruša',
  99: 'Perkūnija su stipria kruša',
};

const WMO_LABELS_EN: Record<number, string> = {
  0: 'Clear sky',
  1: 'Mostly clear',
  2: 'Partly cloudy',
  3: 'Cloudy',
  45: 'Fog',
  48: 'Rime fog',
  51: 'Light drizzle',
  53: 'Moderate drizzle',
  55: 'Dense drizzle',
  56: 'Light freezing drizzle',
  57: 'Dense freezing drizzle',
  61: 'Light rain',
  63: 'Moderate rain',
  65: 'Heavy rain',
  66: 'Light freezing rain',
  67: 'Heavy freezing rain',
  71: 'Light snow',
  73: 'Moderate snow',
  75: 'Heavy snow',
  77: 'Snow grains',
  80: 'Light rain showers',
  81: 'Moderate rain showers',
  82: 'Heavy rain showers',
  85: 'Light snow showers',
  86: 'Heavy snow showers',
  95: 'Thunderstorm',
  96: 'Thunderstorm with light hail',
  99: 'Thunderstorm with heavy hail',
};

const UNKNOWN_LABEL: Record<WeatherLang, string> = {
  lt: 'Nežinomos oro sąlygos',
  en: 'Unknown conditions',
};

export function getWeatherLabel(code: number, lang: WeatherLang): string {
  const labels = lang === 'lt' ? WMO_LABELS_LT : WMO_LABELS_EN;
  return labels[code] ?? UNKNOWN_LABEL[lang];
}
