import { defineStore } from 'pinia';
import { postCartToDb } from '../../frontend/FetchModule.js';
export const useCartStore = defineStore('cartStore', {
  state: () => {
    return {
      cartItem: [],
      userWasAboutToCheckout: false,
    };
  },
  persist: true,
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
    // setUserWasAboutToCheckOut() {
    //   this.userWasAboutToCheckout = true || false;
    // },
    postCart() {
      postCartToDb(this.cartItem);
    },
    clearCart() {
      this.cartItem = [];
    }
  },
});
