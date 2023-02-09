<template>
  <v-card elevation="8" width="200" class="ma-5 flex-md-grow-1 ">
    <v-img lazy-src  :src="props.cocktail.imageUrl"></v-img>
    <v-card-item>
      <v-card-title>
        {{ props.cocktail.name }}
      </v-card-title>
      <v-card-subtitle>
        {{ props.cocktail.price }} €
      </v-card-subtitle>
      <v-card-actions>
        <v-btn @click="addCocktailToCart"> Buy </v-btn>
        <v-btn @click.capture="cocktailStore.setSelectedCocktail(props.cocktail.id)">
          <CocktailModal
          :key="props.cocktail.id"
          :id="props.cocktail.id"
          :cocktail-name="props.cocktail.name"
          :cocktail-price="props.cocktail.price"
          :cocktail-history="props.cocktail.history"
          :img-url="props.cocktail.imageUrl"
          :ingredients="props.cocktail.ingredients"
          @add-cocktail-to-cart="addToCart"
          ></CocktailModal>
          Info
        </v-btn>
      </v-card-actions>
    </v-card-item>
  </v-card>
</template>

<script setup>

import CocktailModal from '../modal/CocktailModal.vue';
import { useCocktailStore } from '../../stores/cocktailStore';
const cocktailStore = useCocktailStore();
const emit = defineEmits(['add-cocktail-to-cart']);
const props = defineProps(['cocktail']);
//let image = '../../../public/vite.svg';
//? logik in den Store verlagern?  weil doppelt hier und in cocktailGrid.vue
function addToCart(cocktailId) {
  const identifiedCocktail = cocktailStore.cocktailsMenu.find(
    cocktail => cocktail.id === cocktailId
  );

  cocktailStore.addToCart(identifiedCocktail);
}

function addCocktailToCart() {
  emit('add-cocktail-to-cart', props.cocktail.id);
}
</script>

<style scoped>
v-card {
  margin: 0;
}
</style>
