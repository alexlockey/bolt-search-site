import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.bolt-search.com',
  trailingSlash: 'always',
  output: 'static',
  adapter: vercel(),
  integrations: [
    // Hidden pages (insights archive, onboarding forms, thank-you pages) are noindex, so keep them out of the sitemap.
    sitemap({
      filter: (page) => !/\/(insights|onboarding|client-onboarding|concepts)(\/|$)/.test(new URL(page).pathname),
    }),
    mdx()
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light'
    }
  }
});
