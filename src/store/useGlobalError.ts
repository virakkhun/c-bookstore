import { defineStore } from "pinia";

const globalError = defineStore("globalError", {
  state: () => {
    return {
      message: {
        msg: "",
        status: 0,
      },
    };
  },
  getters: {
    getMsg(state): string {
      return state.message.msg;
    },
    getStatus(state): number {
      return state.message.status;
    },
  },
  actions: {
    setError(payload: any): void {
      console.log(payload);
      this.message = payload;
    },
    clearError(): void {
      setTimeout(() => {
        this.message = {
          msg: "",
          status: 0,
        };
      }, 2000);
    },
  },
});

export default globalError;
