<script setup lang="ts">
import { onMounted, ref } from "vue";
import BookCardComponent from "../../components/books/BookCardComponent.vue";
import { useBooks } from "../../store/books";
import { useCategories } from "../../store/categories";
import FilterComponent from "../../components/FilterComponent.vue";
import { ScalingSquaresSpinner } from "epic-spinners";
import { computed } from "@vue/reactivity";

const string = ref("");
const isLoading = ref(false);

const books = useBooks();
const categories = useCategories();

onMounted(() => {
  books.fetchBooks();
  categories.fetchCategories();
});

const category = computed((): string[] => {
  return categories.getCategories;
});

const _books = computed(() => {
  return books.getAllBooks;
});
</script>

<template>
  <div>
    <div class="flex justify-center items-center md:mt-16 mt-8 w-full relative">
      <div class="md:w-1/2 w-3/4">
        <div class="glitch">
          <input
            type="text"
            v-model="string"
            class="md:py-3 md:px-2 py-2 px-1 border border-midPrimary shadow-md text-primary w-full focus:shadow-primary focus:shadow-md outline-none"
          />
        </div>
        <div class="text-slate-800 text-sm text-center md:mt-8 mt-4">
          <p class="">Wait what you are just jumped right in</p>
          <p class="text-primary">@ Meta Book Center.</p>
          <p>Start finding the book you like here.</p>
        </div>
      </div>
      <div
        class="md:w-40 w-32 absolute lg:right-16 lg:-bottom-5 md:right-8 -z-10 right-3 book_1"
      >
        <img src="../../assets/images/book-lover-1.svg" alt="" />
      </div>
      <div
        class="md:w-56 w-32 absolute lg:left-20 lg:-top-20 md:left-0 left-0 -z-10 -top-10 book_2"
      >
        <img src="../../assets/images/Bibliophile-bro.svg" alt="" />
      </div>
    </div>
    <div class="mx-auto w-1/2 md:mt-16 mt-8">
      <FilterComponent :items="category" />
    </div>
    <div class="product-wrapper md:my-16 my-8">
      <div v-if="isLoading" class="flex justify-center items-center">
        <div>
          <scaling-squares-spinner
            :animation-duration="1500"
            :size="65"
            color="#ff1d5e"
          />
          <p class="mt-5">Loading...</p>
        </div>
      </div>
      <div class="grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-2">
        <div v-for="(book, id) in _books" :key="id">
          <BookCardComponent
            :id="id"
            :title="book.title"
            :view="book.view"
            :reader="book.reader"
            :image="book.image"
          />
        </div>
      </div>
    </div>
  </div>
</template>
