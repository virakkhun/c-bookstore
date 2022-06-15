<script setup lang="ts">
import { computed } from "vue";
import { useUser } from "../../store/users";

const user = useUser();
const getRandomImage = computed((): string => {
  return user.getUserName
    ? `https://avatars.dicebear.com/api/avataaars/${user.getUserName}.svg?mood[]=happy`
    : "https://avatars.dicebear.com/api/avataaars/seed.svg??mood[]=happy";
});
const _getUser: any = computed((): object => {
  return user.getUser;
});
</script>

<template>
  <div class="md:mt-10 mt-5 md:px-0 px-2">
    <p class="text-center md:my-10 my-3 text-2xl text-primary">Profile</p>
    <div
      class="md:my-5 mt-2.5 flex flex-col md:gap-4 gap-2 justify-center items-center"
    >
      <div
        class="md:w-40 md:h-40 w-28 h-28 rounded-full border border-midPrimary shadow-md relative flex items-center justify-center"
      >
        <img
          :src="_getUser.image ? _getUser.image : getRandomImage"
          class="object-cover rounded-full"
        />
      </div>
      <p class="text-center text-midPrimary">@{{ _getUser.username }}</p>
    </div>
    <hr class="bg-midPrimary h-0.5 md:w-1/2 w-full md:mx-auto" />
    <div
      class="md:my-5 my-2.5 flex justify-evenly items-center gap-4 md:w-1/2 w-full mx-auto"
    >
      <div>
        <p class="text-grau-500 md:mb-3">JOINED ON</p>
        <p class="text-gray-400">
          {{ _getUser.created_at ? _getUser.created_at.slice(0, 10) : "Date" }}
        </p>
      </div>
      <div>
        <p class="text-grau-500 md:mb-3">Status</p>
        <p :class="_getUser.status === 1 ? 'text-info' : 'text-gray-400'">
          {{ _getUser.status === 1 ? "Active" : "Offline" }}
        </p>
      </div>
    </div>
    <hr class="bg-midPrimary h-0.5 md:w-1/2 w-full md:mx-auto" />
    <div
      class="text-lg md:my-10 my-5 mx-auto md:w-1/2 w-full md:px-8 px-4 grid md:grid-cols-2 grid-cols-1 gap-3"
    >
      <div
        class="w-full bg-white/50 border h-40 flex flex-col items-center justify-center hover:bg-midPrimary hover:text-white cursor-pointer transition-all rounded-md"
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
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <p>Information</p>
      </div>
      <div
        class="w-full bg-white/50 border h-40 flex flex-col items-center justify-center hover:bg-midPrimary hover:text-white cursor-pointer transition-all rounded-md"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
          </svg>
        </div>
        <p>History</p>
      </div>
      <div
        class="w-full bg-white/50 border h-40 flex flex-col items-center justify-center hover:bg-midPrimary hover:text-white cursor-pointer transition-all rounded-md"
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
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <p>Accounts Setting</p>
      </div>
      <div
        class="w-full bg-white/50 border h-40 flex flex-col items-center justify-center hover:bg-midPrimary hover:text-white cursor-pointer transition-all rounded-md"
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
</template>
