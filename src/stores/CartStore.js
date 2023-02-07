import { defineStore } from 'pinia';

export const useCartStore = defineStore('cartStore', {
  state: () => {
    return {
      cartItem: [
        
      ],
    };
  },
  getters: {
    totalItemsCount: state => {
      let total = 0;
      for (const cocktail of state.cartItem) {
        total += cocktail.amount;
      }
      return total;
    },
  },
});
