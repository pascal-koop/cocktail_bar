import { createRouter, createWebHistory } from 'vue-router';
import SignUpForm from '../components/checkout/SignUpForm.vue'
import LoginForm from '../components/checkout/LoginForm.vue'
// routing
const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: () => import('../views/Home.vue'),
      BottomNavigationBar: () => import('../components/BottomNavigationBar.vue'),
    },
  },
  {
    path: '/cocktails',
    name: 'CocktailOrder',
    components: {
      default: () => import('../views/CocktailOrder.vue'),
      BottomNavigationBar: () => import('../components/BottomNavigationBar.vue'),
      
    },
  },
  {
    path: '/checkout',
    name: 'Checkout',
    components: {
      default: () => import('../views/CartCheckout.vue'),
      BottomNavigationBar: () => import('../components/BottomNavigationBar.vue'),
    },
    children: [
      {
      path: '/checkout/login',
     
      component: LoginForm
    },
      {
      path: '/checkout/signup',
      component: SignUpForm
    }
  ],

  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
// Wenn wir beim router in der history createMemoryHistory() angeben wird kein Pfad in der URL angeben -> dafür kann man aber nicht nach vorne und zurück springen.
export default router;
