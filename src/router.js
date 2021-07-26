import { createRouter, createWebHistory } from "vue-router";
import Profile from "@/pages/Profile.vue";
import Contact from "@/pages/Contact.vue";

const routes = [
  { path: "/", name: "Profile", component: Profile },
  { path: "/Contact", name: "Contact", component: Contact }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
