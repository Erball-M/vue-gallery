<script setup>
import { defineAsyncComponent, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import UserBadge from "../components/UserBadge.vue";
import Container from "../components/ui/Container.vue";
import Button from "../components/ui/Button.vue";

const route = useRoute();

const tabs = [
  { title: "Photos", slug: "user" },
  { title: "Collections", slug: "user-collections" },
];
</script>

<template>
  <Container class="main__container">
    <UserBadge></UserBadge>
    <router-link
      v-for="route in tabs"
      :key="route.title"
      :to="{ name: route.slug }"
    >
      {{ route.title }}
    </router-link>
    <router-view :key="route.name"></router-view>
  </Container>
</template>

<style scoped>
.main__container {
}
</style>