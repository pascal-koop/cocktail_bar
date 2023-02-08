<template>
  <v-bottom-navigation mode="shift" hide-on-scroll >
    <v-btn to="/" value="home">
      <svg-icon type="mdi" :path="home"></svg-icon>
      <span>Home</span>
    </v-btn>

    <v-btn to="/cocktails" value="favorites">
      <svg-icon type="mdi" :path="cocktail"></svg-icon>
      <span>Cocktails</span>
    </v-btn>

    <v-btn value="nearby">
      <v-badge color="#4caf50" offset-y="2" offset-x="-8" :content="cartStore.totalItemsCount" theme="light">
        <svg-icon type="mdi" :path="basket"></svg-icon>
      </v-badge>

      <CartModal />
      <span>Cart</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup>
import { useCartStore } from '../stores/CartStore';
import CartModal from './modal/CartModal.vue';

import SvgIcon from '@jamescoyle/vue-icon';
import { mdiHome, mdiGlassCocktail, mdiBasket } from '@mdi/js';
const cartStore = useCartStore()
const basket = mdiBasket;
const home = mdiHome;
const cocktail = mdiGlassCocktail;
</script>
