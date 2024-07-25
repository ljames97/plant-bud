import { defineConfig } from 'vite';


export default defineConfig(({ command }) => {
  const isProduction = command === 'build';
  return {
    root: '.',
    publicDir: 'public',
    base: '/', // change to 'plant-bud' for production build
    build: {
      outDir: 'dist',
      rollupOptions: {
        input: {
          main: './public/index.html',
          login: './public/login.html'
        },      },
    },
    server: {
      open: true,
      port: 5173,
    }
  };
});