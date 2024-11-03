export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'shortcut icon', href: '/assets/images/favicon.png', type: 'image/png' },
        { rel: 'stylesheet', href: '/assets/css/sparkpesa.css', type: 'text/css' },
        { rel: 'stylesheet', href: '/assets/css/owl.carousel.css', type: 'text/css' },
        { rel: 'stylesheet', href: '/assets/css/app.css', type: 'text/css' }
      ],
      script: [
        { src: '/assets/js/jquery-3.6.4.min.js', type: 'text/javascript' },
        { src: '/assets/js/popper.min.js', type: 'text/javascript' },
        { src: '/assets/js/bootstrap.bundle.min.js', type: 'text/javascript' },
        { src: '/assets/js/bootstrap.min.js', type: 'text/javascript' },
        { src: '/assets/js/owl.carousel.js', type: 'text/javascript' },
        { src: '/assets/js/jquery.simplyscroll.js', type: 'text/javascript' },
        { src: '/assets/js/scripts.js', type: 'text/javascript' },
      ]
    }
  }
});
