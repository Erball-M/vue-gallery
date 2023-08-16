<script setup>
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Navigation from "./components/Navigation.vue";
import Container from "./components/ui/Container.vue";
import { useTheme } from "./composables​/useTheme";

useTheme();
</script>

<template>
  <div class="head">
    <Header />
    <Navigation />
  </div>
  <main class="main">
    <RouterView />
  </main>
</template>

<style scoped>
.head {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 10;
}
.main {
}
</style>
