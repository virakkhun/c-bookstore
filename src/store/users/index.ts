import { defineStore } from "pinia";
import state from "./state";
import getters from "./getters";
import axios from "axios";
import router from "../../router";

const useUser = defineStore("user", {
  state: () => {
    return {
      state,
    };
  },
  getters,
  actions: {
    async createUser(payload: any) {
      const res = await axios.post("students/register", payload);
      const status = await res.data.status;
      const message = await res.data.message;

      if (status === 1) {
        this.state.msg = message;
      } else {
        this.state.msg = "Fail to create";
      }
    },
    async login(payload: any) {
      try {
        const res = await axios.post("students/login", payload);

        const data = await res.data;
        const token = await res.data.token;
        const status = await res.data.status;
        if (status === 1) {
          this.state.user = data.data;
          localStorage.setItem("token", token);
          router.push("/");
          this.state.msg = "You have logged in. TADA!";
        } else {
          this.state.msg = "The credentials you are providing is not correct.";
        }
      } catch (error: any) {
        this.state.msg = error.response.data.message;
      }
    },
  },
});

export default useUser;
