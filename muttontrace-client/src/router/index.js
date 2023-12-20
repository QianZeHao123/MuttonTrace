import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Client from "../views/Client.vue";
import UnsupportDevice from "../views/UnsupportDevice.vue";
import InfoPage from "../views/InfoPage.vue";
import SettingPage from "../views/SettingPage.vue";

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
    {
      path: "/infopage",
      name: "InfoPage",
      component: InfoPage,
    },
    {
      path: "/settingpage",
      name: "SettingPage",
      component: SettingPage,
    },
  ],
});

export default router;
