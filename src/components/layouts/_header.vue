<script setup lang="ts">
import { ref } from "vue";

const title = ref("This is header");
const IconName = ref("menu");
const toggleHam = (i: string) => {
  i === "menu" ? (IconName.value = "close") : (IconName.value = "menu");
};
</script>

<template>
  <nav class="w-full bg-white p-6 md:items-center">
    <div class="md:px-5 px-5 container mx-auto">
      <div class="flex">
        <div class="flex-auto z-50">
          <img
            src="https://logodownload.org/wp-content/uploads/2021/10/meta-logo-4.png"
            width="120"
            alt=""
          />
        </div>
        <div class="flex md:hidden text-3xl z-50">
          <ion-icon :name="IconName" @click="toggleHam(IconName)"></ion-icon>
        </div>
        <div class="md:flex-auto">
          <ul
            class="md:flex md:items-center z-10 justify-end gap-10 md:static absolute w-full md:w-auto md:py-0 py-7 md:pl-0 pl-7 bg-white left-0 md:opacity-100"
            :class="IconName === 'menu' ? 'opacity-0' : 'opacity-100'"
          >
            <li class="mx-4 md:mx-0 md:my-0 my-6">
              <router-link
                to="/"
                class="text-base hover:text-primary duration-300"
                >Home</router-link
              >
            </li>
            <li class="mx-4 md:mx md:my-0 my-6">
              <router-link
                to="/books"
                class="text-base hover:text-primary duration-300"
                >Book</router-link
              >
            </li>
            <li class="mx-4 md:mx-0 md:my-0 my-6">
              <router-link
                to="login_register"
                class="text-base hover:text-primary duration-300"
                >About Us</router-link
              >
            </li>
            <li class="mx-4 md:mx-0 md:my-0 my-6">
              <router-link
                to="login_register"
                class="text-base hover:text-primary duration-300"
                >Contact US</router-link
              >
            </li>
            <li class="mx-4 md:mx-0 md:my-0 my-6">
              <router-link
                to="/login_register"
                class="text-base bg-midPrimary hover:bg-primary hover:text-white rounded-md md:px-7 px-2 md:py-2 py-1 duration-300"
              >
                Login
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
