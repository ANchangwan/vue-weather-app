<script setup>
  import Navbar from './components/Navbar.vue';
  import MainComp from "./components/MainComp.vue";
  import {ref, onMounted} from 'vue';

  // 날씨 데이터 상태변수
  const weatherData = ref({
    icon: 'icon',
    temp: 0,
    text: 'text',
    location: 'location',
    city: 'seoul',
  })


  // 앱이 실행되면 날씨 데이터 가져오기
  onMounted(() => {
    const API_KEY = `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.value.city}&appid=7847cf3208912195e9016a60e5307c5d`;
    fetch(API_KEY)
        .then(res => res.json())
        .then((data) => {
          weatherData.value.icon = data.weather[0].icon;
          weatherData.value.temp = data.main.temp;
          weatherData.value.text = data.weather[0].description;
          weatherData.value.location = data.sys.country;
          weatherData.value.city = data.name;
        })
  });
</script>

<template>
  <Navbar/>
  <MainComp :weatherData="weatherData"/>

</template>

<style scoped lang="scss">


</style>
