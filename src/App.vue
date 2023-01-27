<template>
  <WelcomeItems />
  <Navigation />
  <Footer />
  <ShoppingCart />
</template>

<script>
import WelcomeItems from './components/WelcomeItems.vue';
//import useCocktailStore from '../stores/cocktaill';
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';
import ShoppingCart from './components/ShoppingCart.vue';
export default {
  components: {
    WelcomeItems,
    Navigation,
    Footer,
    ShoppingCart,
  },
  data() {
    return {
      cocktails: [
        { id: 'mojito' ,name: 'Mojito', price: 10, amount: 0, image: './src/assets/mojito.png' }
      ],
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,700;1,400;1,700&display=swap');
:root {
  font-family: 'Space Mono', monospace;
}
body {
  margin: 5px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  font-size: 3rem;
  font-weight: 700;
  font-style: bold;
  color: rgb(36, 36, 36);

  margin: 1rem 0;
}
</style>
