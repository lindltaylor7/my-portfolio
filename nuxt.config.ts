// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: "static",
  },
  app: {
    head: {
      title: "Jair Pariona | Lógica y alma",
      link: [
        { rel: "icon", type: "image/png", href: "/jairpl.ico" },
        { rel: "apple-touch-icon", href: "/jairpl.ico" },
      ],
    },
    baseURL: "/",
    buildAssetsDir: "/_nuxt/",
  },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", "@tresjs/nuxt"],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
});
