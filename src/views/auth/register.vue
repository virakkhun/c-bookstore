<script setup lang="ts">
import RegisterComponent from "../../components/RegisterComponent.vue";
</script>

<template>
  <div>
    <RegisterComponent />
  </div>
  <div class="w-full flex justify-center md:mt-5 mt-2 items-center gap-1">
    <p class="text-sm">Already have an account?</p>
    <span class="text-midPrimary">
      <router-link to="/login">Login</router-link>
    </span>
  </div>
</template>
