<template>
  <div class="home">
    <HeroItems />
  </div>
</template>

<script>
import HeroItems from '../components/HeroItems.vue';

export default {
  components: { HeroItems },
};
</script>

<style scoped>
.home{
  height: 100%;
  background-image: url('/public/images/background.jpeg');
  background-size: cover;
  background-position: top;
  
}
</style>
