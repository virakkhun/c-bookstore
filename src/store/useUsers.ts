import { defineStore } from "pinia";
import axios from "../http/axios";

const useUser = defineStore("user", {
  state: () => {
    return {
      user: "",
    };
  },
  getters: {
    getUser(state): any {
      return state.user;
    },
  },
  actions: {
    async createUser(payload: any) {
      console.log(payload);
      // const respone = await axios.post({
      // });
    },
  },
});

export default useUser;
