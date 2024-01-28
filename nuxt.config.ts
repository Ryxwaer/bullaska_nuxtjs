// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    'nuxt-icon',
    'nuxt-swiper',
    ['@storyblok/nuxt', { accessToken: 'YOUR_ACCESS_TOKEN', cacheProvider: 'memory' }],
    '@nuxt/image',
  ],
  tailwindcss: {
    cssPath: '~/assets/css/input.css'
  },
  css: [
    '@/assets/css/globals.css'
  ],
  routeRules: {
    '/': { prerender: true },
  },
})