export interface Candidate {
  title: string;
  link: string;
  sourceName: string;
}

function stripCdata(value: string): string {
  const match = value.match(/^<!\[CDATA\[([\s\S]*)\]\]>$/);
  return match ? match[1] : value;
}

function decodeEntities(value: string): string {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function extractTag(itemXml: string, tag: string): string | null {
  const match = itemXml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i'));
  return match ? decodeEntities(stripCdata(match[1]).trim()) : null;
}

/**
 * Deliberately minimal — a regex-based <item> extractor rather than a full
 * XML parser dependency. RSS <title>/<link> extraction is small, bounded
 * work; it is not the "heavy synchronous regex over article bodies" the
 * design spec warns against (that refers to processing generated article
 * text, not a handful of feed items).
 */
export async function fetchFeed(feedUrl: string, sourceName: string): Promise<Candidate[]> {
  const response = await fetch(feedUrl, { headers: { 'user-agent': 'mip-lt-news-agent/1.0' } });
  if (!response.ok) return [];

  const xml = await response.text();
  const items = xml.match(/<item[^>]*>[\s\S]*?<\/item>/gi) ?? [];

  return items
    .map((item): Candidate | null => {
      const title = extractTag(item, 'title');
      const link = extractTag(item, 'link');
      return title && link ? { title, link, sourceName } : null;
    })
    .filter((candidate): candidate is Candidate => candidate !== null);
}
