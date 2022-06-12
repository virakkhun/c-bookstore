<script setup lang="ts">
import Header from "./_header.vue";
import Footer from "./_footer.vue";
</script>
<template>
  <div>
    <Header />
    <div class="lg:px-12 md:px-6 px-3">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>
