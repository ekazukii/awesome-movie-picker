<template>
  <select name="region" id="region" v-model="region">
    <option value="FR" selected>🇫🇷</option>
    <option value="US">🇺🇸</option>
  </select>
</template>

<script setup>
const region = useState("region", () => "FR");
</script>

<style>
#region {
  background-color: #66a0dc;
  min-width: 3rem;
  border: 1px solid white;
  font-size: 1.3rem;
}
</style>
