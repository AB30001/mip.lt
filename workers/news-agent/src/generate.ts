import { z } from 'zod';
import { AI_API_URL, AI_MODEL, SYSTEM_PROMPT } from './config';
import { modelOutputSchema, type ModelOutput } from './schema';
import type { Candidate } from './sources';

interface GenerateSuccess {
  ok: true;
  article: ModelOutput;
}

interface GenerateFailure {
  ok: false;
  reason: string;
}

const chatEnvelopeSchema = z.object({
  choices: z
    .array(
      z.object({
        message: z.object({ content: z.string() }),
      }),
    )
    .min(1),
});

const noAngleSchema = z.object({ error: z.literal('no_local_angle') });

async function callChatCompletion(apiKey: string, userPrompt: string): Promise<unknown> {
  const response = await fetch(AI_API_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: AI_MODEL,
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: userPrompt },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`Chat completion request failed: ${response.status} ${await response.text()}`);
  }

  const envelope = chatEnvelopeSchema.parse(await response.json());
  return JSON.parse(envelope.choices[0].message.content);
}

export async function generateArticle(
  apiKey: string,
  candidate: Candidate,
  previousError?: string,
): Promise<GenerateSuccess | GenerateFailure> {
  const userPrompt = previousError
    ? `Šaltinio antraštė: "${candidate.title}"\nNuoroda: ${candidate.link}\n\nAnkstesnis atsakymas neatitiko reikalavimų dėl šios klaidos – ištaisyk ir bandyk dar kartą:\n${previousError}`
    : `Šaltinio antraštė: "${candidate.title}"\nNuoroda: ${candidate.link}`;

  let raw: unknown;
  try {
    raw = await callChatCompletion(apiKey, userPrompt);
  } catch (error) {
    return { ok: false, reason: `chat_completion_failed: ${String(error)}` };
  }

  if (noAngleSchema.safeParse(raw).success) {
    return { ok: false, reason: 'no_local_angle' };
  }

  const parsed = modelOutputSchema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false, reason: parsed.error.message };
  }

  return { ok: true, article: parsed.data };
}
