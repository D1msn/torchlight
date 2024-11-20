// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  alias: {
    "@localServer": "../../server/src",
  },
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxt/eslint",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "dayjs-nuxt",
    "nuxt-typed-router",
  ],
  fonts: {
    families: [
      {
        name: "montserrat",
        provider: "google",
      },
    ],
  },
  css: ["~/assets/scss/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
          additionalData: `
                        @use "~/assets/scss/_vars.scss";
                        @use "~/assets/scss/_mixins.scss";
                    `,
        },
      },
    },
  },
  dayjs: {
    locales: ["ru"],
    plugins: ["relativeTime", "utc", "timezone"],
    defaultLocale: "en",
    defaultTimezone: "Europe/Moscow",
  },
});
