<script setup>
import { useRoute } from "vue-router";
import CollectionCard from "./CollectionCard.vue";

// NOTE: for remove
import collectionsMock from "@/assets/mocks/collectionsMock";

const route = useRoute();
</script>

<template>
  <div class="grid">
    <CollectionCard
      v-for="collection in collectionsMock"
      :key="collection.id"
      :collection="collection"
    ></CollectionCard>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  align-items: start;
  grid-template-columns: repeat(var(--list-columns), minmax(0, 1fr));
  grid-auto-rows: auto;
  gap: var(--list-gap);
}
</style>