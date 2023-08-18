<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Header from "./components/Header.vue";
import Container from "./components/ui/Container.vue";
import { useTheme } from "./composables​/useTheme";

const route = useRoute();
const isNav = computed(() => route.name !== "user");

useTheme();
</script>

<template>
  <Header :nav="isNav"></Header>
  <main>
    <router-view />
  </main>
</template>

<style scoped></style>
