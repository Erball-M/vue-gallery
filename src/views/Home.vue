<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Container from "../components/ui/Container.vue";
import Banner from "../components/Banner.vue";
import PhotosList from "../components/PhotosList.vue";

import topicsMock from "@/assets/mocks/topicsMock";
import photosListMock from "@/assets/mocks/photosListMock";

const route = useRoute();
const slug = computed(() => route.params.slug);

// NOTE: to remove
const topic = computed(
  () => topicsMock.find((topic) => topic.slug === slug.value) ?? topicsMock[0]
);
</script>

<template>
  <!-- NOTE: create template for editorial route -->
  <Banner class="banner" :topic="topic" :key="topic.id" />
  <Container>
    <!-- NOTE: make prop for photosList -->
    <PhotosList />
  </Container>
</template>

<style scoped>
.banner {
  margin-bottom: var(--banner-margin-bottom);
}
</style>