<template>
  <v-dialog
    v-model="dialog"
    activator="parent"
    scroll-strategy="block"
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-card-title>
        {{ cocktailName }}
      </v-card-title>
      
      <v-img id="info-img" :src="imgUrl" height="500px" width="350" cover></v-img>
     
      <div class="ingredient-list">
        <h2>Ingredients:</h2>
        <ul>
          <li v-for="ingredient in ingredients ">
            {{ ingredient }}
          </li>
        </ul>
      </div>
      <p>
        {{ cocktailHistory }}
      </p>
      <v-card-actions>
        <v-btn @click="dialog = false">Close</v-btn>
        <v-btn @click="addCocktailToCart">{{ cocktailPrice }}€ Buy</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue';
import { useCocktailStore } from '../../stores/cocktailStore';
const cocktailStore = useCocktailStore();
const props = defineProps(['id', 'imgUrl', 'ingredients', 'cocktailHistory', 'cocktailPrice', 'cocktailName']);
const emit = defineEmits(['add-cocktail-to-cart']);


const addCocktailToCart = () => {
  emit('add-cocktail-to-cart', props.id);
};

let dialog = ref(false);
</script>

<style  scoped>

</style>
