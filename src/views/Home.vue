<template>
  <div class="home">
    <HeroItems />
  </div>
</template>

<script setup>

import HeroItems from '../components/HeroItems.vue';

</script>

<style scoped>
.home {
  height: 100%;
  background-image: url('/public/images/background.jpeg');
  background-size: cover;
  background-position: top;
}
</style>
