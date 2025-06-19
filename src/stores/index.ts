import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    count: 0,
    message: 'Hello, Vue 3 with Pinia!'
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
    setMessage(newMessage: string) {
      this.message = newMessage;
    }
  }
});