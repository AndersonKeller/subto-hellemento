<script setup lang="ts"></script>
<template>
  <div class="banner_content">
    <NuxtImg src="/image.png" />
  </div>
</template>
<style scoped>
.banner_content {
  width: 100%;
  max-height: 640px;
  max-width: 640px;
  object-fit: cover;
  /* margin-top: -8px; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: -8px;
}
img {
  width: 100%;

  object-fit: cover;
}
</style>
