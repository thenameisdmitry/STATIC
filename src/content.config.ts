import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each lore chapter is an .mdx file in src/content/lore/
const lore = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/lore' }),
  schema: z.object({
    title: z.string(),
    kind: z.string().default('File'),        // e.g. "Location", "Case file", "Classified"
    description: z.string(),
    banner: z.string().optional(),           // path under /public, e.g. "/lore/the-city/banner.jpg"
    order: z.number().default(0),
  }),
});

export const collections = { lore };
