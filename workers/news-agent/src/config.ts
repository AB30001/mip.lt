// Volume is the single strongest signal of scaled content abuse — do not
// raise this without re-reading Google's scaled content abuse policy.
export const MAX_ARTICLES_PER_RUN = 2;

// Default to draft until output quality has been reviewed for a few
// weeks; flip to false once trusted.
export const DRAFT_DEFAULT = true;

export const KV_HASH_TTL_SECONDS = 90 * 24 * 60 * 60;

export const OPENAI_MODEL = 'gpt-4o-mini';

export interface FeedConfig {
  url: string;
  name: string;
}

// Pluggable source list — add/remove feeds here, nothing else changes.
export const FEEDS: FeedConfig[] = [
  { url: 'https://techcrunch.com/feed/', name: 'TechCrunch' },
  { url: 'https://www.theverge.com/rss/index.xml', name: 'The Verge' },
];

export const GITHUB_REPO = {
  owner: 'AB30001',
  repo: 'mip.lt',
  branch: 'main',
  contentDir: 'src/content/it-naujienos',
};

export const SYSTEM_PROMPT = `Esi Lietuvos IT naujienų redaktorius. Gavęs anglišką technologijų naujienos antraštę ir nuorodą, parašyk originalų straipsnį lietuvių kalba – ne pažodinį vertimą, o perpasakojimą su realia lietuviška perspektyva.

Grąžink TIK JSON objektą su laukais:
- title: lietuviška antraštė, iki 65 simbolių
- slug: mažosiomis raidėmis, lotyniškais simboliais, žodžiai atskirti brūkšneliu; lietuviškos raidės transliteruotos (ą→a č→c ė→e š→s ž→z ū→u į→i ų→u)
- description: iki 155 simbolių
- localAngle: pastraipa apie tai, ką ši naujiena konkrečiai reiškia Lietuvai – kainos eurais, vietinis prieinamumas, aktualumas Lietuvos verslui ar vartotojams
- body: straipsnis Markdown formatu
- tags: masyvas su 2–5 raktažodžiais

Pirmenybę teik ne skubioms naujienoms, o ilgalaikę vertę turintiems paaiškinimams ir gidams.

Jei negali pagrįstai parašyti tikros, konkrečios localAngle pastraipos – ne bendro pobūdžio užpildo – negrąžink straipsnio. Vietoj to grąžink lygiai tokį JSON: {"error": "no_local_angle"}`;
