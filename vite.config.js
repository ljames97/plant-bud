import { defineConfig } from 'vite';


export default defineConfig(() => {
  return {
    root: '.',
    publicDir: 'public',
    base: '/plant-bud', // change to '/plant-bud' for gitHub production build. Also change any '/login.html' to '/plant-bud/login.html'. Similarly for index.html, change to '/plant-bud'.
    build: {
      outDir: 'docs',
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