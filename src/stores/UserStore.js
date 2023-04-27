import { defineStore } from 'pinia';
import { fetchHistory, fetchUserDataFromDb } from '../../frontend/FetchModule.js';
import { useAuthStore } from './AuthStore.js';
export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      userName: '',
      history: [],
      user: [],
      isLoggedIn: false,
    };
  },
  actions: {
    async fetchUserHistory() {
      const history = await fetchHistory();
      // loop over history with for in loop and replace order_date with a new date object
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      };
      for (let date in history) {
        history[date].order_date = new Date(history[date].order_date).toLocaleDateString(
          'en-EN',
          options
        );
      }
      let newHistory = [];
      let currentOrderId = null;
      for (const order of history) {
        if (order.order_id !== currentOrderId) {
          currentOrderId = order.order_id;
          newHistory.push({
            order_id: order.order_id,
            order_date: order.order_date,
            order_sum_price: order.order_sum_price,
            line_items: [],
          });
        }
        // push cocktails into line items if order id is identical

        newHistory[newHistory.length - 1].line_items.push({
          single_price: order.single_price,
          cocktail_name: order.cocktail_name,
          order_amount: order.order_amount,
        });
      }

      this.history = newHistory;
      return this.history;
    },
    async fetchUserData() {
      const authStore = useAuthStore();
      const token = authStore.token;
      console.log('user Store:',token);
      const data = await fetchUserDataFromDb(token);
      this.user = data;

      // get first name from user object
      this.userName = this.user[0].first_name;
    },
  },
});
