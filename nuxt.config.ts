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
        { rel: 'icon', type: 'image/png', href: 'favicon/32x32.png', sizes: '32x32' },
        { rel: 'icon', type: 'image/png', href: 'favicon/48x48.png', sizes: '48x48' },
        { rel: 'icon', type: 'image/png', href: 'favicon/72x72.png', sizes: '72x72' },
        { rel: 'icon', type: 'image/png', href: 'favicon/96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/png', href: 'favicon/128x128.png', sizes: '128x128' },
        { rel: 'icon', type: 'image/png', href: 'favicon/144x144.png', sizes: '144x144' },
        { rel: 'icon', type: 'image/png', href: 'favicon/152x152.png', sizes: '152x152' },
        { rel: 'icon', type: 'image/png', href: 'favicon/192x192.png', sizes: '192x192' },
        { rel: 'icon', type: 'image/png', href: 'favicon/256x256.png', sizes: '256x256' },
        { rel: 'icon', type: 'image/png', href: 'favicon/384x384.png', sizes: '384x384' },
        { rel: 'icon', type: 'image/png', href: 'favicon/512x512.png', sizes: '512x512' }
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
