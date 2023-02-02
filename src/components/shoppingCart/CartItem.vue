<template>
  <div class="cart-item">
    <div class="cart-item__img">
      <img :src="image" alt="item picture" />
    </div>
    <div class="cart-item__info">
      <h4>{{ cocktailName }}</h4>
      <p>{{ cocktailPrice }} €</p>
    </div>
    <div class="cart-item__amount">
      <v-btn rounded="pill" @click="incrementItemAmount">
        <i class="fa fa-plus"></i>
      </v-btn>
      <h6>Menge:</h6>
      <p>{{ amount }}</p>
      <v-btn rounded="pill" @click="decrementItemAmount">
        <i class="fa fa-minus"> </i>
      </v-btn>
      <h6 @click="deleteItem">entfernen</h6>
    </div>
  </div>
</template>

<script setup>

const emit = defineEmits(['increment-item', 'decrement-item', 'delete-item']);
const props = defineProps(['cocktailPrice', 'cocktailName', 'image', 'amount', 'id']);

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
