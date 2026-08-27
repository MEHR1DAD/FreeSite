import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '../utils/config';

export async function GET(context) {
  const blog = await getCollection('blog', ({ data }) => !data.draft);
  return rss({
    title: `${siteConfig.profile.nameFa} | وبلاگ FreeSite`,
    description: siteConfig.profile.bioFa,
    site: context.site || 'https://freesite.pages.dev',
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>fa-ir</language>`,
  });
}
