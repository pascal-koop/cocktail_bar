<template>
  <v-dialog
    fullscreen
    v-model="dialog"
    activator="parent"
    scroll-strategy="block"
    transition="slide-x-transition"
  >
    <v-card>
      <v-toolbar dark color="secondary">
        <v-btn icon dark @click="dialog = false">
          <svg-icon type="mdi" :path="close"></svg-icon>
        </v-btn>
        <v-toolbar-title>
          <div class="cart-header">
            <h3>{{ cocktailName }}</h3>
          </div>
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-title> </v-card-title>

      <v-img id="info-img" :src="imgUrl" height="500px" width="350" cover></v-img>

      <div class="ingredient-list">
        <h2>Ingredients:</h2>
        <ul>
          <li v-for="ingredient in ingredients">
            {{ ingredient }}
          </li>
        </ul>
      </div>
      <p>
        {{ cocktailHistory }}
      </p>
      <v-card-actions>
        <v-btn @click="addCocktailToCart">{{ cocktailPrice }}€ Buy</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiClose } from '@mdi/js';
import { useCocktailStore } from '../../stores/cocktailStore';
const cocktailStore = useCocktailStore();
const props = defineProps([
  'id',
  'imgUrl',
  'ingredients',
  'cocktailHistory',
  'cocktailPrice',
  'cocktailName',
]);
const emit = defineEmits(['add-cocktail-to-cart']);
const close = mdiClose;

const addCocktailToCart = () => {
  emit('add-cocktail-to-cart', props.id);
};

let dialog = ref(false);
</script>

<style scoped></style>
