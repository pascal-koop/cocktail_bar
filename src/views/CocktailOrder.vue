<template>
  <div class="cocktails-wrapper">
    <h1>Cocktails</h1>
    <CocktailMenu />
    <CocktailGrid />
  </div>
</template>

<script>
import CocktailMenu from '../components/cocktailMenu/CocktailMenu.vue';
import CocktailGrid from '../components/cocktailMenu/CocktailGrid.vue';

export default {
  components: {
    CocktailMenu,
    CocktailGrid
  },
};
</script>

<style scoped>
.cocktails-wrapper {
  max-width: 90vw;
  margin: 0 auto;

}
</style>
