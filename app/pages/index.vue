<script setup lang="ts">
import GifMembers from "~/components/GifMembers.vue";
import Banner from "~/components/Banner.vue";
import GifLogo from "~/components/GifLogo.vue";
definePageMeta({
  title: "Home",
});
</script>
<template>
  <!-- <nuxt-img  />s -->

  <GifMembers />
  <Banner />
  <gifLogo />
</template>
