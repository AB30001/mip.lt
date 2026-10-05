// Deterministic fact sheet for the speed-test summary. Numbers stay here
// (not in the static tier articles) so download-time estimates and the LT
// median comparison stay accurate for each run.

export type Lang = 'lt' | 'en';

export interface SpeedTestResult {
  pingMs: number;
  downloadMbps: number;
  uploadMbps: number;
}

// Netflix's own published minimums: https://help.netflix.com/en/node/306
const STREAMING_TIERS = [
  { minMbps: 15, lt: '4K/UHD', en: '4K/UHD' },
  { minMbps: 5, lt: 'HD (1080p)', en: 'HD (1080p)' },
  { minMbps: 3, lt: 'SD', en: 'SD' },
] as const;

// Zoom's published minimums for video: https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0060674
const VIDEO_CALL_TIERS = [
  { minMbps: 3, lt: 'grupinius HD skambučius', en: 'group HD calls' },
  { minMbps: 1.5, lt: 'HD vaizdo skambučius vienas su vienu', en: '1-on-1 HD video calls' },
  { minMbps: 0.6, lt: 'skambučius su žemesne kokybe', en: 'lower-quality calls' },
] as const;

// Common, widely-used latency bands for real-time gaming (not specific to
// any one title) — lower is better, thresholds where lag becomes
// noticeable/frustrating for fast-paced or competitive play.
function gamingTier(pingMs: number, lang: Lang): string {
  if (pingMs < 30) return lang === 'lt' ? 'puiki, tinka konkursiniams žaidimams' : 'excellent, fine for competitive play';
  if (pingMs < 60) return lang === 'lt' ? 'gera, tinka daugumai žaidimų' : 'good, fine for most games';
  if (pingMs < 100) return lang === 'lt' ? 'pastebima, bet žaisti galima' : 'noticeable, but playable';
  return lang === 'lt' ? 'didelis delsimas, greitiems žaidimams nepatogu' : 'high latency, frustrating for fast-paced games';
}

function streamingTier(downloadMbps: number, lang: Lang): string {
  const tier = STREAMING_TIERS.find((t) => downloadMbps >= t.minMbps);
  if (!tier) return lang === 'lt' ? 'nepakanka net vaizdo įrašų srautiniam perdavimui' : 'not enough for video streaming';
  return lang === 'lt' ? tier.lt : tier.en;
}

function videoCallTier(minMbps: number, lang: Lang): string {
  const tier = VIDEO_CALL_TIERS.find((t) => minMbps >= t.minMbps);
  if (!tier) return lang === 'lt' ? 'gali strigti net pokalbiams' : 'may struggle even with calls';
  return lang === 'lt' ? tier.lt : tier.en;
}

// Reference file sizes chosen to be recognizable, round numbers — not
// meant to be exact for any specific file, just a relatable yardstick.
const REFERENCE_DOWNLOADS = [
  { sizeGB: 4, lt: 'HD filmas (~4 GB)', en: 'an HD movie (~4GB)' },
  { sizeGB: 40, lt: 'stambus žaidimas (~40 GB)', en: 'a large game (~40GB)' },
] as const;

function downloadTimeLabel(sizeGB: number, mbps: number, lang: Lang): string {
  if (mbps <= 0) return lang === 'lt' ? 'nežinoma' : 'unknown';
  const seconds = (sizeGB * 8000) / mbps;
  if (seconds < 60) return lang === 'lt' ? `~${Math.round(seconds)} s` : `~${Math.round(seconds)}s`;
  const minutes = seconds / 60;
  if (minutes < 60) return lang === 'lt' ? `~${Math.round(minutes)} min` : `~${Math.round(minutes)} min`;
  const hours = minutes / 60;
  return lang === 'lt' ? `~${hours.toFixed(1)} val.` : `~${hours.toFixed(1)}h`;
}

// Ookla-sourced Lithuanian fixed-broadband medians, checked August 2026 —
// these drift over time and have no live free API, so this needs an
// occasional manual refresh rather than a fetch.
const LT_MEDIAN_DOWNLOAD_MBPS = 54.5;
const LT_MEDIAN_UPLOAD_MBPS = 34.1;

// Ookla Speedtest Global Index, global median fixed-broadband download,
// March 2026 (~109.29 Mbps). Same caveat as above: refresh by hand.
const GLOBAL_MEDIAN_DOWNLOAD_MBPS = 109;

export type Region = 'lt' | 'global';

function regionComparison(downloadMbps: number, lang: Lang, region: Region): string {
  const median = region === 'lt' ? LT_MEDIAN_DOWNLOAD_MBPS : GLOBAL_MEDIAN_DOWNLOAD_MBPS;
  const ratio = downloadMbps / median;
  const lt = lang === 'lt';

  const subject =
    region === 'lt'
      ? lt
        ? `tipinis Lietuvos plačiajuostis ryšys (~${median} Mbps)`
        : `a typical Lithuanian broadband connection (~${median} Mbps)`
      : lt
        ? `tipinis plačiajuostis ryšys pasaulyje (~${median} Mbps)`
        : `a typical broadband connection worldwide (~${median} Mbps)`;

  if (ratio >= 1.15) return lt ? `sparčiau nei ${subject}` : `faster than ${subject}`;
  if (ratio <= 0.85) return lt ? `lėčiau nei ${subject}` : `slower than ${subject}`;
  return lt ? `apie tiek pat, kiek ${subject}` : `about the same as ${subject}`;
}

export interface SpeedFacts {
  streaming: string;
  gaming: string;
  videoCalls: string;
  downloads: { label: string; time: string }[];
  regionComparison: string;
}

export function computeSpeedFacts(result: SpeedTestResult, lang: Lang, region: Region): SpeedFacts {
  return {
    streaming: streamingTier(result.downloadMbps, lang),
    gaming: gamingTier(result.pingMs, lang),
    videoCalls: videoCallTier(Math.min(result.downloadMbps, result.uploadMbps), lang),
    downloads: REFERENCE_DOWNLOADS.map((ref) => ({
      label: lang === 'lt' ? ref.lt : ref.en,
      time: downloadTimeLabel(ref.sizeGB, result.downloadMbps, lang),
    })),
    regionComparison: regionComparison(result.downloadMbps, lang, region),
  };
}

export { LT_MEDIAN_DOWNLOAD_MBPS, LT_MEDIAN_UPLOAD_MBPS };
