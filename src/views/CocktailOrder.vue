<template>
  <div class="cocktails">
    <h1>Cocktails</h1>
    <CocktailMenu />
  </div>
</template>

<script>
import CocktailMenu from '../components/CocktailMenu.vue';

export default {
  components: {
    CocktailMenu,
  },
};
</script>
