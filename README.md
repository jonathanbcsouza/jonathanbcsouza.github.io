## Portfolio Website

Personal portfolio site for projects, skills, and music. Built with React and Vite; content lives in static data modules under `src/data/`.

### Technical Stack

- **Frontend**: React, Styled Components, React Router, Vite, React Icons
- **Content**: Static JS modules in `src/data/`
- **CI/CD**: GitHub Actions builds `main` and publishes `dist` to GitHub Pages

### Deployment

The site is served from GitHub Pages at https://jonathanbcsouza.github.io/.

Every push to `main` runs `.github/workflows/deploy.yml`, which lints, builds,
and uploads `dist` as the Pages artifact. This requires **Settings → Pages →
Build and deployment → Source** to be set to **GitHub Actions**. Pointing it at
a branch instead makes Pages serve this repository's unbuilt source, which
renders a blank page.

GitHub Pages applies no rewrite rules, so the build writes one `index.html` per
route (plus a `404.html` fallback) and routes resolve as real 200 responses.
Routes are declared once in `src/data/siteRoutes.js`.

`vercel.json` is retained so the same build also works on Vercel, which handles
SPA routing with a rewrite instead.

### SEO

Each route gets its own `<title>`, description, canonical URL and Open Graph
tags, written into its static HTML at build time from `src/data/siteRoutes.js`
(see `scripts/pagesRoutes.js`). The build also emits `sitemap.xml` and a
`noindex` `404.html`. The social preview card is `public/og-image.png`
(1200x630).

### Quality checks

```sh
npm run check   # lint (including jsx-a11y), tests, production build
npm test        # Vitest + Testing Library only
```

CI runs lint, tests and the build before deploying.

### Running Locally

1. **Clone the Repository**:

   ```sh
   git clone https://github.com/jonathanbcsouza/jonathanbcsouza.github.io.git
   ```

2. **Install Dependencies**:

   ```sh
   npm install
   ```

3. **Start the Development Server**:

   ```sh
   npm run dev
   ```

### License

This project is licensed under the [MIT license](./LICENSE).
