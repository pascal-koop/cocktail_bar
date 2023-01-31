<template>
  <div class="wrapper">
    <div class="cart">
      <div class="cart-header">
        <h3>Shopping Cart</h3>
        <p>You have {{ totalItemsCount }} items in your cart</p>
      </div>
      <div class="cart-item-list">
        <cart-item
          v-for="cocktail in cartItems"
          :key="cocktail.name"
          :id="cocktail.id"
          :cocktail-name="cocktail.name"
          :cocktail-price="cocktail.price"
          :amount="cocktail.amount"
          :image="cocktail.image"
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
    return {
      cartItems: [
        { id: 'mojito', name: 'Mojito', price: 10, amount: 1, image: './src/assets/mojito.png' },
        {
          id: 'margarita',
          name: 'Margarita',
          price: 12,
          amount: 1,
          image: './src/assets/margarita.png',
        },
        {
          id: 'long-island-iced-tea',
          name: 'Long Island Iced Tea',
          price: 15,
          amount: 1,
          image: './src/assets/long_island.png',
        },
      ],
    };
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
