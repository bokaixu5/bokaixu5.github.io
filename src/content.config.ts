import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    lang: z.enum(["zh", "en"]),
    translationKey: z.string(),
    draft: z.boolean().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    lang: z.enum(["zh", "en"]),
    translationKey: z.string(),
    tech: z.array(z.string()),
    repoUrl: z.url().optional(),
    demoUrl: z.url().optional(),
    featured: z.boolean().optional(),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/about" }),
  schema: z.object({
    lang: z.enum(["zh", "en"]),
    title: z.string(),
    subtitle: z.string(),
  }),
});

export const collections = { posts, projects, about };
