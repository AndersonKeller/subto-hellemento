<script setup lang="ts">
import useResponsiveStore from "~/stores/responsive.store";
import MobileMenu from "./MobileMenu.vue";
import { ref } from "vue";

const responsive = ref();
if (import.meta.client) {
  useResponsiveStore().setResponsive(window.innerWidth);
  window.addEventListener("resize", () => {
    useResponsiveStore().setResponsive(window.innerWidth);
    responsive.value = useResponsiveStore().getResponsive < 662;
  });
}
responsive.value = useResponsiveStore().getResponsive < 662;
const menuItems = [
  { name: "Home", link: "/" },
  { name: "Ingressos", link: "/tickets" },
];
</script>
<template>
  <header>
    <div class="container">
      <NuxtImg src="/logo.png" />
      <nav v-if="!responsive">
        <router-link v-for="item in menuItems" :to="item.link">{{ item.name }}</router-link>
      </nav>
      <div class="responsive" v-else>
        <MobileMenu :menuuitems="menuItems" />
      </div>
    </div>
  </header>
</template>
<style scoped>
header {
  padding: 24px;
  background-color: var(--color-secondary);
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* flex-direction: column; */
}
header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.router-link-active {
  background-color: var(--color-gray-500);
  /* color: var(--color-primary); */
  text-decoration: underline;
}
header img {
  width: 128px;
}
header nav {
  display: flex;
  gap: 8px;
  padding: 6px 0;
}
header nav a {
  padding: 6px 12px;
  border-radius: 6px;
  background-color: var(--color-primary);
}
header p,
header a {
  color: var(--color-white);
}
@media (max-width: 512px) {
  header .container {
    /* flex-direction: column; */
  }
}
</style>
