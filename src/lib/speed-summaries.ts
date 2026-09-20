import type { Lang } from './speedtest-facts';

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

/**
 * Download-Mbps bands, anchored around Lithuania's ~54.5 Mbps median fixed
 * broadband. Primary signal is download — that's what users read first and
 * what streaming/download time depends on.
 */
export type SpeedSummaryTier =
  | 'labai-letas'
  | 'silpnas'
  | 'tipinis'
  | 'greitas'
  | 'labai-greitas';

const ARTICLES: Record<SpeedSummaryTier, Record<Lang, string>> = {
  'labai-letas': { lt: labaiLetasLt, en: labaiLetasEn },
  silpnas: { lt: silpnasLt, en: silpnasEn },
  tipinis: { lt: tipinisLt, en: tipinisEn },
  greitas: { lt: greitasLt, en: greitasEn },
  'labai-greitas': { lt: labaiGreitasLt, en: labaiGreitasEn },
};

export function pickSpeedSummaryTier(downloadMbps: number): SpeedSummaryTier {
  if (downloadMbps < 15) return 'labai-letas';
  if (downloadMbps < 40) return 'silpnas';
  if (downloadMbps < 80) return 'tipinis';
  if (downloadMbps < 200) return 'greitas';
  return 'labai-greitas';
}

export function getSpeedSummaryArticle(downloadMbps: number, lang: Lang): string {
  const tier = pickSpeedSummaryTier(downloadMbps);
  return ARTICLES[tier][lang].trim();
}
