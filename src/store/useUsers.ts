import { defineStore } from "pinia";
import axios from "axios";
const useUser = defineStore("user", {
  state: () => {
    return {
      user: "",
      msg: "",
    };
  },
  getters: {
    getUser(state): any {
      return state.user;
    },
  },
  actions: {
    async createUser(payload: any) {
      const res = await axios.post("students/register", payload);
      const token = await res.data.token;
      const status = await res.data.status;
      const message = await res.data.message;

      if (status === 1) {
        this.msg = message;
        localStorage.setItem("token", token);
      } else {
        this.msg = "Fail to create";
      }
    },
    async login(payload: any) {
      const res = await axios.post("students/login", payload);
      const data = await res.data;
      const token = await res.data.token;
      const status = await res.data.status;

      if (status === 1) {
        this.user = data.data;
        localStorage.removeItem("token");
        localStorage.setItem("token", token);
        this.msg = "You have logged in. TADA!";
      } else {
        this.msg = "The credentials you are providing is not correct.";
      }
    },
  },
});

export default useUser;
