<script setup>
import { UnLazyImage } from "@unlazy/vue/components";
import Button from "./ui/Button.vue";

const props = defineProps({
  collection: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="card">
    <!-- NOTE: change to attr value -->
    <router-link :to="{ name: 'home' }" class="card__link">
      <div class="card__banner banner">
        <div class="banner__concealer"></div>
        <div class="banner__column banner__column_big">
          <div class="banner__wrapper banner__wrapper_big">
            <UnLazyImage
              class="banner__img"
              :blurhash="props.collection.preview_photos[0].blur_hash"
              :src-set="props.collection.preview_photos[0].urls.small"
              auto-sizes
            />
          </div>
        </div>
        <div class="banner__column banner__column_small">
          <div
            class="banner__wrapper banner__wrapper_small"
            v-for="n in 2"
            :key="n"
          >
            <UnLazyImage
              v-if="props.collection.preview_photos[n]"
              class="banner__img"
              :blurhash="props.collection.preview_photos[n].blur_hash"
              :src-set="props.collection.preview_photos[n].urls.thumb"
              auto-sizes
            />
          </div>
        </div>
      </div>
      <div class="card__title">{{ props.collection.title }}</div>
    </router-link>
    <div class="card__body">
      <div class="card__info">
        {{ props.collection.total_photos }}
        {{ props.collection.total_photos == 1 ? "photo" : "photos" }}
      </div>
      <div class="card__tags">
        <Button v-for="n in 3" :key="n" size="s">
          {{ props.collection.tags[n - 1].title }}
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
}
.card__link {
  display: block;
  margin-bottom: 0.7em;
}
.banner {
  aspect-ratio: 10 / 7;
  display: flex;
  column-gap: 3px;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  margin-bottom: 1.2em;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
}
.banner__concealer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
}
.banner__concealer:hover {
  background-color: rgba(var(--color-secondary-300), 0.2);
}
.banner__column {
}
.banner__column_big {
  width: 70%;
}
.banner__column_small {
  width: 30%;
  display: flex;
  flex-direction: column;
  row-gap: 3px;
}
.banner__wrapper {
  background-color: rgb(var(--color-secondary-300));
}
.banner__wrapper_big {
  width: 100%;
  height: 100%;
}
.banner__wrapper_small {
  height: 50%;
  width: 100%;
}
.banner__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.card__body {
}
.card__title {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: var(--fz-l);
  font-weight: var(--fw-b);
}
.card__info {
  margin-bottom: 1em;
}
.card__tags {
  display: flex;
  gap: 0.5em;
}
</style>