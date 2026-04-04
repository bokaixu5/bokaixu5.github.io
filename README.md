# Bokaiii Pages

Bilingual personal website built with Astro + Markdown, designed for GitHub Pages.

## Stack

- Astro (static output)
- Markdown content collections (`posts`, `projects`)
- Pagefind (on-site search)
- Giscus (comments)
- GA4 (analytics)
- GitHub Actions (deployment)

## Quick Start

1. Install Node 22 LTS.
2. Install dependencies:

```bash
npm install
```

3. Start local dev server:

```bash
npm run dev
```

4. Build production output (includes Pagefind indexing):

```bash
npm run build
```

## Routing

- `/zh/` Chinese homepage
- `/en/` English homepage
- `/zh/blog/`, `/en/blog/`
- `/zh/projects/`, `/en/projects/`
- `/zh/about/`, `/en/about/`

Root `/` redirects to `/zh/`.

## Content Model

### `posts`

Required frontmatter:

- `title`
- `description`
- `date`
- `tags[]`
- `lang` (`zh` or `en`)
- `translationKey`
- `draft` (optional)

### `projects`

Required frontmatter:

- `title`
- `summary`
- `lang` (`zh` or `en`)
- `translationKey`
- `tech[]`
- `repoUrl` (optional)
- `demoUrl` (optional)
- `featured` (optional)

## Environment Variables

Copy `.env.example` to `.env` and fill values when needed:

- `PUBLIC_GA_ID`
- `PUBLIC_GISCUS_REPO`
- `PUBLIC_GISCUS_REPO_ID`
- `PUBLIC_GISCUS_CATEGORY`
- `PUBLIC_GISCUS_CATEGORY_ID`

These variables are optional for first launch. If not provided:

- GA script will not be injected.
- Giscus area will show a fallback message instead of comments.

## Deploy to GitHub Pages

1. One-time setup in GitHub repo settings:
   - `Settings` -> `Pages`
   - Build and deployment source: **GitHub Actions**
2. Push to `main` (or run the `Deploy to GitHub Pages` workflow manually).
3. GitHub Actions will install dependencies, run `npm run build`, and deploy `dist` to Pages.
4. (Optional) Add `PUBLIC_*` variables later if you want to enable GA/Giscus in production.
