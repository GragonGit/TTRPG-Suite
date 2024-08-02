import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "TTRPG Suite"
    }
  },
  alias: {
    "@": resolve(__dirname, "/")
  },
  compatibilityDate: '2024-08-02',
  css: ["~/assets/styles.sass"],
  devtools: { enabled: true }
})
