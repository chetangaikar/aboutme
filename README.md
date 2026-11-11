# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/99827be9-cab0-477c-b5cc-6932dd52b072

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/99827be9-cab0-477c-b5cc-6932dd52b072) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

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

### Lovable

Simply open [Lovable](https://lovable.dev/projects/99827be9-cab0-477c-b5cc-6932dd52b072) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
