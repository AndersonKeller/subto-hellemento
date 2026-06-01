<script setup lang="ts">
import Iconify from "../Iconify.vue";
interface iMenuItem {
  name: string;
  link: string;
}
interface MobileMenuProps {
  menuuitems: iMenuItem[];
}
defineProps<MobileMenuProps>();

const open = ref(false);
const openMenu = (value: boolean) => {
  open.value = value;
};
const route = useRoute();
watch(
  () => route.name,
  () => {
    open.value = false;
  },
);
</script>
<template>
  <Iconify @click="openMenu(!open)" :icon="open ? 'material-symbols:close-rounded' : 'heroicons-outline:menu-alt-3'" />

  <div class="menu_container" v-if="open">
    <div class="wrapper">
      <div class="menu_item" v-for="item in menuuitems">
        <router-link :to="item.link">{{ item.name }}</router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
button {
  background-color: transparent;
  padding-right: 0;
}
button:hover {
  background-color: transparent;
}
svg {
  cursor: pointer;
}
.wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--color-secondary);
  padding-bottom: 41px;
}

.menu_container {
  position: absolute;
  top: 103px;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
}
.menu_item {
}
.switcher {
  display: flex;
  align-items: flex-end;
  gap: 16px;
}
.menu_container a,
.switcher a {
  width: 100%;
  padding: 21px 20px 20px 12px;
  color: var(--color-white);
  text-align: left;
  border: none;
  font-size: 1rem;
  transition: all 0.3s;
  display: block;
  padding-left: 36px;
}
.menu_container a:hover {
  transform: scale(1.03);
}
.menu_container .account_link {
  background-color: var(--color-tertiary-50);
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  border-radius: 43px;
  padding: 8px 12px;
  margin-top: 16px;
  width: max-content;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
}

.menu_container .account_link:hover {
  color: var(--color-secondary);
  transform: none; /* evita “zoom” no botão */
}

.logout_btn {
  color: var(--color-white);
  padding: 24px 12px;
  border-radius: 0;
  width: 100%;
  align-self: flex-start;
  text-align: left;
  border: none;
  font-size: 1rem;
}
.menu_container .ipy_footer_line {
  width: max-content;
  background-color: var(--color-secondary);
  border-radius: 43px;
  padding: 8px 12px;
  color: var(--color-primary);
}
.router-link-active {
  background-color: var(--color-gray-600);
  /* color: var(--color-primary); */
  text-decoration: underline;
}
</style>
