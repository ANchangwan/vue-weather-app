<script setup>
  import Navbar from './components/Navbar.vue';
  import MainComp from "./components/MainComp.vue";
  import {ref, onMounted} from 'vue';
  import {useStore} from 'vuex';

 const store = useStore();


  // 앱이 실행되면 날씨 데이터 가져오기
  onMounted(() => {
  store.dispatch('getWeather');
  });
  const onSearchCity = (city) => {
    store.state.weatherData.city = city;
    store.dispatch('getWeather');
  }
</script>

<template>

  <Navbar/>
  <MainComp
      @onSearchCity="onSearchCity"
      :weatherData="weatherData"/>
</template>

<style scoped lang="scss">


</style>
