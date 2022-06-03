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

<script></script>
<style scoped>
.mr10 {
  margin-right: 10px;
}
</style>
