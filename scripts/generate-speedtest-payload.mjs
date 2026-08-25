// Runs after `astro build`. Writes a random-bytes payload straight into
// dist/client/ for the speed test's download leg — never committed to
// git (a multi-megabyte binary has no business living in version
// control), and regenerated fresh on every build.
//
// 20MB, not larger: Cloudflare Workers static assets are capped at 25
// MiB per file — this only works at all because the client re-fetches
// the file in a loop (cache-busted) for the full test duration rather
// than expecting one huge file to cover a fast connection alone.
//
// Random bytes, not zeros: a highly compressible payload (e.g. all
// zeros) risks Cloudflare's automatic compression shrinking what's
// actually sent over the wire, making the download test look far
// faster than the real connection. Random data can't compress.
//
// Also appends a header rule so this one file is served as
// application/octet-stream with no caching — every test run needs a
// genuine network transfer, not a cached copy answering instantly.
import { randomFillSync } from 'node:crypto';
import { appendFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '..', 'dist', 'client');

const SIZE_BYTES = 20 * 1024 * 1024; // 20MB — comfortably under the 25 MiB per-asset cap
const CHUNK_BYTES = 1024 * 1024; // fill in 1MB chunks

const payloadPath = path.join(distDir, 'speedtest-payload.bin');
const buffer = Buffer.alloc(SIZE_BYTES);
for (let offset = 0; offset < SIZE_BYTES; offset += CHUNK_BYTES) {
  randomFillSync(buffer, offset, Math.min(CHUNK_BYTES, SIZE_BYTES - offset));
}
writeFileSync(payloadPath, buffer);

const headersPath = path.join(distDir, '_headers');
const rule = '\n/speedtest-payload.bin\n  Content-Type: application/octet-stream\n  Cache-Control: no-store\n';
appendFileSync(headersPath, rule);

console.log(`speedtest-payload.bin written (${(SIZE_BYTES / 1024 / 1024).toFixed(0)}MB)`);
