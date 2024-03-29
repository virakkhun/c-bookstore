<script setup lang="ts">
import { HollowDotsSpinner } from "epic-spinners";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { useGlobalMessage } from "../store/useGlobalMessage";
import { useUser } from "../store/users";

const { t } = useI18n();

const email = ref("");
const password = ref("");
const isNotValid = ref(false);

const { setError, clearError } = useGlobalMessage();
const { login } = useUser();

const router = useRouter();

const handleSubmit = (): void => {
  if (email.value === "" && password.value === "") {
    setError({ msg: "Please input your email and password.", status: 0 });
    clearError();
    isNotValid.value = true;
  } else if (email.value === "") {
    setError({ msg: "Please input your email.", status: 0 });
    clearError();
    isNotValid.value = true;
  } else if (password.value === "") {
    setError({ msg: "Please input your password.", status: 0 });
    clearError();
    isNotValid.value = true;
  } else if (password.value.length < 6) {
    setError({
      msg: "Password must be at least 6 characters long.",
      status: 0,
    });
    clearError();
  } else {
    isNotValid.value = false;

    // submit the form to the api endpoint
    login({
      email: email.value,
      password: password.value,
    }).then((): void => {
      setError({
        msg: "You are login success fully!",
        status: 1,
      });
      router.push("/books");
    });
  }
};

const blurPassword = (): void => {
  if (password.value.length < 6) {
    setError({
      msg: "Password must be at least 6 characters long.",
      status: 0,
    });
    clearError();
    isNotValid.value = true;
    return;
  }
};

const emailIsValid = computed((): boolean => {
  if (email.value === "" && isNotValid.value === true) {
    return true;
  } else {
    return false;
  }
});

const passwordIsValid = computed((): boolean => {
  if (password.value === "" && isNotValid.value === true) {
    return true;
  } else {
    return false;
  }
});
</script>

<template>
  <form @submit.prevent="handleSubmit" class="relative">
    <div class="text-center mb-6">
      <h1 class="text-2xl mb-4 dark:text-white">{{ t("hello-again") }}</h1>
      <p class="text-gray-600 dark:text-white">
        Login to borrow many books as you wish.
      </p>
    </div>
    <div class="mb-5 flex flex-col">
      <label for="email" class="text-gray-600 dark:text-white">
        {{ t("email") }}
        <span v-if="emailIsValid" class="text-red-500 text-lg">*</span>
      </label>
      <div class="relative">
        <input
          type="email"
          name="email"
          id="email"
          class="border border-blue-500 dark:bg-midDark dark:text-white py-2 pl-2 rounded focus:outline-none w-full"
          :class="emailIsValid ? 'isError' : ''"
          v-model="email"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 absolute top-2 right-2 dark:stroke-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
          />
        </svg>
      </div>
    </div>
    <div class="mb-3 flex flex-col w-full">
      <label for="password" class="text-gray-600 dark:text-white">
        {{ t("password") }}
        <span v-if="passwordIsValid" class="text-red-500 text-lg">*</span>
      </label>
      <div class="relative">
        <input
          type="password"
          name="password"
          id="password"
          class="border border-blue-500 dark:bg-midDark dark:text-white py-2 pl-2 rounded focus:outline-none w-full"
          :class="passwordIsValid ? 'isError' : ''"
          v-model="password"
          @blur="blurPassword"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 absolute top-2 right-2 dark:stroke-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
          />
        </svg>
      </div>
    </div>
    <div class="mb-5 flex justify-between">
      <div class="flex items-center gap-2">
        <label for="rmb" class="text-gray-600 dark:text-white">{{
          t("remember")
        }}</label>
        <input
          type="checkbox"
          name="remember_me"
          id="rmb"
          class="h-4 w-4 checked:bg-indigo-400 rounded-lg"
        />
      </div>
      <div>
        <p class="text-indigo-600 dark:text-secondary cursor-pointer">
          {{ `${t("forgot")}?` }}
        </p>
      </div>
    </div>
    <hr />
    <div class="flex justify-center items-center mt-5">
      <button
        class="login-btn rounded-md border border-indigo-600 dark:text-white px-5 py-2 focus:outline-none hover:bg-indigo-600 hover:text-white dark:hover:text-midDark dark:hover:bg-white transition-all flex"
      >
        {{ t("login") }}
      </button>
      <div class="px-5 py-2 hidden">
        <hollow-dots-spinner
          :animation-duration="1000"
          :dot-size="10"
          :dots-num="3"
          color="#6b21a8"
        />
      </div>
    </div>
  </form>
</template>
