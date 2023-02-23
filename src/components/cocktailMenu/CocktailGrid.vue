<template>
  <div class="d-flex flex-wrap justify-center align-self-end h-auto align-end">
    <v-sheet v-for="(cocktail, _index) in cocktailStore.getCocktailsForSelectedCategory">
      <CocktailCards
        :key="cocktail.name"
        :cocktail="cocktail"
        @add-cocktail-to-cart="addCocktailToCart"
      ></CocktailCards>
    </v-sheet>
  </div>
</template>

<script setup>
import { onBeforeMount} from 'vue';
import { useCocktailStore } from '../../stores/cocktailStore';
import CocktailCards from './CocktailCards.vue';
onBeforeMount(() => {
  cocktailStore.fetchCocktails();
});
const cocktailStore = useCocktailStore();

function addCocktailToCart(cocktailId) {
  const identifiedCocktail = cocktailStore.cocktailsMenu.find(
    cocktail => cocktail.id === cocktailId
  );
  
  cocktailStore.addToCart(identifiedCocktail);
}
</script>

<style scoped></style>
