# Architecture rules

- Keep the normal Vite build rooted at `/`; use `VITE_BASE_PATH` only for deployment overrides so Lovable previews remain unchanged.
- Use the router basename and Vite base URL for local links so repository Pages and root-domain deployments share one source.
- Build GitHub Pages with the `github-pages` mode and the preparation script; it bundles uploaded host-specific assets and supplies the static 404 fallback without altering the normal Lovable asset flow.
- Use the npm lockfile in GitHub Actions and Node's built-in tests for deployment helpers so CI needs no extra testing dependency.