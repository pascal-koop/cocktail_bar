import { defineStore } from 'pinia';

export const useCocktailStore = defineStore('cocktail', {
  id: 'coktail12',
  state: () => ({ 
    cartItem: [
      {
        name: 'Mojito',
        price: 10,
        amount: 1, 
        imageUrl: './src/assets/Mojito.jpeg'
      }
    ]
  }),
  getters: {

  }
})