<script setup lang="ts">
import Header from "./components/layouts/_header.vue";
import Footer from "./components/layouts/_footer.vue";
</script>

<template>
  <div class="wrapper container mx-auto px-10 sm:px-0">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>
