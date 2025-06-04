<script setup>
import SearchBar from "./SearchBar.vue";
import WeatherInfo from "./WeatherInfo.vue";

const props = defineProps({
  weatherData: Object,
})

</script>

<template>
  <div class="container">
    <SearchBar/>
    <WeatherInfo :weatherData="props.weatherData"/>
  </div>
</template>

<style scoped lang="scss">

</style>