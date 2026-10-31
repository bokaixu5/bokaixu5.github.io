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
- `/zh/publications/`, `/en/publications/`
- `/zh/about/`, `/en/about/`

Root `/` redirects to `/en/`.

## Content Model

Blog and Projects are intentionally empty until real content is added. Add
Markdown files under `src/content/posts/{en,zh}/` and
`src/content/projects/{en,zh}/` to publish entries. Entries with `draft: true`
are excluded from the home page, list pages, detail routes, and search index.

Selected papers are maintained in `src/config/publications.ts`, with their
thumbnails in `public/images/publications/`. Research introductions are in
`src/content/about/{en,zh}/index.md`. Home uses the paragraph-form academic
profile in `src/content/profile/{en,zh}.md`; About uses the detailed sections
in `src/content/profile/{en,zh}-detailed.md`. Keep factual updates consistent
across both formats and languages.

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
- `draft` (optional)

### `about`

Required frontmatter:

- `lang` (`zh` or `en`)
- `title`
- `subtitle`

## Environment Variables

Optional settings can be defined in a local `.env` file:

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

`dist/` is generated during the build and does not need to be stored in Git.
Keep `node_modules/` locally for development; dependencies can be reinstalled
from `package-lock.json` with `npm ci`.
