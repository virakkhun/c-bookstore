<script setup lang="ts">
import MessageComponent from "../MessageComponent.vue";
import { useGlobalMessage } from "../../store/useGlobalMessage";
import Header from "./_header.vue";

const message = useGlobalMessage();
</script>
<template>
  <Header />
  <div
    class="w-full h-screen flex justify-center items-center bg-no-repeat bg-cover relative px-4 lg:px-0"
  >
    <div
      class="lg:w-3/4 bg-white dark:bg-midDark rounded-md flex justify-between items-center relative lg:h-4/5 h-4/6 md:mx-5"
    >
      <div
        class="left-side h-full md:w-1/2 px-5 md:block hidden bg-indigo-400 dark:bg-transparent rounded-tl-md rounded-bl-md"
      >
        <img
          src="../../assets/images/left.svg"
          class="object-fill w-full h-full"
          alt="left-images"
        />
      </div>
      <div class="right-side md:w-1/2 px-5">
        <router-view></router-view>
      </div>
    </div>
    <Transition name="error">
      <MessageComponent :msg="message.getMsg" :stat="message.getStatus" />
    </Transition>
  </div>
</template>
