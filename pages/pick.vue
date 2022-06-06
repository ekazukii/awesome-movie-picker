<template>
  <div class="page-ctn">
    <h1>{{ i18n[lang].discover }}</h1>

    <div id="form-pick">
      <div>
        <label>{{ i18n[lang].movieTypeSelect }}</label>
        <CustomCheckbox
          :data="$getAllGenders()"
          @change="(d) => (data.genders = d)"
        />
      </div>

      <div>
        <DoubleSliders min="0" max="180" @change="(t) => (data.runtime = t)" />
      </div>

      <div>
        <label for="">{{ i18n[lang].movieProvidersSelect }}</label>
        <ProvidersPicker @change="(p) => (data.providers = p)" />
      </div>

      <div id="rank-slider">
        <label for="score" id="rank-label">
          {{ i18n[lang].rankAbove }} {{ String(rank).padStart(3, "0") }} %
        </label>
        <br />
        <input
          type="range"
          min="0"
          max="100"
          v-model="rank"
          list="tickmarks"
          step="1"
          id="score"
        />
        <datalist id="tickmarks">
          <option value="0"></option>
          <option value="10"></option>
          <option value="20"></option>
          <option value="30"></option>
          <option value="40"></option>
          <option value="50"></option>
          <option value="60"></option>
          <option value="70"></option>
          <option value="80"></option>
          <option value="90"></option>
          <option value="100"></option>
        </datalist>
      </div>

      <div id="submit-center">
        <button id="submit-pick" @click="search">
          {{ i18n[lang].searchSubmit }}
        </button>
      </div>
    </div>

    <br />

    <MovieDisplay v-if="data.movies.length > 0" :movies="data.movies" />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  canonical: "pick",
});
const i18n = useI18n();
const lang = useLang();

const rank = ref(0);
const region = useLang();
const data = reactive({
  genders: [],
  providers: [],
  runtime: { min: 0, max: 180 },
  movies: [],
});

const dump = () => {
  console.log(data);
};

const search = async () => {
  const { results } = await $fetch("/api/pickMovies", {
    params: {
      genders: data.genders,
      providers: data.providers,
      min: data.runtime.min,
      max: data.runtime.max,
      rank: rank.value,
      region: region.value,
    },
  });

  console.log(results);
  data.movies = results;
};

const log = (an: any) => {
  console.log(an);
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 2rem;
}

.page-ctn {
  width: 80%;
  margin-left: 10%;
}

#form-pick > * {
  margin-bottom: 30px;
}

#rank-slider {
  display: flex;
  gap: 14px;
}

#submit-center {
  display: flex;
  justify-content: center;
}

#submit-pick {
  all: unset;
  padding: 4px 10px;
  border: 1px solid black;
}

#submit-pick:hover {
  cursor: pointer;
  background-color: black;
  color: white;
}
</style>
