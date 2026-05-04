<script setup lang="ts">
import { uuseConfigsStore } from "~/stores/configs.store";
</script>
<template>
  <header>
    <NuxtImg src="/logo.png" />
    <!-- <p>{{ uuseConfigsStore().getConfigs.titulo! }}</p> -->
  </header>
</template>
<style scoped>
header {
  padding: 24px;
  background-color: var(--color-secondary);
  display: flex;
}
header img {
  width: 128px;
}
header p {
  color: var(--color-white);
}
</style>
