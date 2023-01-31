<template>
  <div class="cocktails-wrapper">
    <h1>Cocktails</h1>
    <CocktailMenu />
    <CocktailGrid />
  </div>
</template>

<script>
import CocktailMenu from '../components/CocktailMenu.vue';
import CocktailGrid from '../components/CocktailGrid.vue';

export default {
  components: {
    CocktailMenu,
    CocktailGrid
  },
};
</script>
