<script setup>
import { useRoute } from "vue-router";
import Button from "./ui/Button.vue";
import SelectModal from "./ui/SelectModal.vue";
import Svg from "./ui/Svg.vue";

// NOTE: should dynamic data
import userMock from "@/assets/mocks/userMock";

const route = useRoute();
// console.log(route.params.username);
</script>

<template>
  <div class="badge">
    <div class="badge__header">
      <div class="badge__avatar">
        <div v-if="userMock.badge" class="badge__verification">
          <Svg name="verification" size="xl" class="badge__verification-icon" />
        </div>
        <img
          class="badge__img"
          :src="userMock.profile_image.large"
          alt="user-avatar"
        />
      </div>
    </div>
    <div class="badge__body">
      <div class="badge__label">
        <div class="badge__name">{{ userMock.name }}</div>
        <SelectModal
          v-if="Object.keys(userMock.social).length"
          variant="default"
          icon="meatball_menu"
        >
          <ul>
            <!-- NOTE: change to LINK-tag -->
            <li>Share Profile</li>
          </ul>
        </SelectModal>
      </div>
      <div class="badge__info">
        <div class="badge__bio">{{ userMock.bio }}</div>
        <!-- NOTE: change to LINK-tag -->
        <Button
          v-if="userMock.location"
          class="badge__location"
          icon="map_marker"
          variant="inline"
          size="r"
        >
          {{ userMock.location }}
        </Button>
        <SelectModal
          v-if="Object.keys(userMock.social).length"
          variant="inline"
          icon="clip"
          :label="`Connect with ${userMock.name}`"
        >
          <ul>
            <li v-for="n in 10" :key="n" @click="console.log(n)">
              item{{ n }}
            </li>
          </ul>
        </SelectModal>
        <div>Interests</div>
        <ul v-if="userMock.tags.custom.length" class="badge__interests">
          <li v-for="interest in userMock.tags.custom" :key="interest.title">
            <Button class="badge__interest">{{ interest.title }}</Button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.badge {
  /* NOTE */
  margin: 50px 0;
  display: grid;
  grid-template-columns: 0.35fr 0.65fr;
  gap: var(--user-badge-gap);
}
.badge__header {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
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
  border: 1px solid rgb(var(--color-secondary-200));
}
.badge__body {
  display: flex;
  flex-direction: column;
  row-gap: calc(var(--user-badge-gap) / 2);
  color: rgb(--color-secondary-500);
}
.badge__label {
  display: flex;
  justify-content: flex-start;
  align-content: center;
  column-gap: var(--user-badge-gap);
}
.badge__name {
  font-size: var(--fz-xl);
  font-weight: var(--fw-b);
}
.badge__info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: calc(var(--user-badge-gap) / 2);
}
.badge__bio {
  max-width: 70%;
}
.badge__location {
}
.badge__interests {
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--user-badge-gap) / 4);
}
.badge__interest {
  text-transform: capitalize;
}
</style>