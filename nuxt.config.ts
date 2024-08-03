// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "TTRPG Suite"
    }
  },

  compatibilityDate: '2024-08-02',
  css: ["~/assets/themes/styles.sass"],
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/i18n",
    '@vueuse/nuxt',
  ],
  i18n: {
    vueI18n: './assets/i18n.config.ts'
  }
})