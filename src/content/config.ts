import { defineCollection, z } from 'astro:content';

/**
 * Content Collections Configuration
 * Defines schema for future content types (e.g., workshops)
 */

const workshopsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    duration: z.string(),
    location: z.string(),
    price: z.number().optional(),
    image: z.string(),
    tags: z.array(z.string()),
    published: z.boolean().default(false),
  }),
});

export const collections = {
  workshops: workshopsCollection,
};
