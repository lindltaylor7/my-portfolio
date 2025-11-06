// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/lind/",
    buildAssetsDir: "/_nuxt/",
  },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", "@tresjs/nuxt"],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
});
