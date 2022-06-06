<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ref } from "vue";
import LoginComponent from "../../components/LoginComponent.vue";
import RegisterComponent from "../../components/RegisterComponent.vue";
import MessageComponent from "../../components/MessageComponent.vue";
import useGlobaleError from "../../store/useGlobalError";
const hideRegister = ref(true);
const main = useGlobaleError();

const { getMsg, getStatus } = storeToRefs(main);

const toggleTab = () => {
  hideRegister.value = !hideRegister.value;
};
</script>

<template>
  <div
    class="w-full h-screen flex justify-center items-center bg-no-repeat bg-cover relative px-4 lg:px-0"
    style="
      background-image: url('https://images.unsplash.com/photo-1652449823136-b279fbe5dfd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80');
    "
  >
    <div
      class="lg:w-3/4 bg-white rounded-md flex justify-between items-center relative lg:h-3/4 h-4/6 md:mx-5"
    >
      <div
        class="left-side h-full md:w-1/2 px-5 md:block hidden bg-indigo-400 rounded-tl-md rounded-bl-md"
      >
        <img
          src="../../assets/images/left.svg"
          class="object-fill w-full h-full"
          alt="left-images"
        />
      </div>
      <div class="right-side md:w-1/2 px-5">
        <Transition name="fade" mode="out-in">
          <LoginComponent v-if="hideRegister" />
          <RegisterComponent v-else />
        </Transition>
      </div>
      <div class="absolute bottom-3 w-full flex justify-center">
        <p class="text-sm">
          {{
            hideRegister ? `Don't have an account?` : "Already have an account?"
          }}
          <span class="text-indigo-600 cursor-pointer" @click="toggleTab">
            {{ hideRegister ? "Register Now!" : "Login" }}
          </span>
        </p>
      </div>
    </div>
    <Transition name="error">
      <MessageComponent :msg="getMsg" :stat="getStatus" />
    </Transition>
  </div>
</template>
