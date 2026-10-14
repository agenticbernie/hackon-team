/**
 * The Base44 preview serves this app through a proxy on its own public host, so
 * the browser's `Origin` header is `https://3000-<BASE44_PUBLIC_HOST_SUFFIX>`.
 * Next's dev server rejects cross-origin dev asset / HMR requests unless that
 * origin is allowlisted, and a bare '*' does not match a host.
 *
 * Sandbox-only: applied when BASE44_PREVIEW_MODE is exactly "1" (set by the
 * platform for the preview sandbox). Unset or any other value keeps Next's
 * default behavior, so production/dev outside the sandbox is unchanged.
 */
const previewOrigin =
  process.env.BASE44_PREVIEW_MODE === '1' && process.env.BASE44_PUBLIC_HOST_SUFFIX
    ? [`3000-${process.env.BASE44_PUBLIC_HOST_SUFFIX}`]
    : [];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /**
   * Cloudflare Pages serves this site as a static export, so `npm run build`
   * must write the deployable site to `out/` (the Pages "build output
   * directory"). Without `output: "export"` the build only writes `.next` and
   * Pages fails with `Output directory "out" not found`.
   *
   * `next dev` ignores `output`, so the preview is unaffected; the default
   * image optimizer has to be off because it is a server-side feature.
   */
  output: "export",
  images: { unoptimized: true },
  ...(previewOrigin.length > 0 ? { allowedDevOrigins: previewOrigin } : {}),
};

export default nextConfig;
