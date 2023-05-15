<template>
  <v-container class="checkout-container">
    <h2 class="title">Checkout</h2>
    <v-card class="checkout-card">
      <v-card-title class="checkout-card-title">
        <h3>Order Summary</h3>
      </v-card-title>
      <v-card-text>
        <v-list-item-group>
          <v-list-item v-for="item in cartStore.cartItem">
            <v-list-item-content>
              <v-list-item-title
                >Cocktail: <span class="count"> {{ item.cocktail_name }}</span></v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title
                >Number Of Pieces: <span class="count"> {{ item.amount }}</span></v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title
                >Single Price: <span class="count"> {{ item.cocktail_price }}</span> €
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title
                >Total Price: <span class="count"> {{ item.cocktail_price * item.amount }}</span> €
              </v-list-item-title>
            </v-list-item-content>
            <hr/>
          </v-list-item>
        </v-list-item-group>
      </v-card-text>
      <v-card-actions>
       
        <confirmation-modal/>
       
        <!-- <v-btn class="place-order" @click="cartStore.postCart">Place Order</v-btn> -->
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
import { useCartStore } from '../../stores/CartStore';
import confirmationModal from '../modal/confirmationModal.vue';
const cartStore = useCartStore();
</script>

<style scoped>

</style>