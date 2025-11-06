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
      meta: [
        {
          name: "description",
          content:
            "Portafolio personal de Jair Pariona, desarrollador FullStack especializado en experiencias web inmersivas y diseño tecnológico.",
        },
        { name: "author", content: "Jair Pariona" },
        { name: "robots", content: "index, follow" },

        // Open Graph (para Facebook, LinkedIn)
        { property: "og:title", content: "Jair Pariona | FullStack Dev" },
        {
          property: "og:description",
          content:
            "Explora mis proyectos, blog y experiencia en desarrollo web y móvil.",
        },
        {
          property: "og:image",
          content: "https://jairpl.com/lind/og-image.jpg",
        },
        { property: "og:url", content: "https://jairpl.com/lind" },
        { property: "og:type", content: "website" },

        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Jair Pariona | FullStack Dev" },
        {
          name: "twitter:description",
          content: "Desarrollador FullStack apasionado por el diseño digital.",
        },
        {
          name: "twitter:image",
          content: "https://jairpl.com/lind/og-image.jpg",
        },
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
