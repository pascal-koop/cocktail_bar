<template>
  <RouterView name="NavigationBar"></RouterView>
  <RouterView name="default" v-slot="{ Component }">
    <transition name="route" mode="out-in" appear>
      <component :is="Component" />
    </transition>
  </RouterView>
  <ShoppingCartInfo  @click="toggleShoppingCart" />
  <ShoppingCart v-show="showShoppingCart" @update:total-items-count="updateCartCount" />
  <RouterView name="FooterBar"></RouterView>
</template>

<script setup>
import { ref } from 'vue';
import ShoppingCart from './components/shoppingCart/ShoppingCart.vue';
import ShoppingCartInfo from './components/shoppingCart/ShoppingCartInfo.vue';



const showShoppingCart = ref(false);
const toggleShoppingCart = () => {
  showShoppingCart.value = !showShoppingCart.value;
};

const shoppingCartCount = ref(0);
const updateCartCount = count => {
  shoppingCartCount.value = count;
};
</script>

<style>
.route-enter-from {
  opacity: 0;
  transform: translateX(-100px);
}
.route-enter-active,
.route-leave-active {
  transition: all 0.2s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>
