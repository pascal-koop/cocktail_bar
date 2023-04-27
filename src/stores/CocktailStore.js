import { defineStore } from 'pinia';
import { useCartStore } from '../stores/CartStore';

import { fetchCocktailMenu } from '../../frontend/FetchModule.js';

export const useCocktailStore = defineStore('cocktailStore', {
  state: () => {
    return {
      categories: ['All', 'Sour', 'Bitter', 'Fruity', 'Sweet', 'Beer', 'Prosecco'],

      selectedCategory: 'All',
      selectedCocktail: '',

      cocktailsMenu: [],
    };
  },
  getters: {
    getSelectedCategory: state => {
      return state.selectedCategory;
    },
    getCocktailsForSelectedCategory: state => {
      if (state.selectedCategory === 'All') {
        return state.cocktailsMenu;
      }

      return state.cocktailsMenu.filter(cocktail => cocktail.category === state.selectedCategory);
    },
    getSelectedCocktailForInfo: state => {
      return state.selectedCocktail;
    },
    getIngredients() {
      for (const cocktail of this.selectedCocktail) {
        console.log(cocktail);
        return cocktail.ingredients;
      }
      this.selectedCocktail;
    },
  },
  actions: {
    setSelectedCategory(category) {
      this.selectedCategory = category;
    },
    setSelectedCocktail(cocktailId) {
      for (const cocktail in this.cocktailsMenu.cocktails) {
        if (cocktail.id === cocktailId) {
          this.selectedCocktail = cocktail;
        }
      }
    },
    addToCart(item) {
      const cartStore = useCartStore();
      for (const cocktail of cartStore.cartItem) {
        if (cocktail.cocktail_id === item.cocktail_id) {
          cocktail.amount++;
          return;
        }
      }
      cartStore.cartItem.push(item);
    },
    async fetchCocktails() {
      const data = await fetchCocktailMenu();
      for (const cocktail of data) {
        cocktail['amount'] = 1;
        cocktail.ingredients = cocktail.ingredients.split(',');
      }
      this.cocktailsMenu = data;
    },
  },
});
