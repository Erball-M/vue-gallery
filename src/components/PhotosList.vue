<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import PhotoCard from "./PhotoCard.vue";
import Loader from "./ui/Loader.vue";
import photosListMock from "@/assets/mocks/photosListMock";

const data = ref(photosListMock); //.slice(0, photosListMock.length / 2)
const photosArr = computed(() => {
  const res = data.value.reduce(
    (acc, item, index) => {
      acc[index % 3].push(item);
      return acc;
    },
    [[], [], []]
  );
  return res;
});

// NOTE: make dynamic columns count and sync it with --photolist-columns css var

// NOTE: change to service method
async function handleScroll() {
  // NOTE: need to relative to shortest column
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
    // data.value.push(...JSON.parse(JSON.stringify(photosListMock)));
    // data.value.push(...photosListMock.slice(photosListMock.length / 2));
  }
}
// NOTE: for uncommenting
// onMounted(() => {
//   window.addEventListener("scroll", handleScroll);
// });

// onUnmounted(() => {
//   window.removeEventListener("scroll", handleScroll);
// });
</script>

<template>
  <div class="grid">
    <div v-for="list in photosArr" :key="list[0].id" class="column">
      <PhotoCard
        v-for="photo in list"
        :key="photo.id"
        class="photo-card"
        :photo="photo"
      ></PhotoCard>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  align-items: start;
  grid-template-columns: repeat(var(--photolist-columns), minmax(0, 1fr));
  column-gap: var(--photolist-gap);
}
.column {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  row-gap: var(--photolist-gap);
}
</style>