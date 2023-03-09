import { defineStore } from 'pinia';
import { fetchHistory, fetchUserDataFromDb } from '../FetchModule';


export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      user: {},
      loggedIn: false,
      userWasAboutToCheckout: false,
      isUserOnline: true,
    };
  },
  actions: {
    async fetchUserHistory() {
      const history = await fetchHistory();
      console.log(history);
    },
    async fetchUserData() {
      const data = await fetchUserDataFromDb();
      console.log(data);
    }
  }
});
