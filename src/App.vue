<template>
  <router-view class="view home"></router-view>
  <!-- <HeroItems /> -->
  <!-- <ShoppingCardInfo :shopping-card-count="shoppingCardCount" @click="toggleShoppingCard" /> -->
  <!-- <ShoppingCart v-show="showShoppingCard" @update:total-items-count="updateCardCount" /> -->
  <CocktailMenu />
  <!-- <FooterBar /> -->
  
</template>

<script>
//import HeroItems from './components/HeroItems.vue';
//import ShoppingCart from './components/ShoppingCart.vue';
//import useCocktailStore from '../stores/cocktaill';
//import NavigationBar from './components/NavigationBar.vue';
//import FooterBar from './components/FooterBar.vue';
//import ShoppingCardInfo from './components/ShoppingCardInfo.vue';
import CocktailMenu from './components/CocktailMenu.vue'

export default {
  components: {
    // HeroItems,
    //NavigationBar,
    // ShoppingCardInfo,
    // FooterBar,
    // ShoppingCart,
    CocktailMenu
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
