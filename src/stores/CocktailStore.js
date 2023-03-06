 import { defineStore } from 'pinia';
import { useCartStore } from '../stores/CartStore';

import { fetchCocktailMenu } from '../FetchModule';

export const useCocktailStore = defineStore('cocktailStore', {
  state: () => {
    return {
      categorys: ['All', 'Sour', 'Bitter', 'Fruity', 'Sweet', 'Beer', 'Prosecco'],

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
        return state.cocktailsMenu.cocktails;
      }

      return state.cocktailsMenu.cocktails.filter(
        cocktail => cocktail.category === state.selectedCategory
      );
    },
    getSelectedCocktailForInfo: state => {
      return state.selectedCocktail;
    },
    getIngredients() {
      for (const cocktail of this.selectedCocktail) {
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
          console.log(this.selectedCocktail);
        }
      }
    },
    addToCart(item) {
      const cartStore = useCartStore();
      for (const cocktail of cartStore.cartItem) {
        if (cocktail.id === item.id) {
          cocktail.amount++;
          return;
        }
      }
      cartStore.cartItem.push(item);
    },
    async fetchCocktails() {
      const data = await fetchCocktailMenu();
      this.cocktailsMenu = data;
    },
  },
});
