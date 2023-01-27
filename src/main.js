import { createApp } from 'vue';
import { createPinia } from 'pinia';
//import './style.css';
import App from './App.vue';
import NavigationBar from './components/Navigation.vue';
import Footer from './components/Footer.vue';
import ShoppingCart from './components/ShoppingCart.vue';
import CartItem from "./components/CartItem.vue";
import { useCocktailStore } from './stores/cocktails';


const app = createApp(App);

app.component('cart-item', CartItem)
// .component('NavigationBar', NavigationBar)
// .component('Footer', Footer)
// .component('ShoppingCart', ShoppingCart);

const pinia = createPinia();

app.use(pinia);
app.mount('#app');


