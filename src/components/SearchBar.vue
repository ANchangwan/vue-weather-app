<script setup>

</script>

<template>
  <div class="search-bar">
    <form class="search-group">
      <input type="search" placeholder="지역을 입력해주세요!">
      <button class="search-btn">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      </button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.search-bar{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  .search-group{
    width: 100%;
    max-width: 500px;
    //position: relative;
    display: flex;
    justify-content: end;
    z-index: 5;
    input{
      width: 500%;
      border-radius: 15px;
      padding: 10px;
      border: none;
    }
    .search-btn{
      //top:10px;
      right: 30px;
      position: relative;
      background: transparent;
      border: none;
      opacity: 15;
      cursor: pointer;
    }
  }
}

</style>