import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      publicationDate: z.string().datetime(),
      tags: z.array(z.string()).optional(),
      image: image(),
      imageAlt: z.string(),
    }),
});

export const collections = { blog };
