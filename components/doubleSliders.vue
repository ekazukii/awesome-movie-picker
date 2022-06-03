<template>
  <p>Le film dure de {{ minTime }} à {{ maxTime }}</p>
  <div class="range-slider">
    <input
      type="range"
      v-bind:min="min"
      v-bind:max="max"
      step="1"
      v-model="sliderMin"
    />
    <input
      type="range"
      v-bind:min="min"
      v-bind:max="max"
      step="1"
      v-model="sliderMax"
    />
  </div>
</template>

<script setup>
const { movies } = defineProps({
  min: Number,
  max: Number,
});

const minAngle = ref(10);
const maxAngle = ref(30);

const $emit = defineEmits(["change"]);

const minTime = computed({
  get: function () {
    let val = minAngle.value;
    let minutes = String(val % 60);
    let hours = String(Math.floor(val / 60));

    return `${hours.padStart(2, "0")}h${minutes.padStart(2, "0")}m`;
  },
});

const maxTime = computed({
  get: function () {
    let val = maxAngle.value;
    let minutes = String(val % 60);
    let hours = String(Math.floor(val / 60));

    return `${hours.padStart(2, "0")}h${minutes.padStart(2, "0")}m`;
  },
});

const sliderMax = computed({
  get: function () {
    return parseInt(maxAngle.value);
  },
  set: function (val) {
    val = parseInt(val);
    if (val < minAngle.value) {
      minAngle.value = val;
    }
    maxAngle.value = val;

    $emit("change", { min: minAngle.value, max: maxAngle.value });
  },
});

const sliderMin = computed({
  get: function () {
    return parseInt(minAngle.value);
  },
  set: function (val) {
    val = parseInt(val);
    if (val > maxAngle.value) {
      maxAngle.value = val;
    }
    minAngle.value = val;
    $emit("change", { min: minAngle.value, max: maxAngle.value });
  },
});
</script>

<style scoped>
.range-slider {
  width: 300px;
  position: relative;
}

.range-slider input[type="range"] {
  position: absolute;
  left: 0;
  bottom: 0;
}

input[type="number"] {
  border: 1px solid #ddd;
  text-align: center;
  font-size: 1.6em;
  -moz-appearance: textfield;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type="number"]:invalid,
input[type="number"]:out-of-range {
  border: 2px solid #ff6347;
}

input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
}

input[type="range"]:focus {
  outline: none;
}

input[type="range"]:focus::-webkit-slider-runnable-track {
  background: #2497e3;
}

input[type="range"]:focus::-ms-fill-lower {
  background: #2497e3;
}

input[type="range"]:focus::-ms-fill-upper {
  background: #2497e3;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animation: 0.2s;
  background: #2497e3;
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}

input[type="range"]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  box-shadow: 0px 0px 0px #000;
  border: 1px solid #2497e3;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #a1d0ff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px;
}
</style>
