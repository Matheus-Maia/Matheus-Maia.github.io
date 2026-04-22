import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://Matheus-Maia.github.io',
  integrations: [tailwind()],
});
