// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "TTRPG Suite",
      bodyAttrs: {
        class: 'baseLight accentPurple'
      }
    }
  },

  compatibilityDate: '2024-08-02',
  css: ["~/assets/styles/styles.sass"],
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      imprint: process.env.imprint ?? '<p>Ein Fehler ist aufgetreten.</p>'
    }
  },
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/supabase",
    '@vueuse/nuxt',
  ],
  i18n: {
    vueI18n: './assets/i18n/i18n.config.ts'
  },
  supabase: {
    url: 'https://rgmkkhvxzgnjztovybrd.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnbWtraHZ4emduanp0b3Z5YnJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI3MjIxOTMsImV4cCI6MjAzODI5ODE5M30.H_N7pYlGk_uhxSa6LKqqRjVSLNUy0wwUqHQz7QDGJhg',
    redirectOptions: {
      login: '/auth/login',
      callback: '',
      include: undefined,
      exclude: ['/', '/legal', '/auth/*'],
      cookieRedirect: false,
    }
  }
})