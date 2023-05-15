import { defineStore } from 'pinia';
export const useAuthStore = defineStore('authStore', {
  state: () => ({
    token: null,
    isLoggedIn: false,
  }),
  persist: true,
  actions: {
    setToken(token) {
      this.token = token;
      this.isLoggedIn = true;
    },
    logout() {
      this.token = null; 
      this.isLoggedIn = false; 
      localStorage.clear('authStore');
    },
    
  },
});
