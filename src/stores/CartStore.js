import { defineStore } from 'pinia';

export const useCartStore = defineStore('cartStore', {
  state: () => {
    return {
      cartItem: [
        {
          name: 'Mojito',
          price: 10,
          amount: 1,
          imageUrl: '../assets/mojito.png',
          category: 'Sour',
        },
      ],
    };
  },
});
