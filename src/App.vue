<script setup lang="ts">
import Header from "./components/layouts/_header.vue";
import Footer from "./components/layouts/_footer.vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <div>
    <Header v-if="route.name !== 'login_register'" />
    <div class="wrapper lg:px-10 md:px-5 px-2">
      <router-view></router-view>
    </div>
    <Footer v-if="route.name !== 'login_register'" />
  </div>
</template>
