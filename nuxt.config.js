// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "TTRPG Suite"
    }
  },
  compatibilityDate: '2024-08-02',
  css: ["~/assets/styles.sass"],
  devtools: { enabled: true }
})
