import { createVuestic } from "vuestic-ui";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(createVuestic());
});
