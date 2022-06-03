import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    themoviedbKey: "",
  },
  modules: ["@vuestic/nuxt"],
});
