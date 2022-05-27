<template>
  <div id="ctn">
    <div
      v-for="prov in $getAllProviders()"
      v-bind:class="{ active: selected[prov['provider_id'][0]] }"
    >
      <!-- Image -->
      <img
        v-bind:src="'https://image.tmdb.org/t/p/w1280' + prov.logo_path"
        alt="Provider's icon"
        @click="handleClick(prov['provider_id'])"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// When image is click toggle selection
const selected = reactive({});

const $emit = defineEmits(["change"]);

const handleClick = (provIds: number[]) => {
  provIds.forEach((provId) => {
    if (selected[provId]) {
      delete selected[provId];
    } else {
      selected[provId] = true;
    }
  });

  $emit("change", Object.keys(selected));
};
</script>

<style scoped>
#ctn {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 20px;
}

.active img {
  width: 90px;
  height: 90px;
  border: 5px solid lightskyblue;
}

img {
  width: 100px;
  height: 100px;
}
</style>
