// import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import rss from '@astrojs/rss';
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("posts");

  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `${import.meta.env.BASE_URL}posts/${post.slug}/`,
    })),
    trailingSlash: false,
    customData: `<language>en-gb</language>`,
  });
}