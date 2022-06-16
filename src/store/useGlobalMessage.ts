import { defineStore } from "pinia";

interface MessageDetail {
  msg: string;
  status: number;
}

export const useGlobalMessage = defineStore("globalMessage", {
  state: () => {
    return {
      message: {
        msg: "",
        status: 0,
      } as MessageDetail,
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
    setError(payload: MessageDetail): void {
      this.message = payload;
    },
    clearError(): void {
      setTimeout(() => {
        this.message = {
          msg: "",
          status: 0,
        };
      }, 3000);
    },
  },
});
