<script setup lang="ts">
import { Icon } from "@iconify/vue";

defineProps(["icon", "width", "heigth", "color"]);
</script>
<template>
  <Icon :icon="icon" :color="color ?? '#fff'" :width="width ?? '24'" :height="heigth ?? '24'" />
</template>
