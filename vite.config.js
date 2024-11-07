import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
  },
  optimizeDeps: {
    include: ['jquery'], // Ensures jQuery is bundled and available
  },

});
