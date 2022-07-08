<script setup lang="ts">
import { HollowDotsSpinner } from "epic-spinners";
import { computed, Ref, ref } from "vue";
import router from "../router";
import { useGlobalMessage } from "../store/useGlobalMessage";
import { useUser } from "../store/users";

interface User {
  username: string;
  email: string;
  password: string;
  image: string;
  department: string;
  telephone: string;
  status: string;
}

const userCredential: Ref<User> = ref({
  email: ref(""),
  username: ref(""),
  password: ref(""),
  image: ref(""),
  department: ref(""),
  telephone: ref(""),
  status: ref(""),
});

const confirm = ref("");
const isNotValid = ref(false);
const isLoading = ref(false);

const main = useGlobalMessage();
const user = useUser();

const handleSubmit = (): void => {
  if (
    userCredential.value.email === "" &&
    userCredential.value.password === "" &&
    confirm.value === ""
  ) {
    main.setError({ msg: "Please fill out the provided fields!", status: 0 });
    main.clearError();
    isNotValid.value = true;
  } else if (userCredential.value.email === "") {
    main.setError({ msg: "Please fill out the email!", status: 0 });
    main.clearError();
    isNotValid.value = true;
  } else if (userCredential.value.password === "") {
    main.setError({ msg: "Please fill out the password!", status: 0 });
    main.clearError();
    isNotValid.value = true;
  } else if (confirm.value === "") {
    main.setError({ msg: "Please fill out the confirm password!", status: 0 });
    main.clearError();
    isNotValid.value = true;
  } else if (userCredential.value.password !== confirm.value) {
    main.setError({ msg: "The password doesn't not match!!", status: 0 });
    main.clearError();
    isNotValid.value = true;
  } else {
    isNotValid.value = false;
    isLoading.value = true;
    // submit form to the api endpoint, call an action from pinia
    let name: string = "";

    if (userCredential.value.email.indexOf("@") !== 1) {
      name = userCredential.value.email.split("@")[0];
    }

    const createUSer: Promise<void> = user.createUser({
      user: {
        username: name,
        email: userCredential.value.email,
        password: userCredential.value.password,
      },
    });

    createUSer.then(() => {
      isLoading.value = false;
      router.push("/");
    });
  }
};

const emailIsValid = computed((): boolean => {
  if (userCredential.value.email === "" && isNotValid.value === true) {
    return true;
  } else {
    return false;
  }
});

const passwordIsValid = computed((): boolean => {
  if (userCredential.value.password === "" && isNotValid.value === true) {
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
  if (userCredential.value.password === confirm.value) {
    return false;
  } else {
    return true;
  }
});
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="text-center mb-6">
      <h1 class="text-2xl mb-4 dark:text-white">What's up</h1>
      <p class="text-gray-600 dark:text-white">
        Register to borrow many books as you wish.
      </p>
    </div>
    <div class="mb-5 flex flex-col">
      <label for="email" class="text-gray-600 dark:text-white">
        Email<span v-if="emailIsValid" class="text-red-500 text-lg">*</span>
      </label>
      <div class="relative">
        <input
          type="email"
          name="email"
          id="email"
          class="border border-blue-500 dark:text-white dark:bg-midDark py-2 pl-2 rounded focus:outline-none w-full"
          :class="emailIsValid ? 'isError' : ''"
          v-model="userCredential.email"
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
      <label for="password" class="text-gray-600 dark:text-white">
        Password
        <span v-if="passwordIsValid" class="text-red-500 text-lg">*</span>
      </label>
      <div class="relative">
        <input
          type="password"
          name="password"
          id="password"
          class="border border-blue-500 dark:text-white dark:bg-midDark py-2 pl-2 rounded focus:outline-none w-full"
          :class="passwordIsValid ? 'isError' : ''"
          v-model="userCredential.password"
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
      <label for="password" class="text-gray-600 dark:text-white">
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
          class="border border-blue-500 dark:text-white dark:bg-midDark py-2 pl-2 rounded focus:outline-none w-full"
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
    <div class="flex justify-center items-center my-5">
      <button
        v-if="!isLoading"
        class="login-btn rounded-md border border-indigo-400 px-5 py-2 hover:bg-indigo-400 hover:text-white transition-all"
      >
        Register
      </button>
      <div v-else class="my-5">
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
