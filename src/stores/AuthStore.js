import { defineStore } from 'pinia';

export const useAuthStore = defineStore('authStore', {
  state: () => {
    return {
      isLoggedIn: false,
      token: '',
      user: [],
    };
  },
  persist: true,
  actions: {
    setToken(token) {
      this.token = token;
      console.log('tokenPINIA', this.token);
      this.isLoggedIn = true;
    },
  },
});
