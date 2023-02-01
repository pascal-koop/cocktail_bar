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

<script>

import { mapState} from 'pinia';
import { useCartStore } from '../../stores/CartStore.js';
export default {
  emits: ['increment-item', 'decrement-item', 'delete-item'],
  //props: ['cocktailPrice', 'cocktailName', 'image', 'amount', 'id'],
  methods: {
    incrementItemAmount() {
      this.$emit('increment-item', this.id);
    },
    decrementItemAmount() {
      this.$emit('decrement-item', this.id);
    },
    deleteItem() {
      this.$emit('delete-item', this.id);
    },
  },
  computed: {
    ...mapState(useCartStore, {
      cocktailName: state => state.cocktailName,
    }),
    
  },
};
</script>
