# HackOn Team — working notes for agents

Single-page Next.js (App Router) marketing site. No database, no backend, no
external API credentials — everything is static content plus two YouTube
embeds.

## Running it

```bash
docker compose -f docker-compose.base44.yml up -d --build
```

Serves the Next dev server on host port 3000. The service installs from
`package-lock.json` with `npm ci` on every container start, so run
`npm install <pkg>` inside the container (or regenerate the lockfile) whenever
`package.json` changes, otherwise the container will fail to start.

```bash
docker compose -f docker-compose.base44.yml exec web npm install <pkg>   # inside the container
docker compose -f docker-compose.base44.yml restart web
```

Logs: `docker compose -f docker-compose.base44.yml logs -f web`

## Sandbox-only configuration

`next.config.mjs` adds the Base44 preview origin (`3000-$BASE44_PUBLIC_HOST_SUFFIX`)
to Next's `allowedDevOrigins` **only** when `BASE44_PREVIEW_MODE === "1"`. Without
the flag the config is untouched and Next keeps its default behaviour. Next blocks
cross-origin dev asset/HMR requests by `Origin`, and a bare `'*'` does not match a
host, which is why the exact preview origin is listed. `BASE44_PREVIEW_MODE` and
`BASE44_PUBLIC_HOST_SUFFIX` are passed into the container from the platform
environment (compose `environment:` bare entries) so the value can change without
editing the config file.

## Things that are easy to get wrong

- **Content lives in `lib/content.ts`** (projects, stack, team, ecosystem). The
  page sections only render it — edit copy there, not in the components.
- **Logos use `mix-blend-screen`.** The two HackOn PNGs are glow art that ships
  with a solid black plate; screen blending drops the black so they sit on
  `bg-zinc-950` without a visible box. Removing that class reintroduces a black
  square.
- **`framer-motion` scroll reveals** all go through `components/ui/Reveal.tsx`
  (`Reveal`, `RevealGroup` + `RevealItem`). `MotionProvider` sets
  `reducedMotion="user"`, so `prefers-reduced-motion` is honoured globally.
- **Team portraits are square (1254×1254)** and cropped with `object-cover` in a
  1:1 frame; the project images use their natural aspect ratio, so pass real
  `width`/`height` when adding media to `lib/content.ts`.
- **Hash links only** (`#build`, `#stack`, `#ecosystem`, `#team`, `#contact`).
  Sections carry `scroll-mt-20` so the sticky 64px header does not cover the
  anchor target.

## Verifying it works

1. `docker compose -f docker-compose.base44.yml ps` → `web` healthy.
2. `curl -s http://localhost:3000/ | grep -q "Ignite. Work. Ship. Repeat."`
3. In the browser: the hero renders with its grid backdrop, the mobile nav
   toggles at narrow widths, and the section anchors scroll to the right place.

Useful checks inside the repo:

```bash
docker compose -f docker-compose.base44.yml exec web npm run typecheck
```

## Content constraints (do not regress)

- Only **Bernie Nguyen** has a LinkedIn link; An Vu and Henry Nguyen must not.
- No invented metrics, user counts, revenue, or funding.
- The tagline `Ignite. Work. Ship. Repeat.` stays exact.
- Keep the copy as provided — no generic AI marketing filler.

## Deploying (Cloudflare Pages)

The site is fully static (no API routes, server actions or dynamic pages), so
Pages builds it as a static export:

- `next.config.mjs` sets `output: "export"` and `images: { unoptimized: true }`.
  Both are required: without `output: "export"` the build only writes `.next` and
  the Pages build fails with `Output directory "out" not found`, and Next's
  default image optimizer cannot run in a static export.
- Pages project settings: build command `npm run build`, build output directory
  `out`, environment variable `NODE_VERSION=22`. No `wrangler.toml` and no
  functions directory are needed.
- `out/` is git-ignored — build it locally only to check the export, never commit it.
