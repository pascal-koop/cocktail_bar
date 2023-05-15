import { createRouter, createWebHistory } from 'vue-router';
import SignUpForm from '../components/auth/SignUpForm.vue';
import LoginForm from '../components/auth/LoginForm.vue';
import PathNotFound from '../components/PathNotFound.vue';
import CocktailOrder from '../../src/views/CocktailOrder.vue';

//import Checkout from '../views/CartCheckout.vue';
import Home from '../views/Home.vue';
import User from '../views/User.vue';
import checkout from '../views/CartCheckout.vue';


// routing
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cocktails',
    name: 'CocktailOrder',
    component: CocktailOrder,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginForm,
  },
  {
    path: '/register',
    name: 'Register',
    component: SignUpForm,
  },
  {
    path: '/user',
    name: 'User',
    component: User,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: checkout,
  },
  {
    path: '/:pathMatch(.*)*',
    component: PathNotFound,
  },
];
// Wenn wir beim router in der history createMemoryHistory() angeben wird kein Pfad in der URL angeben -> dafür kann man aber nicht nach vorne und zurück springen.
const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;
