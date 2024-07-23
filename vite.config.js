import { defineConfig } from 'vite';


export default defineConfig(({ command }) => {
  const isProduction = command === 'build';
  return {
    root: '.',
    publicDir: 'public',
    base: isProduction ? '/Plant-Care-Assistant-App/' : '/',
    build: {
      outDir: 'dist',
      rollupOptions: {
        input: {
          main: './public/index.html',
          login: './public/login.html'
        },
      },
    },
    server: {
      open: true,
      port: 5173,
    }
  };
});