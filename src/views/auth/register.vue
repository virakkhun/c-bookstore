<script setup lang="ts">
import { useI18n } from "vue-i18n";
import RegisterComponent from "../../components/RegisterComponent.vue";
const { t } = useI18n();
</script>

<template>
  <div>
    <RegisterComponent />
  </div>
  <div class="w-full flex justify-center md:mt-5 mt-2 items-center gap-1">
    <p class="text-sm">Already have an account?</p>
    <span class="text-midPrimary">
      <router-link to="/login">{{ t("login") }}</router-link>
    </span>
  </div>
</template>
