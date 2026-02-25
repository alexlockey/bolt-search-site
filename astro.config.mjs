import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://www.bolt-search.com',
  output: 'static',
  integrations: [
    sitemap(),
    mdx()
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light'
    }
  }
});
