import { defineStore } from 'pinia';
import { fetchHistory, fetchUserDataFromDb } from '../FetchModule';


export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
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
      this.history = history;
      console.log(this.history);
    },
    async fetchUserData() {
      const data = await fetchUserDataFromDb();
      this.user = data; 
      console.log(this.user);
    }
  }
});
