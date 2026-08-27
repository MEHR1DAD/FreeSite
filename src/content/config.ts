import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    coverImage: z.string().default('/images/sample-blog-1.svg'),
    tags: z.array(z.string()).default([]),
    author: z.string().default('مهرداد رضایی'),
    draft: z.boolean().default(false),
    language: z.enum(['fa', 'en']).default('fa'),
  }),
});

export const collections = {
  blog: blogCollection,
};
