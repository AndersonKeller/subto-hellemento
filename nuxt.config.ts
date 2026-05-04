// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-04-28",

  devtools: { enabled: true },
  ssr: true,

  vite: {
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit"],
    },
  },
  modules: ["@pinia/nuxt", "@nuxt/image"],
});