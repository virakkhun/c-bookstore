<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useUser } from "../../store/users";
import { useDark, useToggle } from "@vueuse/core";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const isShowMenu = ref<boolean>(false);
const isShowLogin = ref<boolean>(false);
const loginPop = ref<HTMLElement | null>(null);

const user = useUser();

const isDark = useDark();
const toggleDarkMode = useToggle(isDark);

onMounted(() => {
  const loginPopup = loginPop.value;
  document.body.addEventListener("click", (e: any) => {
    if (!loginPopup?.contains(e.target)) {
      isShowLogin.value = false;
    }
  });
  user.fetchUser();
});

const isAuth = computed((): boolean => {
  if (localStorage.getItem("token")) {
    return true;
  } else {
    return false;
  }
});

const userLogout = (): void => {
  user.logout();
};

const getRandomImage = computed((): string => {
  return user.getUserName
    ? `https://avatars.dicebear.com/api/micah/${user.getUserName}.svg`
    : "https://avatars.dicebear.com/api/micah/seed.svg";
});
</script>

<template>
  <nav
    class="w-full bg-white dark:bg-slate-900 md:px-12 py-2 px-3 md:items-center"
  >
    <div class="flex justify-between items-center relative">
      <router-link to="/">
        <p class="dark:text-white font-semibold">C-Bookstore</p>
      </router-link>
      <div class="bg-white dark:bg-slate-900 flex items-center md:gap-10">
        <Transition name="fadeUpMenu" mode="out-in">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="h-5 w-5 fill-midPrimary dark:fill-white hover:fill-primary dark:hover:fill-slate-500 cursor-pointer transition-all"
            @click="isShowMenu = !isShowMenu"
            v-if="!isShowMenu"
          >
            <path
              d="M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"
            />
          </svg>
          <ul
            class="modal md:flex md:flex-row flex flex-col md:static absolute left-0 top-0 rounded-md bg-white dark:bg-slate-900 dark:text-white md:w-auto w-full md:px-0 px-4 py-2 justify-end items-center md:gap-10 gap-4"
            v-else
          >
            <li class="">
              <router-link
                to="/"
                class="text-base hover:text-primary dark:hover:text-midPrimary duration-300"
                >Home</router-link
              >
            </li>
            <li class="">
              <router-link
                to="/books"
                class="text-base hover:text-primary dark:hover:text-midPrimary duration-300"
                >Libray</router-link
              >
            </li>
            <li class="">
              <router-link
                to="/about"
                class="text-base hover:text-primary dark:hover:text-midPrimary duration-300"
                >About Us</router-link
              >
            </li>
            <li class="">
              <router-link
                to="/payment"
                class="text-base hover:text-primary dark:hover:text-midPrimary duration-300"
                >Payment</router-link
              >
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 cursor-pointer fill-midPrimary dark:fill-white"
                viewBox="0 0 320 512"
                @click="isShowMenu = false"
              >
                <path
                  d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                />
              </svg>
            </li>
          </ul>
        </Transition>
      </div>
      <div
        class="cursor-pointer rounded-full border border-midPrimary dark:border-white dark:text-white flex justify-center items-end p-1 relative"
        @click="isShowLogin = !isShowLogin"
        ref="loginPop"
      >
        <img
          :src="getRandomImage"
          alt="avattarr"
          class="md:w-10 w-6 rounded-full"
        />
        <Transition name="pop-up-setting">
          <div
            class="z-10 absolute md:top-12 top-10 md:text-base text-sm right-0 rounded shadow-md bg-white dark:bg-slate-900 md:w-36 w-24 md:pl-3 pl-1 md:py-4 py-2 border"
            v-if="isShowLogin"
          >
            <div v-if="!isAuth" class="flex flex-col gap-3">
              <div
                class="flex items-center gap-2 hover:text-primary dark:hover:text-midPrimary"
                @click="toggleDarkMode()"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p>{{ isDark ? t("light") : t("dark") }}</p>
              </div>
              <div
                class="flex items-center gap-2 hover:text-primary dark:hover:text-midPrimary"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="md:h-5 md:w-5 h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <router-link to="/login">{{ t("login") }}</router-link>
              </div>
            </div>
            <div v-else>
              <div
                class="flex items-center gap-2 hover:text-primary dark:hover:text-midPrimary"
                :class="isAuth ? 'mt-0' : 'md:mt-4 mt-2'"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="md:h-5 md:w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <router-link to="/profile">Profile</router-link>
              </div>
              <div
                class="flex items-center gap-2 md:mt-4 mt-2 hover:text-danger"
                @click="userLogout"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="md:h-5 md:w-5 h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <p>Logout</p>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </nav>
</template>
