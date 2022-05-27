<template>
  <div class="ctn">
    <div v-for="item in data">
      <input
        type="checkbox"
        v-bind:value="item[0]"
        @change="handleClick(item[0])"
      />
      <label v-bind:for="item[0]">{{ item[1] }}</label>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data } = defineProps<{
  data: [string, string][];
}>();

const selected = reactive({});

const $emit = defineEmits(["change"]);

const handleClick = (provId: string) => {
  if (selected[provId]) {
    delete selected[provId];
  } else {
    selected[provId] = true;
  }

  $emit("change", Object.keys(selected));
};
</script>

<style scoped>
.ctn {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
}
</style>
