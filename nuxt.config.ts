// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", 'nuxt-icon', 'nuxt-swiper'],
  tailwindcss: {
    cssPath: '~/assets/css/input.css'
  },
  css: [
    '@/assets/css/globals.css'
  ],
})