<template>
  <v-dialog
    fullscreen
    height="92.5vh"
    v-model="dialog"
    activator="parent"
    scroll-strategy="block"
    transition="slide-x-transition"
  >
    <v-card>
      <v-toolbar dark color="secondary">
        <v-btn icon dark @click="dialog = false">
          <svg-icon type="mdi" :path="close"></svg-icon>
        </v-btn>
        <v-toolbar-title>
          <div class="cart-header">
            <h3>Cart</h3>
          </div> </v-toolbar-title
        >
        <v-spacer></v-spacer><v-btn  id="checkout-btn" to="/checkout" @click="dialog = false">Checkout</v-btn>
      </v-toolbar>

      <p>You have {{ totalItemsCount }} items in your cart</p>
      <p>Total:</p>
      <p>{{ totalPriceSum }}</p>

      <div class="cart-item-list d-flex align-content-start flex-wrap">
        <cart-item
          class="ma-4"
          v-for="cocktail in cartStore.cartItem"
          :key="cocktail.name"
          :id="cocktail.id"
          :cocktail-name="cocktail.name"
          :cocktail-price="cocktail.price"
          :amount="cocktail.amount"
          :cart-Image="cocktail.cartImage"
          @increment-item="incrementAmount"
          @decrement-item="decrementAmount"
          @delete-item="deleteItem"
        ></cart-item>
      </div>
    </v-card>
  </v-dialog>
</template>
<script setup>
import { onMounted, computed } from 'vue';
import { useCartStore } from '../../stores/CartStore';
import { ref } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiClose } from '@mdi/js';
let dialog = ref(false);
let close = mdiClose;

const cartStore = useCartStore();
const emit = defineEmits(['update:total-items-count']);

onMounted(() => {
  emit('update:total-items-count', totalItemsCount);
});

const totalPriceSum = computed(() => {
  let totalPrice = 0;
  for (const cartItem of cartStore.cartItem) {
    totalPrice += cartItem.amount * cartItem.price;
  }
  return totalPrice;
});

const totalItemsCount = computed(() => {
  let count = 0;
  for (const cartItem of cartStore.cartItem) {
    count += cartItem.amount;
  }
  emit('update:total-items-count', count);
  return count;
});

function incrementAmount(cocktailId) {
  const identifiedCocktail = cartStore.cartItem.find(cocktail => cocktail.id === cocktailId);
  identifiedCocktail.amount += 1;
}

function decrementAmount(cocktailId) {
  const identifiedCocktail = cartStore.cartItem.find(cocktail => cocktail.id === cocktailId);
  const identifiedCocktailIndex = cartStore.cartItem.findIndex(
    cocktail => cocktail.id === cocktailId
  );
  identifiedCocktail.amount -= 1;
  if (identifiedCocktail.amount === 0) {
    cartStore.cartItem.splice(identifiedCocktailIndex, 1);
  }
}

function deleteItem(cocktailId) {
  const identifiedCocktail = cartStore.cartItem.find(cocktail => cocktail.id === cocktailId);
  cartStore.cartItem.splice(identifiedCocktail, 1);
}
</script>

<style scoped>
#checkout-btn {
  width: 8rem;
  background-color: #EF5350;
}
</style>
