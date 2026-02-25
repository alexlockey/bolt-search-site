import { defineCollection, z } from 'astro:content';

const insights = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    contentType: z.string(),
    tags: z.array(z.string()).optional(),
    sector: z.string(),
    syndicate: z.boolean().optional(),
    status: z.string().optional(),
    author: z.string(),
    readTime: z.string().optional(),
  }),
});

const knowledgeBase = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    contentType: z.string(),
    practiceArea: z.string(),
    author: z.string(),
    status: z.string().optional(),
  }),
});

export const collections = { insights, 'knowledge-base': knowledgeBase };
