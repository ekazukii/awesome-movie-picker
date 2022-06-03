<template>
  <div id="grid-ctn">
    <va-card color="primary" gradient class="grid-item" v-for="res in movies">
      <div>
        <img
          alt="Movie's poster"
          v-bind:src="'https://image.tmdb.org/t/p/w300' + res.poster_path"
        />
        <va-card-title class="ca-title">{{ res["title"] }}</va-card-title>
      </div>

      <va-card-content class="card-content">
        {{ res["overview"].substring(0, 250) + "..." }}

        <div class="genders">
          <span v-for="genre in res['genre_ids']" class="gender"
            >{{ $getNameFromGenderId(genre) }}
          </span>
        </div>
        <a
          v-bind:href="`https://www.themoviedb.org/movie/${res['id']}/watch?locale=FR`"
          target="_blank"
        >
          <va-button outline color="white" icon="live_tv"
            >Regarder maintenant</va-button
          >
        </a>
      </va-card-content>
    </va-card>
  </div>
</template>

<script lang="ts" setup>
type Movie = {
  genre_ids: number[];
  id: number;
  poster_path: string;
  original_title: string;
  overview: string;
  title: string;
};

const { movies } = defineProps<{
  movies: Movie[];
}>();
</script>

<style scoped>
img {
  width: 240px;
}

#grid-ctn {
  display: grid;
  grid-template-columns: repeat(auto-fill, 240px);
  gap: 20px;
  justify-content: center;
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  height: calc(100% - 44px - 360px);
  line-height: 1.1rem;
}

.card,
.ca-title {
  padding: 10px;
}

.ca-title {
  height: 44px;
}

.title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  margin: 0px;
}

.desc {
  font-size: 0.8rem;
  margin-bottom: 10px;
}

.grid-item a {
  all: unset;
  font-family: sans-serif;
}

.genders {
  display: block;
  text-align: center;
}

.gender {
  margin: 2px;
  display: inline-block;
}
</style>
