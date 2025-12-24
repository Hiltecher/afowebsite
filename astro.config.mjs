import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // CHANGE THIS: Ensure it is your exact Vercel URL
  site: 'https://afowebsite.vercel.app/', 
  integrations: [tailwind()],
});