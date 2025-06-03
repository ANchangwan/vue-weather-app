<script setup>

</script>

<template>
  <div class="weather-info">
    <div class="info">info</div>
    <div class="temp">temp</div>
    <div class="text">text</div>
    <div class="location">location</div>
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