import { defineStore } from 'pinia';

export const useCocktailStore = defineStore('cocktailStore', {
  state: () => {
    return {
      categorys: ['All', 'Sour', 'Bitter', 'Fruity', 'Sweet', 'Beer', 'Prosecco'],
      selectedCategory: 'All',
      
      cocktailsMenu: [
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
          name: 'Margarita',
          price: 10,
          amount: 1,
          imageUrl: '../assets/margarita.png',
          category: 'Bitter',
        },
        {
          id: 3,
          name: 'Long Island Iced Tea',
          price: 10,
          amount: 1,
          imageUrl: '../assets/long-island-iced-tea.png',
          category: 'Sour',
        },
        {
          id: 4,
          name: 'Mai Tai',
          price: 10,
          amount: 1,
          imageUrl: '../assets/mai-tai.png',
          category: 'Fruity',
        },
        {
          id: 5,
          name: 'Mint Julep',
          price: 10,
          amount: 1,
          imageUrl: '../assets/mint-julep.png',
          category: 'Sweet',
        },
        {
          id: 6,
          name: 'Mojito',
          price: 10,
          amount: 1,
          imageUrl: '../assets/mojito.png',
          category: 'Sour',
        },
        {
          id: 7,
          name: 'Margarita',
          price: 10,
          amount: 1,
          imageUrl: '../assets/margarita.png',
          category: 'Bitter',
        },
        {
          id: 8,
          name: 'Long Island Iced Tea',
          price: 10,
          amount: 1,
          imageUrl: '../assets/long-island-iced-tea.png',
          category: 'Sour',
        },
        {
          id: 9,
          name: 'Mai Tai',
          price: 10,
          amount: 1,
          imageUrl: '../assets/mai-tai.png',
          category: 'Fruity',
        },
        {
          id: 25,
          name: 'Becks',
          price: 3.5,
          amount: 1,
          imageUrl: '../assets/becks.png',
          category: 'Beer',
        },
        {
          id: 26,
          name: 'Budweiser',
          price: 3.5,
          amount: 1,
          imageUrl: '../assets/budweiser.png',
          category: 'Beer',
        },
        {
          id: 27,
          name: 'Corona',
          price: 3.5,
          amount: 1,
          imageUrl: '../assets/corona.png',
          category: 'Beer',
        },
        {
          id: 28,
          name: 'Heineken',
          price: 3.5,
          amount: 1,
          imageUrl: '../assets/heineken.png',
          category: 'Beer',
        },
        {
          id: 29,
          name: 'Peroni',
          price: 3.5,
          amount: 1,
          imageUrl: '../assets/peroni.png',
          category: 'Beer',
        },
        {
          id: 30,
          name: 'Ray&Scavi',
          price: 6,
          amount: 1,
          imageUrl: '../assets/ray&scavi.png',
          category: 'Prosecco',
        },
      ],
    };
  },
  getters: {
    getSelectedCategory: state => {
      console.log(state.selectedCategory);
      return state.selectedCategory;
    },
    getCocktailsForSelectedCategory: state => {
      if (state.selectedCategory === 'All') {
        return state.cocktailsMenu;
      }
      return state.cocktailsMenu.filter(cocktail => cocktail.category === state.selectedCategory);
    },
  },
  actions: {
    setSelectedCategory(category){
      this.selectedCategory = category; 
    }
  }
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
