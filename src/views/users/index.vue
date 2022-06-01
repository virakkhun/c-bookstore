<script setup lang="ts">
import { ref } from "vue";

const title = ref("This is user home page");
</script>

<template>
  <div>
    <h1 class="text-center">{{ title }}</h1>
  </div>
</template>
