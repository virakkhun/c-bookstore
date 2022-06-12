<script setup lang="ts">
import Header from "./components/layouts/_header.vue";
import Footer from "./components/layouts/_footer.vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <Header v-if="route.name !== 'login_register'" />
  <div class="wrapper lg:px-0">
    <router-view></router-view>
  </div>
  <Footer v-if="route.name !== 'login_register'" />
</template>
