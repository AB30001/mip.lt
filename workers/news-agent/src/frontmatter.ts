import type { Article } from '@shared/article-schema';

// JSON string syntax is valid YAML flow-scalar syntax, so this is a safe
// way to emit YAML string/array values without a YAML library dependency.
function yamlString(value: string): string {
  return JSON.stringify(value);
}

function yamlStringArray(values: string[]): string {
  return `[${values.map(yamlString).join(', ')}]`;
}

function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function toMarkdownFile(article: Article, body: string): string {
  const lines: string[] = ['---'];
  lines.push(`title: ${yamlString(article.title)}`);
  lines.push(`description: ${yamlString(article.description)}`);
  lines.push(`publishedAt: ${isoDate(article.publishedAt)}`);
  if (article.updatedAt) lines.push(`updatedAt: ${isoDate(article.updatedAt)}`);
  lines.push(`tags: ${yamlStringArray(article.tags)}`);
  if (article.sourceUrl) lines.push(`sourceUrl: ${yamlString(article.sourceUrl)}`);
  if (article.sourceName) lines.push(`sourceName: ${yamlString(article.sourceName)}`);
  lines.push(`localAngle: ${yamlString(article.localAngle)}`);
  lines.push(`draft: ${article.draft}`);
  lines.push('---', '', body.trim(), '');

  return lines.join('\n');
}
