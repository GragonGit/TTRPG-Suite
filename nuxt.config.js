import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "TTRPG Suite"
    }
  },
  alias: {
    "assets": "/<srcDir>/assets"
  },
  compatibilityDate: '2024-08-02',
  css: ["~/assets/styles.sass"],
  devtools: { enabled: true }
})
