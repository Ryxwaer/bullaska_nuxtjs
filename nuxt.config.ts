// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devtools: {enabled: true},

    modules: [
        "@nuxtjs/tailwindcss",
        'nuxt-icon',
        'nuxt-swiper',
        '@nuxt/image',
    ],
    css: [
        '@/assets/css/globals.css',
    ],
    tailwindcss: {
        cssPath: '~/assets/css/input.css'
    },
    routeRules: {
        '/': {prerender: true},
    }, app: {
        head: {
            link: [
                {
                    rel: 'stylesheet',
                    id: 'wp-block-library-css',
                    href: 'https://wp.ryxwaer.com/wp-includes/css/dist/block-library/style.min.css?ver=6.4.2',
                    media: 'all',
                },
                {
                    rel: 'stylesheet',
                    id: 'neve-style-css',
                    href: 'https://wp.ryxwaer.com/wp-content/themes/neve/style-main-new.min.css?ver=3.8.1',
                    media: 'all',
                },
                {
                    rel: 'stylesheet',
                    id: "neve-google-font-poppins-css",
                    href: "https://fonts.googleapis.com/css?family=Poppins%3A400%2C800%2C500&amp;display=swap&amp;ver=3.8.1",
                    media: 'all',
                },
                {
                    rel: 'stylesheet',
                    id: "neve-google-font-poppins-css",
                    href: "https://fonts.googleapis.com/css?family=Poppins%3A400%2C800%2C500&amp;display=swap&amp;ver=3.8.1",
                    media: 'all',
                },
            ]
        }
    },
})