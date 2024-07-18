export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '@/assets/styles/main.sass' // Ruta relativa a main.sass
  ],

  app: {
    head: {
      title: process.env.APP_TITLE,
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "shortcut icon",
          href: "/logo_dwepps.png"
        }
      ]
    }
  },
})