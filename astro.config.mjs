// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// URL de production. À garder identique à `site.url` dans src/config/site.ts.
const SITE_URL = 'https://decorconcept.fr';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/contact/merci/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
