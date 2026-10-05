import type { Lang, Region } from './speedtest-facts';

import labaiLetasLt from '../data/speed-summaries/labai-letas.lt.md?raw';
import silpnasLt from '../data/speed-summaries/silpnas.lt.md?raw';
import tipinisLt from '../data/speed-summaries/tipinis.lt.md?raw';
import greitasLt from '../data/speed-summaries/greitas.lt.md?raw';
import labaiGreitasLt from '../data/speed-summaries/labai-greitas.lt.md?raw';

import labaiLetasEn from '../data/speed-summaries/labai-letas.en.md?raw';
import silpnasEn from '../data/speed-summaries/silpnas.en.md?raw';
import tipinisEn from '../data/speed-summaries/tipinis.en.md?raw';
import greitasEn from '../data/speed-summaries/greitas.en.md?raw';
import labaiGreitasEn from '../data/speed-summaries/labai-greitas.en.md?raw';

import labaiLetasGlobalLt from '../data/speed-summaries/labai-letas.global.lt.md?raw';
import tipinisGlobalLt from '../data/speed-summaries/tipinis.global.lt.md?raw';
import greitasGlobalLt from '../data/speed-summaries/greitas.global.lt.md?raw';

import labaiLetasGlobalEn from '../data/speed-summaries/labai-letas.global.en.md?raw';
import tipinisGlobalEn from '../data/speed-summaries/tipinis.global.en.md?raw';
import greitasGlobalEn from '../data/speed-summaries/greitas.global.en.md?raw';

/**
 * Download-Mbps bands. Lithuanian visitors are anchored around Lithuania's
 * ~54.5 Mbps median fixed broadband; everyone else around the ~109 Mbps
 * global median. Primary signal is download — that's what users read first
 * and what streaming/download time depends on.
 */
export type SpeedSummaryTier =
  | 'labai-letas'
  | 'silpnas'
  | 'tipinis'
  | 'greitas'
  | 'labai-greitas';

// "silpnas" and "labai-greitas" never mention a country, so both regions share them.
const ARTICLES: Record<Region, Record<SpeedSummaryTier, Record<Lang, string>>> = {
  lt: {
    'labai-letas': { lt: labaiLetasLt, en: labaiLetasEn },
    silpnas: { lt: silpnasLt, en: silpnasEn },
    tipinis: { lt: tipinisLt, en: tipinisEn },
    greitas: { lt: greitasLt, en: greitasEn },
    'labai-greitas': { lt: labaiGreitasLt, en: labaiGreitasEn },
  },
  global: {
    'labai-letas': { lt: labaiLetasGlobalLt, en: labaiLetasGlobalEn },
    silpnas: { lt: silpnasLt, en: silpnasEn },
    tipinis: { lt: tipinisGlobalLt, en: tipinisGlobalEn },
    greitas: { lt: greitasGlobalLt, en: greitasGlobalEn },
    'labai-greitas': { lt: labaiGreitasLt, en: labaiGreitasEn },
  },
};

// Upper bounds (exclusive) of each tier's download band, in Mbps.
const TIER_BOUNDS: Record<Region, readonly [number, number, number, number]> = {
  lt: [15, 40, 80, 200],
  global: [20, 70, 150, 350],
};

export function pickSpeedSummaryTier(downloadMbps: number, region: Region): SpeedSummaryTier {
  const [veryLow, low, typical, fast] = TIER_BOUNDS[region];
  if (downloadMbps < veryLow) return 'labai-letas';
  if (downloadMbps < low) return 'silpnas';
  if (downloadMbps < typical) return 'tipinis';
  if (downloadMbps < fast) return 'greitas';
  return 'labai-greitas';
}

export function getSpeedSummaryArticle(downloadMbps: number, lang: Lang, region: Region): string {
  const tier = pickSpeedSummaryTier(downloadMbps, region);
  return ARTICLES[region][tier][lang].trim();
}
