import { defineStore } from 'pinia';

export const useCartStore = defineStore('cartStore', {
  state: () => {
    return {
      cartItem: [
        {
          id: 1,
          name: 'Mojito',
          price: 10,
          amount: 1,
          imageUrl: '../assets/mojito.png',
          category: 'Sour',
        },
        {
          id: 2,
          name: 'Pina Colada',
          price: 12,
          amount: 1,
          imageUrl: '../assets/mojito.png',
          category: 'Fruity',
        },
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
