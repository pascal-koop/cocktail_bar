<template>
  <div class="d-flex flex-wrap justify-center ">
    <v-sheet v-for="(cocktail, _index) in cocktails">
      <CocktailCards
        :key="cocktail.id"
        :cocktail-name="cocktail.name"
        :cocktail-price="cocktail.price"
        :img-url="cocktail.image"
      ></CocktailCards>
    </v-sheet>
  </div>
</template>

<script>
import CocktailCards from './CocktailCards.vue';

export default {
  components: { CocktailCards },
  data() {
    return {
      cocktails: [
        {
          id: 'mojito',
          name: 'Mojito',
          price: 10,
          amount: 1,
          image: './src/assets/mojito.png',
          category: 'Sour',
        },
        {
          id: 'margarita',
          name: 'Margarita',
          price: 12,
          amount: 1,
          image: './src/assets/margarita.png',
          category: 'Sweet',
        },
        {
          id: 'long-island-iced-tea',
          name: 'Long Island Iced Tea',
          price: 15,
          amount: 1,
          image: './src/assets/long_island.png',
          category: 'Fruity',
        },
        {
          id: 'long-island-iced-tea',
          name: 'Long Island Iced Tea',
          price: 15,
          amount: 1,
          image: './src/assets/long_island.png',
          category: 'Fruity',
        },
        {
          id: 'long-island-iced-tea',
          name: 'Long Island Iced Tea',
          price: 15,
          amount: 1,
          image: './src/assets/long_island.png',
          category: 'Fruity',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
