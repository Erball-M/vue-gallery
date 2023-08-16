<script setup>
import Container from "../components/ui/Container.vue";
import Banner from "../components/Banner.vue";
import PhotosList from "../components/PhotosList.vue";
</script>

<template>
  <Banner class="banner" />
  <Container>
    <!-- NOTE: delete div.stretcher -->
    <!-- <div class="stretcher"></div> -->
    <PhotosList />
  </Container>
</template>

<style scoped>
/*  NOTE: delete .stretcher */
.stretcher {
  height: 1000px;
}

.banner {
  margin-bottom: var(--banner-margin-bottom);
}
</style>