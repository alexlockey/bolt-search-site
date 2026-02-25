import { defineCollection, z } from 'astro:content';

const insights = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    image: z.string().optional(),
    contentType: z.enum(['insights', 'blog', 'case-study', 'knowledge-base', 'briefing']),
    tags: z.array(z.string()).default([]),
    sector: z.enum(['training-providers', 'edtech', 'fe-colleges', 'he-institutions', 'investors', 'general']).default('general'),
    syndicate: z.boolean().default(false),
    status: z.enum(['draft', 'review', 'scheduled', 'published']).default('draft'),
    author: z.string().default('Bolt Search'),
    readTime: z.string().optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    sector: z.enum(['training-providers', 'edtech', 'fe-colleges', 'he-institutions', 'investors', 'general']).default('general'),
    syndicate: z.boolean().default(false),
    status: z.enum(['draft', 'review', 'scheduled', 'published']).default('draft'),
    author: z.string().default('Bolt Search'),
  }),
});

export const collections = { insights, blog };
