import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './css/index.css';
import App from './App.vue';

import CartItem from './components/CartItem.vue';

const app = createApp(App);

app.component('cart-item', CartItem);
// .component('NavigationBar', NavigationBar)
// .component('Footer', Footer)
// .component('ShoppingCart', ShoppingCart);

const pinia = createPinia();

app.use(pinia);
app.mount('#app');
