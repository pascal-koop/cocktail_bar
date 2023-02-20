import { defineStore } from 'pinia';
import { RouterLink } from 'vue-router';

export const useCartStore = defineStore('cartStore', {
  state: () => {
    return {
      userWasAboutToCheckout: false,
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
  actions: {
    setUserWasAboutToCheckOut() {
      this.userWasAboutToCheckout = true;
      
      console.log(333)
    }
  }
});
