<script setup lang="ts">
import { onMounted, ref } from "vue";

defineProps<{
  items: string[];
}>();

const selected = ref("Sokchea");
const isShowList = ref(false);
const filter = ref();

onMounted(() => {
  const filterDom = filter.value;
  document.body.addEventListener("click", (e) => {
    if (!filterDom.contains(e.target)) {
      isShowList.value = false;
    }
  });
});
</script>

<template>
  <div>
    <div
      class="flex justify-between items-center relative bg-white text-midDark py-3 w-full hover:cursor-pointer hover:bg-gray-100"
      @click="isShowList = !isShowList"
      ref="filter"
    >
      <p class="px-2">{{ selected }}</p>
      <div class="px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 transition-all"
          :class="isShowList ? '-rotate-180' : 'rotate-0'"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <Transition name="fadeInFilter">
        <div
          class="z-10 absolute w-full top-14 bg-white shadow-lg px-2 py-3"
          v-if="isShowList"
        >
          <div v-for="(item, i) in items" :key="i">
            <p
              @click="(selected = item), $emit('select', item)"
              class="py-2 px-1 w-full hover:bg-midPrimary hover:text-secondary cursor-pointer rounded-md transition-all hover:-translate-y-1"
            >
              {{ item }}
            </p>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
