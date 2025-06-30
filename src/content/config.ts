import { defineCollection, z } from 'astro:content';

const workCollection = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.date().optional(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    image: z.string().optional(), // Added image field
  }),
});

export const collections = {
  'work': workCollection,
};
