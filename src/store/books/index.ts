import { defineStore } from "pinia";
import axios from "axios";
const useBooks = defineStore("book", {
  state: () => {
    return {
      books: [],
    };
  },
  getters: {
    getAllBooks(state: any): any[] {
      return state.books;
    },
  },
  actions: {
    async fetchBooks() {
      const res = await axios.post("/books");
      if (res.data) {
        this.books = res.data.data;
      }
    },
  },
});

export default useBooks;
