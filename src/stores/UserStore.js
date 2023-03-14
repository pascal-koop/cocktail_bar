import { defineStore } from 'pinia';
import { fetchHistory, fetchUserDataFromDb } from '../FetchModule';

export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      userName: '',
      user: [],
      history: [],
      loggedIn: false,
      userWasAboutToCheckout: false,
      isUserOnline: true,
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
      let newHistory = [{}];
      for (const order of history) {
        if (order.order_id !== newHistory[newHistory.length - 1].order_id) { // warum - 1? weil die letzte Stelle des Arrays ein leeres Objekt ist, das wir nicht mit in die if Bedingung nehmen wollen

          newHistory.push({
            order_id: order.order_id,
            order_date: order.order_date,
            order_sum_price: order.order_sum_price,
            line_items: [],
          });

          // push cocktails into line items if order id is identical
          for (const item of history) {
            if (item.order_id === order.order_id) {
              newHistory[newHistory.length - 1].line_items.push({
                single_price: item.single_price,
                cocktail_name: item.cocktail_name,
                order_amount: item.order_amount,
              });
            }
          }
        }
         // if object is empty remove it
        if (newHistory[0].order_id === undefined) {
          newHistory.shift();
        }
      }
      this.history = newHistory;
      return this.history;
    },
    async fetchUserData() {
      const data = await fetchUserDataFromDb();
      this.user = data;

      // get first name from user object
      this.userName = this.user[0].first_name;

      console.log(this.user);
    },
  },
});
/*
1. iterate over history and store every order with the same order_date in new array of objects




*/
