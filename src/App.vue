<template>
  <RouterView name="NavigationBar"></RouterView>
  <RouterView name="default" v-slot="{ Component }">
    <transition name="route" mode="out-in" appear>
      <component :is="Component" />
    </transition>
  </RouterView>
  <ShoppingCardInfo :shopping-card-count="shoppingCardCount" @click="toggleShoppingCard" />
  <ShoppingCart v-show="showShoppingCard" @update:total-items-count="updateCardCount" />
  <RouterView name="FooterBar"></RouterView>
</template>

<script>
import ShoppingCart from './components/ShoppingCart.vue';
import NavigationBar from './components/NavigationBar.vue';
import FooterBar from './components/FooterBar.vue';
import ShoppingCardInfo from './components/ShoppingCardInfo.vue';

export default {
  components: {
    NavigationBar,
    ShoppingCardInfo,
    FooterBar,
    ShoppingCart,
  },
  data() {
    return {
      showShoppingCard: false,
      shoppingCardCount: 0,
    };
  },
  methods: {
    toggleShoppingCard() {
      this.showShoppingCard = !this.showShoppingCard;
    },
    updateCardCount(count) {
      console.log(count);
      this.shoppingCardCount = count;
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
