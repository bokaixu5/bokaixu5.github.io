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

Copy `.env.example` to `.env` and fill values:

- `PUBLIC_GA_ID`
- `PUBLIC_GISCUS_REPO`
- `PUBLIC_GISCUS_REPO_ID`
- `PUBLIC_GISCUS_CATEGORY`
- `PUBLIC_GISCUS_CATEGORY_ID`

## Deploy to GitHub Pages

1. Push to `main`.
2. In GitHub repo settings:
   - Pages source: **GitHub Actions**
3. Add repository secrets used by `.github/workflows/deploy.yml`.

