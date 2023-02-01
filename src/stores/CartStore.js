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
        
      ],
      name: 'Pascale',
    };
  },
  actions: {
    incrementAmount(id) {
      this.cartItem.find((item) => item.id === id).amount++;
    }
  }
});
