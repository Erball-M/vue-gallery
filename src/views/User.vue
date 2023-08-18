<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Container from "../components/ui/Container.vue";
import Svg from "../components/ui/Svg.vue";

// NOTE: should dynamic data
import userMock from "@/assets/mocks/userMock";

const route = useRoute();
const params = computed(() => route.params);
</script>

<template>
  <Container>
    <div class="badge">
      <div class="badge__header">
        <div class="badge__avatar">
          <div v-if="userMock.badge" class="badge__verification">
            <Svg
              name="verification"
              size="xl"
              class="badge__verification-icon"
            />
          </div>
          <img
            class="badge__img"
            :src="userMock.profile_image.large"
            alt="user-avatar"
          />
        </div>
      </div>
      <div class="badge__body">
        <div class="badge__name">{{ userMock.name }}</div>
        <div class="badge__bio">{{ userMock.bio }}</div>
      </div>
    </div>
  </Container>
</template>

<style scoped>
.badge {
  /* Maybe make it by grid-layout instead of flexbox */
  display: flex;
  flex-direction: var(--user-badge-direction);
  gap: var(--user-badge-gap);
}
.badge__header {
  width: var(--user-badge-header-ratio);
}
.badge__avatar {
  position: relative;
  display: inline-block;
}
.badge__verification {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
}
.badge__verification-icon {
}
.badge__img {
  display: inline-block;
  border-radius: 50%;
}
.badge__body {
  width: var(--user-badge-body-ratio);
}
.badge__name {
}
.badge__bio {
  max-width: 70%;
}
</style>