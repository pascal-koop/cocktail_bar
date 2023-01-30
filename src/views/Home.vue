<template>
  <div class="home">
  <NavigationBar />
  <HeroItems />
  <ShoppingCardInfo :shopping-card-count="shoppingCardCount" @click="toggleShoppingCard" />
  <ShoppingCart v-show="showShoppingCard" @update:total-items-count="updateCardCount" />
  <FooterBar />
  </div>
  
</template>

<script>
import HeroItems from '../components/HeroItems.vue';
import NavigationBar from '../components/NavigationBar.vue';
import ShoppingCardInfo from '../components/ShoppingCardInfo.vue';
import ShoppingCart from '../components/ShoppingCart.vue';
import FooterBar from '../components/FooterBar.vue';

export default {
    
    components: { NavigationBar, HeroItems, ShoppingCardInfo, ShoppingCart, FooterBar }
} 
</script>

