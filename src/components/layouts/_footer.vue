<script setup lang="ts">
import { ref } from "vue";

const title = ref("This is footer");
</script>

<template>
  <footer class="w-full bg-white bottom-0 p-6 md:items-center">
    <div class="md:px-5 px-5 container mx-auto">
      <div class="flex items-center justify-center">
        <div class="flex items-center">
          <img src="https://logodownload.org/wp-content/uploads/2021/10/meta-logo-4.png" class="mr-5" width="70" alt="">
          <p class="text-center text-sm items-center">Ⓒ 2022 CopyRight By Young Dev</p>
        </div>
      </div>
    </div>
  </footer>
</template>
