<script setup lang="ts">
import { ref } from "vue";

const title = ref("This is user edit page");
</script>

<template>
  <div>
    <h1 class="text-center">{{ title }}</h1>
  </div>
</template>
