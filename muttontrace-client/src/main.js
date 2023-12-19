// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'
// import { createPinia } from "pinia";

// createApp(App).mount('#app')

import { createApp } from "vue";
import { createPinia } from "pinia";

import "./style.css";
import App from "./App.vue";
import router from "./router/index";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
