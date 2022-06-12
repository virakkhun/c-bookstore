<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const title = ref("");

title.value = "This is homepage";

onMounted(() => {
  console.log(useRoute().name);
});
</script>

<template>
<div>
  <div class="w-full h-screen md:flex md:flex-row flex flex-col justify-between items-center">
    <div class="md:w-1/2 w-full bg-midPrimary h-full flex justify-center items-center">
      <div class="w-full p-10">
        <h3 class="text-xl">Just Learn</h3>
        <h1 class="text-5xl">
          Feel Power
        </h1>
      </div>
    </div>
    <div class="md:w-1/2 w-full">
      <img src="/src/assets/images/reading_book.svg" alt="">
    </div>
  </div>
  <div class="w-full bg-white">
    <div class="p-10">
      <div class="text-center">
        <h1 class="text-3xl">What We Do</h1>
        <p class="w-1/2 mx-auto p-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <div class="mx-auto p-10 items-center">
          <a href="" class="items-center px-7 py-3 bg-midPrimary hover:bg-primary rounded">Browse Book<ion-icon name="chevron-forward"></ion-icon></a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
