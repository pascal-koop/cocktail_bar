import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './css/index.css';
import router from './router/routes';
import App from './App.vue';


// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});
import CartItem from './components/shoppingCart/CartItem.vue';

const app = createApp(App);
const pinia = createPinia();
import piniaPluginPersistantState from 'pinia-plugin-persistedstate';
app.component('cart-item', CartItem);
// .component('NavigationBar', NavigationBar)
// .component('Footer', Footer)
// .component('ShoppingCart', ShoppingCart);
pinia.use(piniaPluginPersistantState);
app.use(vuetify);
app.use(pinia);
app.use(router);

app.mount('#app');

