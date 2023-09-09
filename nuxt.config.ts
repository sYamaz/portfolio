const baseURL = '/portfolio/'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL,
    head: {
      titleTemplate: '%s - portfolio',
      title: 'portfolio',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'sYamazの自己紹介サイト' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  ssr: false,
  css: ['vuetify/lib/styles/main.sass'],
  build: {
    transpile: ['vuetify'],
    analyze: true
  },
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  },
  nitro: {
    compressPublicAssets: {
      gzip: true,
      brotli: true
    }
  }

})
