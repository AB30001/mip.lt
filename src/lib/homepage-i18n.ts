import type { WeatherLang } from './wmo-codes';

export interface HomepageStrings {
  lang: WeatherLang;
  pageTitle: string;
  pageDescription: string;
  ipLabel: string;
  ipNotDetected: string;
  copyLabel: string;
  copiedLabel: string;
  showNewsLink: boolean;
  newsLinkLabel: string;
}

const LT: HomepageStrings = {
  lang: 'lt',
  pageTitle: 'Mano IP adresas ir oras – mip.lt',
  pageDescription: 'Sužinokite savo viešą IP adresą ir vietinį orą akimirksniu.',
  ipLabel: 'Jūsų IP adresas',
  ipNotDetected: 'Nepavyko nustatyti IP adreso',
  copyLabel: 'Kopijuoti',
  copiedLabel: 'Nukopijuota!',
  showNewsLink: true,
  newsLinkLabel: 'IT naujienos',
};

const EN: HomepageStrings = {
  lang: 'en',
  pageTitle: 'My IP Address and Weather – mip.lt',
  pageDescription: 'Find your public IP address and local weather instantly.',
  ipLabel: 'Your IP address',
  ipNotDetected: 'Could not detect IP address',
  copyLabel: 'Copy',
  copiedLabel: 'Copied!',
  showNewsLink: false,
  newsLinkLabel: '',
};

// The blog is Lithuania-focused content, so the news link (and the rest
// of the page copy) only makes sense to a Lithuanian visitor — everyone
// else gets the English tool with no link into content that isn't for them.
export function getHomepageStrings(countryCode: string | undefined): HomepageStrings {
  return countryCode === 'LT' ? LT : EN;
}
