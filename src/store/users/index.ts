import { defineStore } from "pinia";
import axios from "axios";
import router from "../../router";

interface Users {
  user: {
    username: string;
    email: string;
    password: string;
    department?: string;
    image?: string;
    telephone?: number | string;
    status?: number;
    create_at?: string;
  };
  token?: string;
  msg?: string;
}

interface LoginCredential {
  email: string;
  password: string;
}

export const useUser = defineStore("user", {
  state: () => {
    return {
      user: {},
      token: "",
      msg: "",
    } as Users;
  },
  getters: {
    getUser(state: any): Users {
      return state.user;
    },
    getMessage(state: any): string {
      return state.msg;
    },
    getToken(state: any): string {
      return state.token;
    },
    getUserName(state: Users): string {
      return state.user.username;
    },
  },
  actions: {
    async createUser(payload: Users): Promise<void> {
      const res = await axios.post("students/register", payload.user);
      const status = await res.data.status;
      const message = await res.data.message;

      if (status === 1) {
        this.msg = message;
      } else {
        this.msg = "Fail to create";
      }
    },
    async login(payload: LoginCredential): Promise<void> {
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
        this.msg = error;
      }
    },
    async fetchUser(): Promise<void> {
      const res = await axios.get(`students/${localStorage.getItem("uuid")}`);
      const data = await res.data.data;
      try {
        if (res) {
          this.user = data;
        }
      } catch (error: any) {
        this.msg = error.response.data.message;
      }
    },
    async logout(): Promise<void> {
      localStorage.clear();
      await router.push("/login");
    },
  },
});
