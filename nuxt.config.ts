import { config } from 'dotenv';
config();

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      ...process.env
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  vite: {
    css: {
      devSourcemap: true
    },
    vue: {
      customElement: true
    },
    vueJsx: {
      mergeProps: true
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', href: '/assets/images/favicon.png', type: 'image/png' },
        { rel: 'stylesheet', href: '/assets/css/sparkpesa.css' },
        { rel: 'stylesheet', href: '/assets/css/owl.carousel.css' },
        { rel: 'stylesheet', href: '/assets/css/app.css' }
      ],
      script: [
        { src: '/assets/js/jquery-3.6.4.min.js', defer: true },
        { src: '/assets/js/popper.min.js', defer: true },
        { src: '/assets/js/bootstrap.bundle.min.js', defer: true },
        { src: '/assets/js/bootstrap.min.js', defer: true },
        { src: '/assets/js/owl.carousel.js', defer: true },
        { src: '/assets/js/jquery.simplyscroll.js', defer: true },
        { src: '/assets/js/scripts.js', defer: true }
      ]
    }
  }
});