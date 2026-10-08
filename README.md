# HackOn — team landing page

A single-page **Astro** landing site for the HackOn hackathon team.

## Local development

```bash
npm install
npm run dev
```

The dev server listens on http://localhost:3000.

## Production build

```bash
npm run build   # static output in dist/
npm run preview
```

## Sandbox / preview

Run the full stack in Docker (used by the Base44 preview):

```bash
docker compose -f docker-compose.base44.yml up -d --build
```

See [AGENTS.md](./AGENTS.md) for details on the dev-server setup and the
sandbox-only host-allowlist override.
