import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Client from "../views/Client.vue";
import UnsupportDevice from "../views/UnsupportDevice.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/client",
      name: "Client",
      component: Client,
    },
    {
      path: "/unsupportdevice",
      name: "UnsupportDevice",
      component: UnsupportDevice,
    },
  ],
});

export default router;
