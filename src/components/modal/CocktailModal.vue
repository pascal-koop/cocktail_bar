<template>
  <v-dialog
    fullscreen
    v-model="dialog"
    activator="parent"
    scroll-strategy="block"
    transition="slide-x-transition"
  >
    <v-card>
      <v-toolbar id="tool-bar" dark color="secondary">
        <v-btn icon dark @click="dialog = false">
          <svg-icon type="mdi" :path="close"></svg-icon>
        </v-btn>
        <v-toolbar-title>
          <div class="cart-header">
            <h3>{{ cocktailName }}</h3>
          </div>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn id="checkout-btn" @click="addCocktailToCart"
          >{{ cocktailPrice }}€ Buy</v-btn
        >
      </v-toolbar>
      <v-card-title> </v-card-title>
      <div id="grid-container">
        <div id="child-1">
          <v-img
            
            :src="imgUrl"
            min-height="500px"
            max-height="500px"
            min-width="350"
            max-width="350"
          ></v-img>
        </div>
        <div id="child-2" class="ingredient-list">
          <h2>Ingredients</h2>
          <ul>
            <li v-for="ingredient in ingredients">
              {{ ingredient }}
            </li>
          </ul>
        </div>
        
        <div id="child-3">
        <hr class="devider-long">
          <p>
            {{ cocktailHistory }}
          </p>
         
        </div>
      </div>
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

<style scoped>

</style>
