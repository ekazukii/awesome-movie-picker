<template>
  <div class="va-content">
    <va-navbar shape color="primary">
      <template #left>
        <NuxtLink to="/trending" class="mr10"
          ><va-navbar-item>Trending</va-navbar-item></NuxtLink
        >
        <NuxtLink to="/pick"
          ><va-navbar-item>Movie Picker</va-navbar-item></NuxtLink
        >
      </template>
      <template #center>
        <va-navbar-item>Movie Picker</va-navbar-item>
      </template>
      <template #right>
        <RegionPicker class="mr10" />
        <va-navbar-item>
          <a class="mr10" href="http://github.com/ekazukii" target="_blank"
            >Github</a
          >
          <a href="http://github.com/ekazukii" target="_blank">Twitter</a>
        </va-navbar-item>
      </template>
    </va-navbar>
    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  title: "Awesome Movie Picker",
  meta: [
    {
      name: "description",
      content:
        "Découvrez des nouveaux films tout les soirs, et choisissez ceux qui vous plairont le plus en fonction des plateformes de streaming que vous utilisez.",
    },
    {
      name: "og:type",
      content: "website",
    },
    {
      name: "og:title",
      content: "Awesome Movie Picker",
    },
    {
      name: "og:description",
      content:
        "Découvrez des nouveaux films tout les soirs, et choisissez ceux qui vous plairont le plus en fonction des plateformes de streaming que vous utilisez.",
    },
    {
      name: "og:url",
      content: "https://amp.ekazuki.fr",
    },
    {
      name: "og:image",
      content: "https://ekazuki.fr/logo.png",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Awesome Movie Picker",
    },
    {
      name: "twitter:description",
      content:
        "Découvrez des nouveaux films tout les soirs, et choisissez ceux qui vous plairont le plus en fonction des plateformes de streaming que vous utilisez.",
    },
    {
      name: "twitter:image",
      content: "https://ekazuki.fr/logo.png",
    },
    {
      name: "twitter:url",
      content: "https://amp.ekazuki.fr",
    },
  ],
});
</script>

<style scoped>
.mr10 {
  margin-right: 10px;
}
</style>
