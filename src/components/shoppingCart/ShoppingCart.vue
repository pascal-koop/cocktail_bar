<template>
  <div class="wrapper ">
    <div class="cart float-md-right">
      <div class="cart-header">
        <h3>Shopping Cart</h3>
        <p>You have {{ totalItemsCount }} items in your cart</p>
      </div>
      <div class="cart-item-list">
        <cart-item
          v-for="cocktail in cartStore.cartItem"
          :key="cocktail.cocktail_name"
          :id="cocktail.cocktail_id"
          :cocktail-name="cocktail.cocktail_name"
          :cocktail-price="cocktail.cocktail_price"
          :amount="cocktail.cocktail_amount"
          :cart-Image="cocktail.cart_image_url"
          @increment-item="incrementAmount"
          @decrement-item="decrementAmount"
          @delete-item="deleteItem"
        ></cart-item>
        <p>Total:</p>
        <p>{{ totalPriceSum }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {  onMounted, computed } from 'vue';
  import {useCartStore} from '../../stores/cartStore';

  const cartStore = useCartStore();
  const emit = defineEmits(['update:total-items-count']);

  onMounted(() => {
    emit('update:total-items-count', totalItemsCount);
  });

  const totalPriceSum = computed(() => {
    let totalPrice = 0;
    for (const cartItem of cartStore.cartItem) {
      totalPrice += cartItem.amount * cartItem.cocktail_price;
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
      const identifiedCocktail = cartStore.cartItem.find(cocktail => cocktail.cocktail_id === cocktailId);
      identifiedCocktail.amount += 1;
  };

  function decrementAmount(cocktailId) {
    const identifiedCocktail = cartStore.cartItem.find(cocktail => cocktail.cocktail_id === cocktailId);
    const identifiedCocktailIndex = cartStore.cartItem.findIndex(
      cocktail => cocktail.cocktail_id === cocktailId
    );
    identifiedCocktail.amount -= 1;
    if (identifiedCocktail.amount === 0) {
      cartStore.cartItem.splice(identifiedCocktailIndex, 1);
    }
  };

  function deleteItem(cocktailId) {
    const identifiedCocktail = cartStore.cartItem.find(cocktail => cocktail.cocktail_id === cocktailId);
    cartStore.cartItem.splice(identifiedCocktail, 1);
  }
</script>
