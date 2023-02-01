<template>
  <div class="wrapper">
    <div class="cart">
      <div class="cart-header">
        <h3>Shopping Cart</h3>
        <p>You have {{ totalItemsCount }} items in your cart</p>
      </div>
      <div class="cart-item-list">
        <cart-item
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

<script>

export default {
  emits: ['update:total-items-count'],
  data() {
    return {};
  },
  computed: {
    //showShoppingCard() {
    //return this.cartItems.length > 0;
    // },
    totalPriceSum() {
      let totalPrice = 0;
      for (const cartItem of this.cartItems) {
        totalPrice += cartItem.amount * cartItem.price;
      }
      return totalPrice;
    },
    totalItemsCount() {
      let count = 0;
      for (const cartItem of this.cartItems) {
        count += cartItem.amount;
      }
      this.$emit('update:total-items-count', count);
      return count;
    },
  },
  methods: {
    incrementAmount(cocktailId) {
      const identifiedCocktail = this.cartItems.find(cocktail => cocktail.id === cocktailId);
      identifiedCocktail.amount += 1;
    },
    decrementAmount(cocktailId) {
      const identifiedCocktail = this.cartItems.find(cocktail => cocktail.id === cocktailId);
      const identifiedCocktailIndex = this.cartItems.findIndex(
        cocktail => cocktail.id === cocktailId
      );
      identifiedCocktail.amount -= 1;
      if (identifiedCocktail.amount === 0) {
        this.cartItems.splice(identifiedCocktailIndex, 1);
      }
    },

    deleteItem(cocktailId) {
      const identifiedCocktail = this.cartItems.find(cocktail => cocktail.id === cocktailId);
      this.cartItems.splice(identifiedCocktail, 1);
    },
  },
  mounted() {
    this.$emit('update:total-items-count', this.totalItemsCount);
  },
};
</script>
