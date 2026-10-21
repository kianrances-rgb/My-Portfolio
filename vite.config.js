import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'html-rewrite-middleware',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/' || req.url === '/index.html') {
            req.url = '/index.src.html';
          }
          next();
        });
      },
    },
  ],
  base: './',
  build: {
    rollupOptions: {
      input: 'index.src.html',
    },
  },
  server: {
    port: 5173,
  },
});
