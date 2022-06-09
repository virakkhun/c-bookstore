<script setup lang="ts">
import { computed, ref } from "vue";
import useGlobalError from "../store/useGlobalError";
import useUser from "../store/useUsers";

const email = ref("");
const password = ref("");
const confirm = ref("");
const isNotValid = ref(false);

const main = useGlobalError();
const user = useUser();

const handleSubmit = (): void => {
  if (email.value === "" && password.value === "" && confirm.value === "") {
    main.setError({ msg: "Please fill out the provided fields!", status: 0 });
    main.clearError();
    isNotValid.value = true;
  } else if (email.value === "") {
    main.setError({ msg: "Please fill out the email!", status: 0 });
    main.clearError();
    isNotValid.value = true;
  } else if (password.value === "") {
    main.setError({ msg: "Please fill out the password!", status: 0 });
    main.clearError();
    isNotValid.value = true;
  } else if (confirm.value === "") {
    main.setError({ msg: "Please fill out the confirm password!", status: 0 });
    main.clearError();
    isNotValid.value = true;
  } else if (password.value !== confirm.value) {
    main.setError({ msg: "The password doesn't not match!!", status: 0 });
    main.clearError();
    isNotValid.value = true;
  } else {
    isNotValid.value = false;
    // submit form to the api endpoint, call an action from pinia
    let username = "";

    if (email.value.indexOf("@") !== 1) {
      username = email.value.split("@")[0];
    }

    const createUSer = user.createUser({
      username: username,
      email: email.value,
      password: password.value,
      image: "",
      department: "",
      telephone: "",
      status: "",
    });
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

const confirmIsValid = computed((): boolean => {
  if (confirm.value === "" && isNotValid.value === true) {
    return true;
  } else {
    return false;
  }
});

const isMatched = computed((): boolean => {
  if (password.value === confirm.value) {
    return false;
  } else {
    return true;
  }
});
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="text-center mb-6">
      <h1 class="text-2xl mb-4">What's up</h1>
      <p class="text-gray-600">Register to borrow many books as you wish.</p>
    </div>
    <div class="mb-5 flex flex-col">
      <label for="email" class="text-gray-600">
        Email<span v-if="emailIsValid" class="text-red-500 text-lg">*</span>
      </label>
      <div class="relative">
        <input
          type="email"
          name="email"
          id="email"
          class="border border-blue-500 py-2 pl-2 rounded focus:outline-none w-full"
          :class="emailIsValid ? 'isError' : ''"
          v-model="email"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 absolute top-2 right-2"
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
    <div class="mb-5 flex flex-col w-full">
      <label for="password" class="text-gray-600">
        Password
        <span v-if="passwordIsValid" class="text-red-500 text-lg">*</span>
      </label>
      <div class="relative">
        <input
          type="password"
          name="password"
          id="password"
          class="border border-blue-500 py-2 pl-2 rounded focus:outline-none w-full"
          :class="passwordIsValid ? 'isError' : ''"
          v-model="password"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 absolute top-2 right-2"
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
    <div class="mb-5 flex flex-col w-full">
      <label for="password" class="text-gray-600">
        Confirm Password
        <span v-if="confirmIsValid || isMatched" class="text-red-500 text-lg"
          >*</span
        >
      </label>
      <div class="relative">
        <input
          type="password"
          name="confirm"
          id="confrim"
          class="border border-blue-500 py-2 pl-2 rounded focus:outline-none w-full"
          :class="confirmIsValid || isMatched ? 'isError' : ''"
          v-model="confirm"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 absolute top-2 right-2"
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
    <hr />
    <div class="flex justify-center items-center mt-5">
      <button
        class="login-btn rounded-md border border-indigo-400 px-5 py-2 hover:bg-indigo-400 hover:text-white transition-all"
      >
        Register
      </button>
    </div>
  </form>
</template>
