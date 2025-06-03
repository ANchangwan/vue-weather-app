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
    console.log(weatherData);
    fetch(`api_key`)
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
  <MainComp/>

</template>

<style scoped lang="scss">


</style>
