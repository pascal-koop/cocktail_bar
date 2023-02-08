<template>
  <div class="cocktails-wrapper">
    <h1>Cocktails</h1>
    <CocktailMenuNav />
    <CocktailGrid />
   
  </div>
</template>

<script setup>
import CocktailGrid from '../components/cocktailMenu/CocktailGrid.vue';
import CocktailMenuNav from '../components/cocktailMenu/CocktailMenuNav.vue';


</script>

<style scoped>
.cocktails-wrapper {
  max-width: 90vw;
  margin: 0 auto;

}
</style>
