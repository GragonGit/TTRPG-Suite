// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "TTRPG Suite"
    }
  },

  compatibilityDate: '2024-08-02',
  css: ["~/assets/styles.sass"],
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    vueI18n: './assets/i18n.config.ts'
  }
})