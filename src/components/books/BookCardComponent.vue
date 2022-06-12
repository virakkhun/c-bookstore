<script setup lang="ts">
import { ref } from "vue";
defineProps<{
  title: string;
  view?: number;
  reader?: number;
  id?: number;
  image: string;
}>();
const path = "http://localhost:8000";
const isShowBtn = ref(false);
</script>

<template>
  <div>
    <div class="_wrapper border bg-white/50">
      <div
        class="w-full h-52 relative cursor-pointer"
        @mouseover="isShowBtn = true"
        @mouseleave="isShowBtn = false"
      >
        <img
          :src="`${path}/${image}`"
          alt="book"
          class="w-full h-full object-cover"
        />
        <Transition name="fadeOpacity">
          <div
            v-if="isShowBtn"
            class="modal absolute w-full h-full bg-black/70 flex justify-center items-center md:px-3 px-2 top-0 left-0"
          >
            <div class="flex flex-col items-center gap-3">
              <button
                class="rounded-full px-3 py-1 bg-midDark text-white font-semibold"
              >
                Detail
              </button>
              <button
                class="rounded-full px-3 py-1 bg-midDark text-white font-semibold flex items-center gap-2"
              >
                <span>Borrow</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Transition>
      </div>
      <div class="md:px-4 px-2 flex flex-col gap-2 my-2">
        <p class="text-midDark font-semibold md:my-2 my-1">{{ title }}</p>
        <div class="flex justify-between items-center md:my-3 my-2">
          <div class="flex items-center gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 fill-midPrimary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fill-rule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div>
              <span>{{ view }}</span>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 fill-midPrimary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
                />
              </svg>
            </div>
            <div>
              <span>{{ reader }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
