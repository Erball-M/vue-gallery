<script setup>
import { computed } from "vue";

import photosListMock from "../assets/mocks/photosListMock";

const photosArr = computed(() => {
  const res = photosListMock.reduce(
    (acc, item, index) => {
      acc[index % 3].push(item);
      return acc;
    },
    [[], [], []]
  );
  return res;
});
</script>

<template>
  <div class="grid">
    <div v-for="list in photosArr" :key="list[0].id" class="column">
      <div v-for="item in list" :key="item.id" class="photo">
        <img :src="item.urls.thumb" :alt="item.alt_description" class="img" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: 24px;
}
.img {
  width: 100%;
  object-fit: contain;
}
</style>