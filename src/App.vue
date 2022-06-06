<script setup lang="ts">
import Header from "./components/layouts/_header.vue";
import Footer from "./components/layouts/_footer.vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <div class="wrapper lg:px-0">
    <Header v-if="route.name !== 'login_register'" />
    <router-view></router-view>
    <Footer v-if="route.name !== 'login_register'" />
  </div>
</template>
