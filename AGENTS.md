# AGENTS.md

Notes for anyone (human or agent) working in this repo.

## What this is

A static Astro landing page for the HackOn hackathon team. Astro renders pages
to HTML; there is no server-side API, database, or external service, so the app
needs **no credentials** and no infrastructure services.

## Running it in the Base44 sandbox

```bash
docker compose -f docker-compose.base44.yml up -d --build
```

- The `web` service runs `node:22`, bind-mounts the repo at `/app`, installs
  dependencies into a named `node_modules` volume on startup, and runs
  `astro dev` with hot reload.
- The app is served on host port **3000** (mapped from the Astro dev server,
  which is configured to listen on `0.0.0.0:3000` in `astro.config.mjs`).
- Healthcheck hits `http://localhost:3000/` inside the container.

Logs: `docker compose -f docker-compose.base44.yml logs -f web`

## Sandbox-only overrides

Both live in `astro.config.mjs` and are gated on `BASE44_PREVIEW_MODE === "1"`:

- **Vite host allowlist.** The preview proxy reaches the dev server as
  `Host: <port>-<sandbox id>.$BASE44_SANDBOX_HOST_DOMAIN`, which Vite rejects by
  default. In preview mode the allowlist is extended with `.$BASE44_SANDBOX_HOST_DOMAIN`.
  When the flag is unset or any other value, `allowedHosts` stays undefined and
  Astro keeps its default behavior. (The platform also sets
  `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS`, passed through in compose.)
- Nothing else is sandbox-specific. `vite.server.watch.usePolling` is enabled
  unconditionally because bind mounts need it in containers; it has no effect on
  a normal local checkout.

## Verifying a change

```bash
curl -sS http://localhost:3000/ | head
```

Frontend edits hot-reload automatically. A change to `astro.config.mjs`,
`package.json`, or the compose file needs a service restart:

```bash
docker compose -f docker-compose.base44.yml restart web
```
