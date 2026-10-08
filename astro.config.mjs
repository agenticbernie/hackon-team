// @ts-check
import { defineConfig } from 'astro/config';

// Sandbox preview support.
// The Base44 preview proxy reaches the dev server as
// Host: <port>-<sandbox id>.${BASE44_SANDBOX_HOST_DOMAIN}, which Vite's host
// check rejects by default. When BASE44_PREVIEW_MODE === "1" we extend the
// existing allowlist with that wildcard. With the flag unset (or any other
// value) `allowedHosts` stays undefined and Astro keeps its default behavior.
const previewMode = process.env.BASE44_PREVIEW_MODE === '1';
const sandboxHostDomain = process.env.BASE44_SANDBOX_HOST_DOMAIN;
const allowedHosts =
  previewMode && sandboxHostDomain ? [`.${sandboxHostDomain}`] : undefined;

export default defineConfig({
  server: {
    host: true,
    port: 3000,
  },
  vite: {
    server: {
      // Bind mounts don't reliably emit inotify events inside containers,
      // so poll for changes to keep hot reload working.
      watch: { usePolling: true },
      ...(allowedHosts ? { allowedHosts } : {}),
    },
  },
});
