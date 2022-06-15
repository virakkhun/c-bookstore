<script setup lang="ts">
import { ref } from "vue";
const isShowMenu = ref(false);
</script>

<template>
  <nav class="w-full bg-white p-6 md:items-center">
    <div class="flex justify-between items-center relative">
      <div>
        <img
          src="https://logodownload.org/wp-content/uploads/2021/10/meta-logo-4.png"
          width="120"
          alt=""
        />
      </div>
      <div class="text-3xl">
        <div class="md:hidden block">
          <ion-icon
            :name="isShowMenu ? 'close' : 'menu'"
            @click="isShowMenu = !isShowMenu"
          ></ion-icon>
        </div>
        <div
          class="modal md:static absolute left-0 md:bg-transparent bg-white w-full md:p-0 p-3 transition-all"
          :class="isShowMenu ? 'block transition-all' : 'md:block hidden'"
        >
          <ul
            class="modal md:flex md:flex-row flex flex-col md:items-center items-start md:gap-10 gap-3"
          >
            <li class="">
              <router-link
                to="/"
                class="text-base hover:text-primary duration-300"
                >Home</router-link
              >
            </li>
            <li class="">
              <router-link
                to="/books"
                class="text-base hover:text-primary duration-300"
                >Book</router-link
              >
            </li>
            <li class="">
              <router-link
                to="#"
                class="text-base hover:text-primary duration-300"
                >About Us</router-link
              >
            </li>
            <li class="">
              <router-link
                to="login"
                class="text-base hover:text-primary duration-300"
                >Contact US</router-link
              >
            </li>
            <li class="">
              <router-link
                to="/login"
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
