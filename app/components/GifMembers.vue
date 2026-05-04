<script setup lang="ts">
import gif from "../../public/video.gif";
</script>
<template>
  <img :src="gif" alt="gif" />
</template>
<style scoped>
img {
  width: 100%;
  max-width: 640px;
  object-fit: cover;
}
</style>
