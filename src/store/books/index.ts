import { defineStore } from "pinia";
import axios from "axios";

interface BookDetail {
  author: object;
  category: object;
  title: string;
  description: string;
  id: number;
  image: string;
  isbn: string;
  location: string;
  release_date: string;
  status: number;
}

interface Books {
  books: BookDetail[];
}

export const useBooks = defineStore("book", {
  state: () => {
    return {
      books: [],
    } as Books;
  },
  getters: {
    getAllBooks(state: Books) {
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
