<script setup>

</script>

<template>
  <div class="weather-info">

    <div class="icon">
      <img
          :src="`https://openweathermap.org/img/wn/${$store.state.weatherData.icon}@2x.png`"
           :alt="$store.state.weatherData.icon"/>
    </div>
    <div class="temp">{{ ($store.state.weatherData.temp - 273.15).toFixed(1) }}&deg;</div>
    <div class="text">{{ $store.state.weatherData.text }}</div>
    <div class="location">{{$store.state.weatherData.city}},{{ $store.state.weatherData.location }}</div>
  </div>
</template>

<style scoped lang="scss">
  .weather-info{
    & > div{
      margin-bottom: 20px;
      padding:20px;
      border:1px solid #ccc;
    }
    .icon img{
      width:140px;
    }
    .temp{
      font-size: 4em;
    }
  }
</style>