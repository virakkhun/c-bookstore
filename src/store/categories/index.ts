import axios from "axios";
import { defineStore } from "pinia";

const useCategories = defineStore("category", {
  state: () => ({
    categories: [],
  }),
  getters: {
    getCategories(state): string[] {
      return state.categories;
    },
  },
  actions: {
    async fetchCategories() {
      const res = await axios.post("/categories");
      if (res.data) {
        const result = res.data.data;
        const filteresult = result.map((res: any) => res.cat_name);
        this.categories = filteresult;
      } else {
        this.categories.push();
      }
    },
  },
});

export default useCategories;
