<template>
  <h1 class="display-1">Populaire cette semaine</h1>
  <MovieDisplay v-if="data?.results?.length > 0" :movies="data?.results" />
</template>

<script lang="ts" setup>
const { data } = await useFetch("/api/getTrendingMovies", {
  pick: ["results"],
});

console.log(data);
</script>

<style scoped>
img {
  width: 240px;
}

#grid-ctn {
  display: grid;
  grid-template-columns: repeat(auto-fill, 240px);
  gap: 20px;
}

.grid-item {
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.desc {
  font-size: 0.8rem;
  margin-bottom: 10px;
}
</style>
