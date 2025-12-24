import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = { news };