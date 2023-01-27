<template>
  <Navigation />
  <WelcomeItems />
  <CocktailShop />
  <ShoppingCardInfo :shopping-card-count="shoppingCardCount" @click="toggleShoppingCard" />
  <ShoppingCart v-show="showShoppingCard" @update:total-items-count="updateCardCount" />
  <Footer />
</template>

<script>
import WelcomeItems from './components/WelcomeItems.vue';
import ShoppingCart from './components/ShoppingCart.vue';
//import useCocktailStore from '../stores/cocktaill';
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';
import ShoppingCardInfo from './components/ShoppingCardInfo.vue';
export default {
  components: {
    WelcomeItems,
    Navigation,
    ShoppingCardInfo,
    Footer,
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
  }
;
</script>

<style>
</style>
