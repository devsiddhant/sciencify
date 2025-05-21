# Deploying Sciencify to GitHub Pages

This guide provides step-by-step instructions to deploy your Vite-React "Sciencify" application (located in the `sciencify` folder) to GitHub Pages.

## Prerequisites

1.  **Git Installed:** Ensure you have Git installed on your local machine.
2.  **GitHub Account:** You need a GitHub account.
3.  **Project on GitHub:** Your `sciencify` project code should be pushed to a GitHub repository. Let's assume your repository is named `sciencify` (e.g., `https://github.com/<YOUR_USERNAME>/sciencify`). If your repository has a different name, adjust the `base` path in `vite.config.ts` accordingly (see Step 2).

## Step 1: Verify `package.json`

Ensure your `sciencify/package.json` has a build script. It should look something like this (it was previously confirmed to be correct):

```json
{
  "name": "react_repo", // Or "sciencify"
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "rm -rf node_modules/.vite-temp && tsc -b && vite build", // Or simply "tsc && vite build"
    "lint": "eslint .",
    "preview": "vite preview"
  },
  // ... other dependencies
}
```

## Step 2: Configure `base` Path in `vite.config.ts`

The `base` path in `sciencify/vite.config.ts` is crucial for GitHub Pages, especially if your site is served from a subfolder (e.g., `https://<YOUR_USERNAME>.github.io/<REPOSITORY_NAME>/`).

*   **If deploying to a subfolder (e.g., `https://<YOUR_USERNAME>.github.io/sciencify/`):**
    Your `base` should be the repository name, starting and ending with a slash.
    Open `sciencify/vite.config.ts` and ensure the `base` property is set like this:
    ```typescript
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    export default defineConfig({
      base: '/sciencify/', // <-- Make sure this matches your repository name
      plugins: [react()],
      // ... other configurations
    })
    ```
    *(I previously set this to `'./'` for general relative paths. For a repository named `sciencify`, `'/sciencify/'` is more explicit and often preferred for subfolder deployments.)*

*   **If deploying to the root (e.g., `https://<YOUR_USERNAME>.github.io/` where your repository is named `<YOUR_USERNAME>.github.io`):**
    Your `base` can be `'/'` or `'./'`.
    ```typescript
    export default defineConfig({
      base: './', // or '/'
      plugins: [react()],
    })
    ```
    The current setting of `'./'` should work for this scenario.

## Step 3: Install `gh-pages` Package

The `gh-pages` package simplifies deploying the contents of your `dist` folder to a special `gh-pages` branch, which GitHub Pages can then serve.

Navigate to your `sciencify` project directory in your terminal:
```bash
cd path/to/your/sciencify
```

Install `gh-pages` as a dev dependency:
```bash
pnpm add -D gh-pages
# OR if using npm:
# npm install gh-pages --save-dev
# OR if using yarn:
# yarn add gh-pages --dev
```

## Step 4: Add a Deploy Script to `package.json`

Open `sciencify/package.json` and add a `deploy` script to the `scripts` section:

```json
{
  // ... other parts of package.json
  "scripts": {
    "dev": "vite",
    "build": "rm -rf node_modules/.vite-temp && tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "deploy": "pnpm run build && gh-pages -d dist" // Add this line
  },
  // ...
}
```
*Note: If you use `npm` or `yarn`, replace `pnpm run build` with `npm run build` or `yarn build` respectively.*

## Step 5: Build and Deploy

1.  **Commit and push any local changes** to your main branch on GitHub.
2.  **Run the deploy script** from your `sciencify` project directory:
    ```bash
    pnpm run deploy
    # OR if using npm:
    # npm run deploy
    # OR if using yarn:
    # yarn deploy
    ```
    This command will:
    *   First, build your project (running `pnpm run build`), creating the `sciencify/dist` folder.
    *   Then, `gh-pages -d dist` will push the contents of the `sciencify/dist` folder to a new branch named `gh-pages` in your GitHub repository. If the branch doesn't exist, it will be created.

## Step 6: Configure GitHub Pages in Repository Settings

1.  Go to your GitHub repository on the web.
2.  Click on **Settings**.
3.  In the left sidebar, click on **Pages**.
4.  Under "Build and deployment", for the **Source**, select **Deploy from a branch**.
5.  Under "Branch", select the `gh-pages` branch and `/ (root)` folder.
6.  Click **Save**.

GitHub Pages will now build and deploy your site from the `gh-pages` branch. It might take a few minutes for the site to become live. Your site will be available at:

*   If `base` was `'/sciencify/'`: `https://<YOUR_USERNAME>.github.io/sciencify/`
*   If `base` was `'./'` or `'/'` (and repo is `<YOUR_USERNAME>.github.io`): `https://<YOUR_USERNAME>.github.io/`

## Troubleshooting

*   **Blank Page/Asset Loading Issues:** This is often due to an incorrect `base` path in `vite.config.ts`. Double-check it matches your deployment URL structure.
*   **404 Errors on Refresh (for React Router):** If you are using React Router with routes other than the homepage (e.g., `/articles/:id`), GitHub Pages might return a 404 on page refresh because it's a single-page application.
    *   **Simple Fix:** You can sometimes resolve this by adding a `404.html` file in your `public` directory (which will be copied to `dist`) that duplicates the content of `index.html` and includes a script to handle redirecting based on the path.
    *   **Vite Plugin:** Look for Vite plugins that help with SPA routing on GitHub Pages (e.g., by creating a `404.html` that redirects correctly).
*   **Custom Domain:** If you use a custom domain, configure it in the GitHub Pages settings and ensure your DNS records are set up correctly. The `base` path in `vite.config.ts` should typically be `'/'` or `'./'` for custom domains pointing to the root.

By following these steps, your "Sciencify" website should be successfully deployed to GitHub Pages!
