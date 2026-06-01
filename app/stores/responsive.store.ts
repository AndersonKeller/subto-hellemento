import { defineStore } from "pinia";

const useResponsiveStore = defineStore("responsiveStore", {
  state: () => {
    return {
      responsive: 941,
    };
  },
  getters: {
    getResponsive: (state) => {
      return state.responsive;
    },
  },
  actions: {
    setResponsive(value: number) {
      this.responsive = value;
    },
  },
});

export default useResponsiveStore;
