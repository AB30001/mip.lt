export async function hashUrl(url: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(url));
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

export async function isSeen(kv: KVNamespace, hash: string): Promise<boolean> {
  return (await kv.get(hash)) !== null;
}

export async function markSeen(kv: KVNamespace, hash: string, ttlSeconds: number): Promise<void> {
  await kv.put(hash, '1', { expirationTtl: ttlSeconds });
}
