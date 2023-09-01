<script setup>
import { computed, watch } from "vue";
import { useRoute } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Container from "./components/ui/Container.vue";
import { useTheme } from "./composables​/useTheme";

const route = useRoute();
// NOTE: for refactoring
const isNav = computed(() => !route.name?.startsWith("user"));

watch(
  () => route.name,
  () => console.log(route.name)
);

useTheme();
</script>

<template>
  <Header :nav="isNav"></Header>
  <main>
    <router-view :key="route.fullPath"></router-view>
  </main>
  <Footer></Footer>
</template>

<style scoped></style>
