// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
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
        { rel: 'icon', type: 'image/png', href: 'favicon/32x32.png', sizes: '32x32' },
        { rel: 'icon', type: 'image/svg+xml', href: 'favicon/favicon.svg', sizes: 'any' }
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
