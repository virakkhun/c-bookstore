import { defineStore } from "pinia";
import axios from "axios";
import router from "../../router";

export const useUser = defineStore("user", {
  state: () => {
    return {
      user: "",
      msg: "",
      token: "",
    };
  },
  getters: {
    getUser(state: any): object {
      return state.user;
    },
    getMessage(state: any): string {
      return state.msg;
    },
    getToken(state: any): string {
      return state.token;
    },
    getUserName(state: any): string {
      return state.user.username;
    },
  },
  actions: {
    async createUser(payload: any): Promise<void> {
      const res = await axios.post("students/register", payload);
      const status = await res.data.status;
      const message = await res.data.message;

      if (status === 1) {
        this.msg = message;
      } else {
        this.msg = "Fail to create";
      }
    },
    async login(payload: any): Promise<void> {
      try {
        const res = await axios.post("students/login", payload);
        const uuid: string = await res.data.data.id;
        const token: string = await res.data.token;
        const status: number = await res.data.status;
        if (status === 1) {
          this.token = token;
          localStorage.setItem("token", token);
          localStorage.setItem("uuid", uuid);
          await router.push("/");
          this.msg = "You have logged in. TADA!";
        } else {
          this.msg = "The credentials you are providing is not correct.";
        }
      } catch (error: any) {
        this.msg = error.response.data.message;
      }
    },
    async fetchUser(): Promise<void> {
      const res = await axios.get(`students/${localStorage.getItem("uuid")}`);
      const data = await res.data.data;
      if (res) {
        this.user = data;
      }
    },
    async logout(): Promise<void> {
      localStorage.clear();
      router.push("/login");
    },
  },
});
