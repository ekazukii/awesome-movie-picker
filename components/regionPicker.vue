<template>
  <select name="region" id="region" v-model="region">
    <option value="FR" v-bind:selected="region == 'FR'">🇫🇷</option>
    <option value="US" v-bind:selected="region == 'US'">🇺🇸</option>
  </select>
</template>

<script setup>
const region = useLang();
</script>

<style>
#region {
  background-color: #66a0dc;
  min-width: 3rem;
  border: 1px solid white;
  font-size: 1.3rem;
}
</style>
