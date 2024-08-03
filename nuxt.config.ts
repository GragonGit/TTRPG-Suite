// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "TTRPG Suite",
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
    }
  },
  compatibilityDate: '2024-08-02',
  css: ["~/assets/styles.sass"],
  devtools: { enabled: true }
})
