<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useUser } from "../../store/users";
const isShowMenu = ref(false);
const isShowLogin = ref(false);
const loginPop = ref();

const user = useUser();

onMounted(() => {
  const loginPopup = loginPop.value;
  document.body.addEventListener("click", (e) => {
    if (!loginPopup.contains(e.target)) {
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
  <nav class="w-full bg-white p-6 md:items-center">
    <div class="flex justify-between items-center relative">
      <div>
        <img
          src="https://logodownload.org/wp-content/uploads/2021/10/meta-logo-4.png"
          width="120"
          alt=""
        />
      </div>
      <div class="flex gap-3">
        <div class="md:hidden">
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
            <div
              class="cursor-pointer rounded-full border border-midPrimary flex justify-center items-end p-1 relative"
              @click="isShowLogin = !isShowLogin"
              ref="loginPop"
            >
              <img :src="getRandomImage" alt="avattarr" class="w-10" />
              <Transition name="pop-up-setting">
                <div
                  class="absolute top-14 right-5 rounded shadow-md bg-white w-36 pl-3 md:py-4 py-2 border"
                  v-if="isShowLogin"
                >
                  <div
                    class="flex items-center gap-2 hover:text-primary"
                    v-if="!isAuth"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
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
                    <router-link to="/login">Login</router-link>
                  </div>
                  <div v-else>
                    <div
                      class="flex items-center gap-2 hover:text-primary"
                      :class="isAuth ? 'mt-0' : 'md:mt-4 mt-2'"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
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
                          class="h-5 w-5"
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
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
