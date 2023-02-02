<template>
  <div class="d-flex flex-wrap justify-center">
    <v-sheet v-for="(cocktail, _index) in cocktailStore.getCocktailsForSelectedCategory">
      <CocktailCards
        :key="cocktail.id"
        :cocktail-name="cocktail.name"
        :cocktail-price="cocktail.price"
        :img-url="cocktail.image"
      ></CocktailCards>
    </v-sheet>
  </div>
</template>

<script setup>
import { useCocktailStore } from '../../stores/cocktailStore';
import CocktailCards from './CocktailCards.vue';

const cocktailStore = useCocktailStore();
</script>

<style scoped></style>
