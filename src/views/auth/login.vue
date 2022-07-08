<script setup lang="ts">
import LoginComponent from "../../components/LoginComponent.vue";
</script>
<template>
  <div class="dark:bg-midDark">
    <LoginComponent />
  </div>
  <div class="w-full flex justify-center md:mt-5 mt-2 items-center gap-1">
    <p class="text-sm dark:text-white">Don't have an account?</p>
    <span class="text-midPrimary dark:text-dark">
      <router-link to="/register">Register</router-link>
    </span>
  </div>
</template>
