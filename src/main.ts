import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import router from "./router";
import App from "./App.vue";
import "./index.css";
import "./http/axios";
import "../src/assets/styles/index.css";
import en from "./locales/en.json";
import kh from "./locales/kh.json";

const i18n = createI18n({
  lecacy: false,
  locale: "kh",
  fallbackLocale: "en",
  messages: {
    en: en,
    kh: kh,
  },
});
const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(i18n);
app.mount("#app");
