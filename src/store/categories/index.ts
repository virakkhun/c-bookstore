import axios from "axios";
import { defineStore } from "pinia";

export const useCategories = defineStore("category", {
  state: () => ({
    categories: [],
  }),
  getters: {
    getCategories(state): string[] {
      return state.categories;
    },
  },
  actions: {
    async fetchCategories(): Promise<void> {
      const res = await axios.get("/categories");
      if (res.data) {
        const result = await res.data.data;
        const filteresult = await result.map((res: any) => res.cat_name);
        this.categories = filteresult;
      } else {
        this.categories.push();
      }
    },
  },
});
