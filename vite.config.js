import { defineConfig } from 'vite';



import path from 'path';

export default defineConfig({
  root: 'src', // Set project root to `src` if your entry HTML is in this folder
  build: {
    outDir: '../dist', // Relative to the root, which is 'src', this will output to "dist" in the main directory
    emptyOutDir: true, // Ensures the output directory is emptied before each build
  },
  optimizeDeps: {
    include: ['jquery'], // Ensures jQuery is bundled and available
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Optional, if you want to use aliases
    },
  },
});


// export default defineConfig({
//   root: 'src',
//   build: {
//     outDir: '../dist',
//   },
//   optimizeDeps: {
//     include: ['jquery'], // Ensures jQuery is bundled and available
//   },

// });