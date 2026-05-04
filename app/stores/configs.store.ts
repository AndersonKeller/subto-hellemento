import { defineStore } from "pinia";

export const uuseConfigsStore = defineStore("configsStore", {
  state() {
    return {
      configs: {} as any,
    };
  },
  getters: {
    getConfigs: (state) => state.configs,
  },
  actions: {
    setConfigs(value: Object) {
      this.configs = value;
    },
  },
});
