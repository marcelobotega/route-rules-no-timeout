// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/delayed-response': {proxy: 'http://localhost:3001/delayed-response'},
  },
  experimental: {
    defaults: {
      useFetch: {
        timeout: 500,
      }
    }
  }
})
