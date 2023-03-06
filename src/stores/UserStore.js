import { defineStore } from 'pinia';


export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      user: {},
      loggedIn: false,
      userWasAboutToCheckout: false,
      isUserOnline: false,
    };
  },
  actions: {
    // async postRegisterForm(formContent) {
      
    // }
  }
});
