<template>
  <v-card elevation="8" width="200" class="ma-5">
    <v-img lazy-src :src="imageUrl"><svg-icon class="close-icon" type="mdi" :path="close" @click="deleteItem"></svg-icon></v-img>
    <v-card-item>
      <v-card-title>
        {{ cocktailName }}
      </v-card-title>
      <v-card-subtitle
        >{{ cocktailPrice }} € <span class="ml-4 ">Anzhl.: <span class="items-count">{{ amount }}</span></span>
      </v-card-subtitle>
      <v-card-actions>
        <v-btn @click="decrementItemAmount">
          <svg-icon type="mdi" :path="minus"></svg-icon>
        </v-btn>
        <v-btn @click="incrementItemAmount">
          <svg-icon type="mdi" :path="plus"></svg-icon>
        </v-btn>
      </v-card-actions>
    </v-card-item>
  </v-card>
</template>

<script setup>

import SvgIcon from '@jamescoyle/vue-icon';
import { mdiClose, mdiPlus, mdiMinus } from '@mdi/js';
const emit = defineEmits(['increment-item', 'decrement-item', 'delete-item']);
const props = defineProps(['cocktailPrice', 'cocktailName', 'imageUrl', 'amount', 'id']);
const close = mdiClose;
const minus = mdiMinus; 
const plus = mdiPlus; 
function incrementItemAmount() {
  emit('increment-item', props.id);
}
function decrementItemAmount() {
  emit('decrement-item', props.id);
}
function deleteItem() {
  emit('delete-item', props.id);
}
</script>

<style scoped>
.close-icon {
  position: absolute;
  top: 1px;
    left: 170.7px;
  color: rgb(130, 0, 0);
 filter: invert(1);
  
}
</style>
