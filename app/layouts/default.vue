<script setup lang="ts">
import Footer from "~/components/layout/Footer.vue";
import Header from "~/components/layout/Header.vue";
</script>
<template>
  <Header />

  <main class="container">
    <slot></slot>
  </main>
  <Footer />
</template>
<style scoped>
main {
  min-height: 85vh;
  padding: 0 16px;
}
@media (max-width: 600px) {
  main {
    padding: 0;
  }
}
</style>
