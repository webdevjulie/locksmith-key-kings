import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  base: '/locksmith-key-kings/', // <-- add this line
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    react(),
  ],
});
