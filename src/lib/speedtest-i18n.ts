export interface SpeedTestStrings {
  lang: 'lt' | 'en';
  title: string;
  description: string;
  heading: string;
  intro: string;
  ispLabel: string;
  pingLabel: string;
  downloadLabel: string;
  uploadLabel: string;
  unitMs: string;
  unitMbps: string;
  startLabel: string;
  retestLabel: string;
  statusPing: string;
  statusDownload: string;
  statusUpload: string;
  statusDone: string;
}

export const SPEEDTEST_LT: SpeedTestStrings = {
  lang: 'lt',
  title: 'Interneto greičio testas – mip.lt',
  description: 'Patikrinkite savo interneto atsisiuntimo ir įkėlimo greitį bei delsą nemokamai, be registracijos.',
  heading: 'Interneto greičio testas',
  intro: 'Realus atsisiuntimo, įkėlimo greitis ir delsa – tiesiai naršyklėje, be jokių papildinių.',
  ispLabel: 'Tiekėjas',
  pingLabel: 'Delsa',
  downloadLabel: 'Atsisiuntimas',
  uploadLabel: 'Įkėlimas',
  unitMs: 'ms',
  unitMbps: 'Mbps',
  startLabel: 'Pradėti testą',
  retestLabel: 'Testuoti dar kartą',
  statusPing: 'Tikrinama delsa…',
  statusDownload: 'Tikrinamas atsisiuntimo greitis…',
  statusUpload: 'Tikrinamas įkėlimo greitis…',
  statusDone: 'Testas baigtas.',
};

export const SPEEDTEST_EN: SpeedTestStrings = {
  lang: 'en',
  title: 'Internet Speed Test – mip.lt',
  description: 'Test your internet download speed, upload speed, and ping for free, no sign-up required.',
  heading: 'Internet Speed Test',
  intro: 'Real download speed, upload speed, and ping — right in your browser, no plugins.',
  ispLabel: 'Provider',
  pingLabel: 'Ping',
  downloadLabel: 'Download',
  uploadLabel: 'Upload',
  unitMs: 'ms',
  unitMbps: 'Mbps',
  startLabel: 'Start Test',
  retestLabel: 'Test Again',
  statusPing: 'Measuring ping…',
  statusDownload: 'Measuring download speed…',
  statusUpload: 'Measuring upload speed…',
  statusDone: 'Test complete.',
};
