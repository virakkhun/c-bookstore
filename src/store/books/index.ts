import { defineStore } from "pinia";
import axios from "axios";
export const useBooks = defineStore("book", {
  state: () => {
    return {
      books: [],
    };
  },
  getters: {
    getAllBooks(state: any) {
      return state.books;
    },
  },
  actions: {
    async fetchBooks(): Promise<void> {
      const res = await axios.get("/books");
      if (res.data) {
        this.books = res.data.data;
      }
    },
  },
});
