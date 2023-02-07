import { EMPTY_ARR } from '@vue/shared';
import { defineStore } from 'pinia';
import { useCartStore } from '../stores/CartStore';

export const useCocktailStore = defineStore('cocktailStore', {
  state: () => {
    return {
      categorys: ['All', 'Sour', 'Bitter', 'Fruity', 'Sweet', 'Beer', 'Prosecco'],

      selectedCategory: 'All',
      selectedCocktail: '',
      cocktailsMenu: [
        {
          id: 1,
          name: 'Mojito',
          price: 10,
          amount: 1,
          cartImage: '/images/cartImages/mojito.png',
          imageUrl: '/images/menuImages/mojito.jpeg',
          category: 'Sour',
          ingredients: [
            'Weißer Rohrzucker',
            'Limette',
            'Minzezweige',
            'Weißer Rum',
            'Mineralwasser',
          ],
          history: `Der Mojito ist ein ursprünglich kubanischer Drink,
            über die Entstehung seines Namens kursieren jedoch verschiedene Erklärungen.
            Einer zufolge soll die Bezeichnung vom westafrikanischen Wort mojo abgeleitet sein,
            einem Stoffbeutel mit magischen Gewürzen und Zaubergegenständen – als diminutive (verniedlichende)
            Form dieses Lehnwortes würde mojito folglich „kleiner Zauber“ bedeuten.[1] Es gibt auch eine
            gleichnamige Gewürzmischung,von der der Name rühren könnte,[2] allerdings wird diese mojo eigentlich mit Pomeranzen, nicht mit Limetten zubereitet. 
            Das Wort könnte auch vom Spanischen mojar (nass machen) abgeleitet sein und eine Verkürzung des Adjektivs mojadito (etwas nass) oder mojado (nass) darstellen.
            Der Mojito geht auf eine lange Tradition von Rum-Getränken in der Karibik zurück. So soll bereits
            im 16. Jahrhundert der britische Freibeuter Francis Drake ein Getränk aus Zucker, echten Limetten 
            (einer sauren, aromatischen karibischen Sorte), Aguardiente de Caña (ein einfacher Zuckerrohrschnaps)
            und Minze gegen seine Magenbeschwerden konsumiert haben. Von den Spaniern wurde Drake gefürchtet und erhielt den Spitznamen 
            "El Draque" (span. der Drache), und so nannte man auch das Getränk, das später mit Rum gemischt wurde, 
            als sich dessen Herstellung in der Karibik verbreitete. Der kubanische Autor Rámon de Palma schrieb 1838 in seiner Geschichte El Cólera en Habana: 
            Jeden Tag um elf Uhr nehme ich einen Draquecito ein, und das tut mir sehr gut.`,
        },
        {
          id: 4,
          name: 'Mai Tai',
          price: 10,
          amount: 1,
          cartImage: '/images/cartImages/mai_tai_cart.png',
          imageUrl: '/images/menuImages/mai_tai.jpeg',
          category: 'Fruity',
        },
        {
          id: 5,
          name: 'Mint Julep',
          price: 10,
          amount: 1,
          imageUrl: '/images/menuImages/mint_julep.jpeg',
          cartImage: '/images/cartImages/mint_julep_cart.png',
          category: 'Sweet',
        },
        {
          id: 25,
          name: 'Heineken',
          price: 3.5,
          amount: 1,
          imageUrl: '/images/menuImages/heineken.jpeg',
          cartImage: '/images/cartImages/heineken_cart.png',
          category: 'Beer',
        },
        {
          id: 26,
          name: 'Budweiser',
          price: 3.5,
          amount: 1,
          imageUrl: '/images/menuImages/budweiser.jpeg',
          cartImage: '/images/cartImages/budweiser_cart.png',
          category: 'Beer',
        },
        {
          id: 27,
          name: 'Corona',
          price: 3.5,
          amount: 1,
          imageUrl: '/images/menuImages/corona.jpeg',
          cartImage: '/images/cartImages/corona_cart.png',
          category: 'Beer',
        },
        {
          id: 29,
          name: 'Peroni',
          price: 3.5,
          amount: 1,
          imageUrl: '/images/menuImages/peroni.jpeg',
          cartImage: '/images/cartImages/peroni_cart.png',
          category: 'Beer',
        },
        {
          id: 30,
          name: 'Aperol Spritz',
          price: 8,
          amount: 1,
          imageUrl: '/images/menuImages/aperol_spritz.jpeg',
          cartImage: '/images/cartImages/aperol_spritz_cart.png',
          category: 'Prosecco',
        },
      ],
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
      //let rightCocktail;
      for (const cocktail in this.cocktailsMenu) {
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
  },
});
