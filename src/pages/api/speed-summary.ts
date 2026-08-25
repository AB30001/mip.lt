import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { z } from 'zod';
import { computeSpeedFacts, type SpeedFacts } from '../../lib/speedtest-facts';

export const prerender = false;

const requestSchema = z.object({
  ping: z.number().nonnegative(),
  download: z.number().nonnegative(),
  upload: z.number().nonnegative(),
  lang: z.enum(['lt', 'en']),
});

const AI_API_URL = 'https://api.deepseek.com/chat/completions';
const AI_MODEL = 'deepseek-chat';
const TIMEOUT_MS = 8000;

const chatEnvelopeSchema = z.object({
  choices: z.array(z.object({ message: z.object({ content: z.string() }) })).min(1),
});

function buildPrompt(facts: SpeedFacts, result: { ping: number; download: number; upload: number }, lang: 'lt' | 'en'): string {
  const langName = lang === 'lt' ? 'lietuvių' : 'English';
  const factLines = [
    `Ping: ${result.ping}ms (${facts.gaming})`,
    `Download: ${result.download}Mbps (streaming: ${facts.streaming})`,
    `Upload: ${result.upload}Mbps (video calls: ${facts.videoCalls})`,
    ...facts.downloads.map((d) => `${d.label}: ${d.time}`),
    `Region: ${facts.regionComparison}`,
  ];

  return [
    `Write a short, friendly 2-3 sentence summary in ${langName} of what these internet speed test results mean in practical terms.`,
    'Use ONLY the facts listed below — do not calculate, estimate, or invent any number, price, or statistic that is not explicitly given.',
    'Do not repeat every fact mechanically; pick the most relevant/interesting 2-3 and phrase them naturally, like a knowledgeable friend explaining it.',
    'Return plain text only, no markdown, no JSON.',
    '',
    'Facts:',
    ...factLines.map((line) => `- ${line}`),
  ].join('\n');
}

export const POST: APIRoute = async ({ request }) => {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(null, { status: 400 });
  }

  const parsed = requestSchema.safeParse(body);
  if (!parsed.success) {
    return new Response(null, { status: 400 });
  }
  const { ping, download, upload, lang } = parsed.data;

  const facts = computeSpeedFacts({ pingMs: ping, downloadMbps: download, uploadMbps: upload }, lang);

  const apiKey = env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    // No key configured — still return the deterministic facts so the
    // client can render a plain (non-AI) fallback rather than nothing.
    return Response.json({ facts, summary: null }, { headers: { 'cache-control': 'no-store' } });
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(AI_API_URL, {
      method: 'POST',
      signal: controller.signal,
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: AI_MODEL,
        messages: [{ role: 'user', content: buildPrompt(facts, { ping, download, upload }, lang) }],
        max_tokens: 200,
      }),
    });

    if (!response.ok) {
      return Response.json({ facts, summary: null }, { headers: { 'cache-control': 'no-store' } });
    }

    const envelope = chatEnvelopeSchema.parse(await response.json());
    const summary = envelope.choices[0].message.content.trim();
    return Response.json({ facts, summary }, { headers: { 'cache-control': 'no-store' } });
  } catch {
    // Timed out, network error, or an unexpected response shape — the
    // test results themselves already rendered before this ever runs,
    // so failing here should degrade to the plain facts, not break the page.
    return Response.json({ facts, summary: null }, { headers: { 'cache-control': 'no-store' } });
  } finally {
    clearTimeout(timer);
  }
};
