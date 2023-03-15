<template>
  <v-card elevation="8" width="200" class="ma-5 flex-md-grow-1">
    <v-img lazy-src :src="props.cocktail.image_url"></v-img>
    <v-card-item>
      <v-card-title>
        {{ props.cocktail.cocktail_name }}
      </v-card-title>
      <v-card-subtitle> {{ props.cocktail.cocktail_price }} € </v-card-subtitle>
      <v-card-actions>
        <v-btn @click="addCocktailToCart"> Buy </v-btn>
        <v-btn @click.capture="cocktailStore.setSelectedCocktail(props.cocktail.cocktail_id)">
          <CocktailModal
            :key="props.cocktail.cocktail_id"
            :id="props.cocktail.cocktail_id"
            :cocktail-name="props.cocktail.cocktail_name"
            :cocktail-price="props.cocktail.cocktail_price"
            :cocktail-history="props.cocktail.cocktail_history"
            :img-url="props.cocktail.image_url"
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

function addToCart(cocktailId) {
  const identifiedCocktail = cocktailStore.cocktailsMenu.find(
    cocktail => cocktail.cocktai_id === cocktailId
  );

  cocktailStore.addToCart(identifiedCocktail);
}

function addCocktailToCart() {
  emit('add-cocktail-to-cart', props.cocktail.cocktail_id);
}
</script>

<style scoped>
v-card {
  margin: 0;
}
</style>
