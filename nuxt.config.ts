// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-quasar-ui'],
  quasar: {
    plugins: [

    ],
    extras: {
      font: 'roboto-font',
      fontIcons: ['material-icons'],
    },
  },
});
