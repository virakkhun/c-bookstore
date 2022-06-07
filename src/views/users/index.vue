<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const title = ref("");

title.value = "This is homepage";

onMounted(() => {
  console.log(useRoute().name);
});
</script>

<template>
  <div>
    <h1 class="text-center">{{ title.toUpperCase() }}</h1>
  </div>
</template>
/
