<template>
  <v-bottom-navigation mode="shift" hide-on-scroll>
    <v-btn to="/" value="home">
      <svg-icon type="mdi" :path="home"></svg-icon>
      <span>HOME</span>
    </v-btn>

    <v-btn to="/cocktails" value="favorites">
      <svg-icon type="mdi" :path="cocktail"></svg-icon>
      <span>COCKTAILS</span>
    </v-btn>

    <v-btn value="cart">
      <v-badge
        color="#d1324a"
        offset-y="2"
        offset-x="-8"
        :content="cartStore.totalItemsCount"
        theme="light"
      >
        <svg-icon type="mdi" :path="basket"></svg-icon>
      </v-badge>

      <CartModal />
      <span>CART</span>
    </v-btn>

    <v-btn to="/login" value="user" @click="isUserOnline">
      <svg-icon type="mdi" :path="user"></svg-icon>
      <span>USER</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup>
import { useCartStore } from '../stores/CartStore';
import CartModal from './modal/CartModal.vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiHome, mdiGlassCocktail, mdiBasket, mdiAccountSettings } from '@mdi/js';
const cartStore = useCartStore();
const basket = mdiBasket;
const home = mdiHome;
const cocktail = mdiGlassCocktail;
const user = mdiAccountSettings;

function isUserOnline() {
  if (cartStore.isUserOnline) {
   location.href = '/user';
  } else {
    location.href = '/login';
  }

}


</script>
