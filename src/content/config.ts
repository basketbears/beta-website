import { z, defineCollection } from 'astro:content';

// see https://docs.astro.build/en/guides/images/

const postCollection = defineCollection({
  schema: ({ image }) => {
    z.object({
      date: z.date().optional(),
      title: z.string(),
      summary: z.string().optional(),
      author: z.string().optional(),
      image: image(),
      hero_image: image(),
      image_source: z.string().optional(),
      coach: z.string().optional(),
    })
  },
});

export const collections = {
  post: postCollection,
};
