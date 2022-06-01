<script setup lang="ts">
import { ref } from "vue";

const title = ref("This is header");
</script>

<template>
  <div>
    <h1 class="text-center">{{ title.toUpperCase() }}</h1>
  </div>
</template>
