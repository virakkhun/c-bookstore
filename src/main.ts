import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";
import "./index.css";
import "./http/axios";
import "../src/assets/styles/index.css";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");
