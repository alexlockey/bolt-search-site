import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const insights = await getCollection('insights');

  const sorted = insights.sort(
    (a, b) => new Date(b.data.publishedAt).getTime() - new Date(a.data.publishedAt).getTime()
  );

  return rss({
    title: 'Bolt Search - Insights',
    description: 'Executive search and advisory insights for the education and training sector',
    site: context.site,
    items: sorted.map(post => ({
      title: post.data.title,
      pubDate: new Date(post.data.publishedAt),
      description: post.data.description,
      link: `/insights/${post.slug}`,
    })),
  });
}
