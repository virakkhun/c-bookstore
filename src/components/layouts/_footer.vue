<script setup lang="ts">
import { computed } from "vue";

const getCurrentDate = computed(() => {
  const newDate = new Date().toLocaleDateString().toString();
  return newDate.slice(0, 10).replace(/\//g, "-");
});
</script>

<template>
  <footer class="w-full bg-white p-6 md:items-center bottom-0">
    <div class="md:px-5 px-5 container mx-auto">
      <div class="flex items-center justify-center">
        <div class="flex items-center">
          <p class="text-center text-sm items-center text-midDark">
            {{ getCurrentDate }} | Ⓒ CopyRight By Young Dev
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
