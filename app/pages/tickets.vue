<script setup lang="ts">
import { utilController } from "~/controllers/util.controller";

const { data } = await useFetch("/api/event");
definePageMeta({
  title: "Ingressos",
});
console.log(data, "data event");
</script>
<template>
  <h2>Próximos eventos</h2>
  <ul>
    <li v-for="event in data">
      <p class="event_time">{{ utilController.fomatDate(event.dthr_event) }}</p>
      <p>{{ event.name }}</p>
      <p>{{ event.description }}</p>
    </li>
  </ul>
</template>
<style scoped>
h2 {
  margin-top: 12px;
}
ul {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  padding-top: 24px;
  justify-content: center;
}
ul li {
  padding: 16px;
  border-radius: 8px;
  min-width: 381px;
  background-color: var(--color-primary-opacity);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
}

@media (max-width: 452px) {
  ul {
    padding: 24px 12px;
  }
  ul li {
    min-width: auto;
  }
}
</style>
