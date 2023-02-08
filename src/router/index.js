import { createRouter, createWebHistory } from 'vue-router';


// routing
const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: () => import('../views/Home.vue'),
      BottomNavigationBar: () => import('../components/BottomNavigationBar.vue'),
      FooterBar: () => import('../components/FooterBar.vue'),
    },
  },
  {
    path: '/cocktails',
    name: 'CocktailOrder',
    components: {
      default: () => import('../views/CocktailOrder.vue'),
      BottomNavigationBar: () => import('../components/BottomNavigationBar.vue'),
      FooterBar: () => import('../components/FooterBar.vue'),
    },
  },
  {
    path: '/checkout',
    name: 'Checkout',
    components: {
      default: () => import('../views/CartCheckout.vue'),
      BottomNavigationBar: () => import('../components/BottomNavigationBar.vue'),
      FooterBar: () => import('../components/FooterBar.vue'),
    },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
// Wenn wir beim router in der history createMemoryHistory() angeben wird kein Pfad in der URL angeben -> dafür kann man aber nicht nach vorne und zurück springen.
export default router;
