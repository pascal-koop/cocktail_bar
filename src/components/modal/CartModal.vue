<template>
  <v-dialog
    fullscreen
    height="95.7vh"
    v-model="dialog"
    activator="parent"
    scroll-strategy="block"
    transition="slide-x-transition"
  >
    <v-card>
      <v-toolbar id="tool-bar" dark color="secondary">
        <v-btn icon dark @click="dialog = false">
          <svg-icon type="mdi" :path="close"></svg-icon>
        </v-btn>
        <v-toolbar-title>
          <div class="cart-header">
            <h3>Cart</h3>
          </div>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn id="checkout-btn" to="/checkout" @click="dialog = false">Checkout</v-btn>
      </v-toolbar>
      <div class="total-wrapper">
        <p>
          You have <span class="count">{{ totalItemsCount }}</span> {{ singularOrPlural }} in your
          cart
        </p>
        <hr />
        <p>
          Total:
          <span>
            <span class="count">{{ totalPriceSum }}</span>
            €
          </span>
        </p>
      </div>
      <div class="cart-item-list d-flex align-content-start justify-center flex-wrap align-end">
        <cart-item
          class="ma-4"
          v-for="cocktail in cartStore.cartItem"
          :key="cocktail.name"
          :id="cocktail.id"
          :cocktail-name="cocktail.name"
          :cocktail-price="cocktail.price"
          :amount="cocktail.amount"
          :image-url="cocktail.imageUrl"
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
const counter = ref(0);
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
const singularOrPlural = computed(() => {
  if (counter.value === 0 || counter.value > 1) return 'items';
  if (counter.value === 1) return 'item';
});
const totalItemsCount = computed(() => {
  let count = 0;
  for (const cartItem of cartStore.cartItem) {
    count += cartItem.amount;
    counter.value = count;
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

<style scoped></style>
