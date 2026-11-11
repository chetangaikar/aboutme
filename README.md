## This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

### GitHub Pages

1. Push this project, including `.github/workflows/deploy-pages.yml`, to your repository's `main` branch.
2. In GitHub, open **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. Open **Actions → Deploy to GitHub Pages → Run workflow**, or push a new change to `main`.
4. The deployment's URL appears in the workflow and under **Settings → Pages**.

For `chetangaikar/aboutme`, the standard Pages address is `https://chetangaikar.github.io/aboutme/`.
The workflow detects the Pages base path automatically, including root sites and configured custom domains.
If your default branch is not `main`, update the workflow's branch trigger.

The Pages build bundles the existing portrait, includes a `404.html` fallback for client-side routes, and disables Jekyll.
Lovable preview and normal publishing continue to use the original build and image delivery.
GitHub serves client-side fallback routes with an HTTP 404 status; use the site's root address as its canonical entry point.

**CV:** the current source does not contain `public/cv.pdf`. Add your actual CV there to enable the existing Download CV button; no substitute CV is generated.

Local Pages checks (Node.js 22):

```sh
npm ci
npm run test:pages
VITE_BASE_PATH=/aboutme/ npm run build:pages
npm run preview -- --host 127.0.0.1
```

Visit `http://127.0.0.1:4173/aboutme/`. For a root-domain build, use `VITE_BASE_PATH=/`.
The portrait packaging step downloads the existing uploaded image from the original Lovable preview host.
If that host changes, set `LOVABLE_ASSET_ORIGIN` to a working Lovable host when running `build:pages`.
