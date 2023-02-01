import { defineStore } from 'pinia';

export const useCocktailStore = defineStore('cocktailStore', {
  state: () => {
    return {
      cocktailMenu: [
        {
          name: 'Mojito',
          price: 10,
          amount: 1,
          imageUrl: '../assets/mojito.png',
          category: 'Sour',
        },
        {
          name: 'Margarita',
          price: 10,
          amount: 1,
          imageUrl: '../assets/margarita.png',
          category: 'Bitter',
        },
        {
          name: 'Long Island Iced Tea',
          price: 10,
          amount: 1,
          imageUrl: '../assets/long-island-iced-tea.png',
          category: 'Sour',
        },
        {
          name: 'Mai Tai',
          price: 10,
          amount: 1,
          imageUrl: '../assets/mai-tai.png',
          category: 'Fruity',
        },
        {
          name: 'Mint Julep',
          price: 10,
          amount: 1,
          imageUrl: '../assets/mint-julep.png',
          category: 'Sweet',
        },
        {
          name: 'Mojito',
          price: 10,
          amount: 1,
          imageUrl: '../assets/mojito.png',
          category: 'Sour',
        },
        {
          name: 'Margarita',
          price: 10,
          amount: 1,
          imageUrl: '../assets/margarita.png',
          category: 'Bitter',
        },
        {
          name: 'Long Island Iced Tea',
          price: 10,
          amount: 1,
          imageUrl: '../assets/long-island-iced-tea.png',
          category: 'Sour',
        },
        {
          name: 'Mai Tai',
          price: 10,
          amount: 1,
          imageUrl: '../assets/mai-tai.png',
          category: 'Fruity',
        },
      ],
      beerMenu: [
        { name: 'Becks', price: 3.5, amount: 1, imageUrl: '../assets/becks.png', category: 'Beer' },
        {
          name: 'Budweiser',
          price: 3.5,
          amount: 1,
          imageUrl: '../assets/budweiser.png',
          category: 'Beer',
        },
        {
          name: 'Corona',
          price: 3.5,
          amount: 1,
          imageUrl: '../assets/corona.png',
          category: 'Beer',
        },
        {
          name: 'Heineken',
          price: 3.5,
          amount: 1,
          imageUrl: '../assets/heineken.png',
          category: 'Beer',
        },
        {
          name: 'Peroni',
          price: 3.5,
          amount: 1,
          imageUrl: '../assets/peroni.png',
          category: 'Beer',
        },
      ],
      prosecMenu: [
        {
          name: 'Ray&Scavi',
          price: 6,
          amount: 1,
          imageUrl: '../assets/ray&scavi.png',
          category: 'Prosecco',
        },
      ],
    };
  },
});





//   action: {
//     async fetchCocktails() {
//       const fakeApiData =  {
//         name: 'Mojito',
//         price: 10,
//         amount: 1,
//         imageUrl: './src/assets/Mojito.jpeg'
//       }
//       new Promise(resolve => {
//         setTimeout(() => {
//           this.cartItem = fakeApiData
//           resolve('api data received')
//         }, 2000)
//       })
//     }
//   }
// })
