// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://equarion.hu',
  integrations: [sitemap()],
  vite: {
    resolve: {
      alias: {
        'astro/entrypoints/prerender': fileURLToPath(
          new URL('./node_modules/astro/dist/entrypoints/prerender.js', import.meta.url)
        )
      }
    },
    plugins: [tailwindcss()]
  }
});
