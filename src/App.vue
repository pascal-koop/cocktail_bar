<template>
  <RouterView name="NavigationBar"></RouterView>
  <RouterView name="default" v-slot="{ Component }">
    <transition name="route" mode="out-in" appear>
      <component :is="Component" />
    </transition>
  </RouterView>
  <ShoppingCartInfo :shopping-card-count="shoppingCartCount" @click="toggleShoppingCart" />
  <ShoppingCart v-show="showShoppingCart" @update:total-items-count="updateCartCount" />
  <RouterView name="FooterBar"></RouterView>
  <h1>{{ name }}</h1>
</template>

<script>
import ShoppingCart from './components/shoppingCart/ShoppingCart.vue';
import NavigationBar from './components/NavigationBar.vue';
import FooterBar from './components/FooterBar.vue';
import ShoppingCartInfo from './components/shoppingCart/ShoppingCartInfo.vue';
import { mapState } from 'pinia';
import { useCartStore } from './stores/CartStore.js';
export default {
  computed: {
    ...mapState(useCartStore, {
      name: store => {
        return store.cartItem[0].name;
      },
    }),
  },
  
  components: {
    NavigationBar,
    ShoppingCartInfo,
    ShoppingCart,
    
  },
  data() {
    return {
      showShoppingCart: false,
      shoppingCartCount: 0,
    };
  },
  methods: {
    toggleShoppingCart() {
      this.showShoppingCart = !this.showShoppingCart;
    },
    updateCartCount(count) {
      this.shoppingCartCount = count;
    },
  },
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
