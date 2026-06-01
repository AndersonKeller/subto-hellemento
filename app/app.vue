<script setup lang="ts">
import "./assets/global.css";

// import favicon

const { data } = await useFetch("/api/configs");
const route = useRoute();
// console.log(data, "data?");
// if (data.value.styles) {
//   if (import.meta.client) {
//     const style = document.createElement("style");
//     // style.innerHTML = data.value.styles;
//     let content = "";
//     for (const key in data.value.styles) {
//       content += `${key}:${data.value.styles[key]};`;
//     }

//     style.innerHTML = `:root{${content}}`;
//     document.head.append(style);
//   }
// }
// uuseConfigsStore().setConfigs(data.value);
useHead(() => ({
  title: `${data.value?.title} | ${route.meta.title}`,
  style: data.value?.styles,
  // link: [{ rel: "icon", type: "image/svg+xml", href: data.value.favicon }],
}));
</script>
<template>
  <NuxtLayout name="default"> <NuxtPage /> </NuxtLayout>
</template>
