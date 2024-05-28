import { z, defineCollection } from "astro:content";

const schema = z.object({
  title: z.string(),
  pubDate: z.date(),
  description: z.string(),
  author: z.string(),
  image: z.object({
    url: z.string(),
    alt: z.string()
  }),
  tags: z.array(z.string())
});

const postsSchema = defineCollection({
  type: 'content',
  schema: schema
})

export type BlogPost = z.infer<typeof schema>;

export const collections = {
  posts: postsSchema,
};