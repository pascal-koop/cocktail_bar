<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" dark v-bind="props"
          ><svg-icon type="mdi" :path="basket"></svg-icon> {{ cartStore.totalItemsCount }}
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="secondary">
          <v-btn icon dark @click="dialog = false">
            <svg-icon type="mdi" :path="close"></svg-icon>
          </v-btn>
          <v-toolbar-title>
            <div class="cart-header">
              <h3>Cart</h3>
            </div>
          </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <p>You have {{ totalItemsCount }} items in your cart</p>
        <p>Total:</p>
        <p>{{ totalPriceSum }}</p>

        <v-divider></v-divider>

        <v-list-subheader></v-list-subheader>

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
  </v-row>
</template>
<script setup>
import { onMounted, computed } from 'vue';
import { useCartStore } from '../stores/CartStore';
import { ref } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiClose, mdiBasket } from '@mdi/js';
let dialog = ref(false);
let close = mdiClose;
let basket = mdiBasket;
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
