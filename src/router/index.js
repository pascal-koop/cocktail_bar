import { createRouter, createWebHistory } from 'vue-router';


// routing
const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: () => import('../views/Home.vue'),
      NavigationBar: () => import('../components/NavigationBar.vue'),
      FooterBar: () => import('../components/FooterBar.vue'),
    },
  },
  {
    path: '/cocktails',
    name: 'CocktailOrder',
    components: {
      default: () => import('../views/CocktailOrder.vue'),
      NavigationBar: () => import('../components/NavigationBar.vue'),
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
