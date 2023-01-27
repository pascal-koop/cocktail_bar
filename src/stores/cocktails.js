import { defineStore } from 'pinia';
import { apirequest } from './api/cocktail';

export const useCocktailStore = defineStore('cocktail', {
  id: 'coktail12',
  state: () => ({
    // showShoppingCard: false,
    cartItem: [

    ]
  }),
  getters: {

  },
  action: {
    async fetchCocktails() {
      const fakeApiData =  {
        name: 'Mojito',
        price: 10,
        amount: 1,
        imageUrl: './src/assets/Mojito.jpeg'
      }
      new Promise(resolve => {
        setTimeout(() => {
          this.cartItem = fakeApiData
          resolve('api data received')
        }, 2000)
      })
    }
  }
})