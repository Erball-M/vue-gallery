<script setup>
import { UnLazyImage } from "@unlazy/vue/components";
import AuthorBadge from "./AuthorBadge.vue";
import Button from "./ui/Button.vue";

const props = defineProps({
  photo: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <!-- NOTE: swith div to router-link -->
  <router-link
    :to="{ name: 'home' }"
    class="card"
    :title="props.photo.alt_description"
  >
    <div class="card__link">
      <UnLazyImage
        class="card__img"
        :style="{ aspectRatio: `${props.photo.width}/${props.photo.height}` }"
        :alt="props.photo.alt_description"
        :blurhash="props.photo.blur_hash"
        :src-set="`${props.photo.urls.thumb} 200w,
                    ${props.photo.urls.small} 400w,
                    ${props.photo.urls.regular} 1080w,`"
        auto-sizes
      />
    </div>
    <div class="card__controls controls">
      <!-- :style="{background: props.photo.color ? `${props.photo.color}80` : false,}" -->
      <div class="controls__actions">
        <!-- <Button icon="heart" size="r">{{ props.photo.likes }}</Button> -->
        <!-- NOTE: maybe it should be router-link instead of button tag -->
        <!-- NOTE: add feature for searching similar color -->
        <!-- <Button size="r" link :title="`Find color ${props.photo.color}`">
          <div
            class="color-block"
            :style="{ background: props.photo.color }"
          ></div>
        </Button> -->
        <!-- NOTE: add feature for searching similars -->
        <Button
          icon="magnifying_glass"
          size="r"
          link
          title="Find similars"
        ></Button>
      </div>
      <div class="controls__data">
        <AuthorBadge :user="props.photo.user" variant="neutral"></AuthorBadge>
        <!-- NOTE: add download feature -->
        <!-- <Button icon="download" size="r" title="Download photo"></Button> -->
        <Button icon="download" size="r" title="Download photo"></Button>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.card {
  cursor: zoom-in;
  position: relative;
}
.card__link {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.card__img {
  width: 100%;
  height: 100%;
}
.controls {
}
.card__controls {
  opacity: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(var(--banner-bg-color), 0.3);
  padding: var(--block-padding-y) var(--block-padding-x);
}
.card__controls:hover {
  opacity: 1;
}
.controls__actions {
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 0.5em;
}
.color-block {
  height: var(--icon-r);
  width: var(--icon-r);
  border-radius: 50%;
  border: 1px solid rgb(var(--color-secondary-300));
}
.controls__data {
  display: grid;
  grid-template-columns: 1fr auto;
}
</style>