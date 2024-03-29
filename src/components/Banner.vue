<script setup>
import { watch, computed, onMounted, ref } from "vue";
import { UnLazyImage } from "@unlazy/vue/components";
import Container from "./ui/Container.vue";
import Svg from "./ui/Svg.vue";
import Button from "./ui/Button.vue";
import topicsMock from "@/assets/mocks/topicsMock";

const props = defineProps({
  topic: {
    type: Object,
    required: true,
  },
});

// NOTE: should get topic-data from props
// const topic = topicsMock[0];

const description = ref(null);
const endsAt = new Date(props.topic.ends_at);

onMounted(() => {
  const links = description.value.querySelectorAll("a");
  links.forEach((link) => {
    link.setAttribute("target", "_blank");
    link.classList.add("link");
  });
});
</script>

<template>
  <div class="banner">
    <div class="banner__image">
      <!-- :data-srcset="dataSrcset" -->
      <!-- NOTE: make lower quality for faster loading -->
      <UnLazyImage
        class="banner__picture"
        :alt="props.topic.cover_photo.alt_description"
        :blurhash="props.topic.cover_photo.blur_hash"
        :src-set="`${props.topic.cover_photo.urls.small} 400w,
              ${props.topic.cover_photo.urls.regular} 1080w,
              ${props.topic.cover_photo.urls.thumb} 200w,
              ${props.topic.cover_photo.urls.full} 1920w`"
        auto-sizes
      />
    </div>
    <div class="dimmer">
      <Container class="topic">
        <div class="topic__body">
          <h1 class="topic__title">{{ props.topic.title }}</h1>
          <h2
            v-if="props.topic.owners[0].username !== 'unsplash'"
            class="topic__curated"
          >
            Curated by
            <!-- NOTE: make popup on hover and change "to" attr to profile route -->
            <!-- NOTE: FIX RouterLink compiling -->
            <!-- NOTE: consider replacing router-link with a RouterLink component -->
            <router-link
              :to="{
                name: 'user',
                params: { username: props.topic.owners[0].username },
              }"
              class="topic__curated-link link"
            >
              {{ props.topic.owners[0].name }}
            </router-link>
          </h2>
          <div
            class="topic__description"
            v-html="props.topic.description"
            ref="description"
          ></div>
          <p v-if="props.topic.ends_at" class="topic__ends">
            <Svg name="clock" size="xs" class="topic__icon" />
            Contributions closed on
            <time :datetime="props.topic.ends_at">
              {{ endsAt.toLocaleDateString() }}
              at {{ endsAt.toLocaleTimeString().substr(0, 5) }}
            </time>
          </p>
        </div>
        <div class="topic__references">
          <div class="topic__photo-data">
            <!-- NOTE: for @click open popup -->
            <!-- NOTE: consider replacing router-link with a RouterLink component -->
            <router-link
              :to="{ name: 'home' }"
              class="topic__cover-photo link"
              :title="props.topic.cover_photo.alt_description"
            >
              Photo
            </router-link>
            by
            <!-- NOTE: change "to" attr to profile route -->
            <!-- NOTE: consider replacing router-link with a RouterLink component -->
            <router-link
              :to="{
                name: 'user',
                params: { username: props.topic.cover_photo.user.username },
              }"
              class="link"
              :title="props.topic.cover_photo.user.username"
            >
              {{ props.topic.cover_photo.user.name }}
            </router-link>
          </div>
          <div class="topic__license">
            Read more about the
            <!-- NOTE: ignore vue-router warning -->
            <a class="link" href="https://unsplash.com/license" target="_blank">
              Unsplash License
            </a>
          </div>
        </div>
      </Container>
    </div>
  </div>
</template>

<style scoped>
.banner {
  position: relative;
  height: var(--banner-size-r);
  background: rgb(var(--color-secondary-200));
}
.banner__image {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}
.banner__picture {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.dimmer {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(var(--banner-bg-color), 0.3);
}
.topic {
  display: flex;
  flex-direction: column;
  color: rgb(var(--banner-color));
}
.topic__body {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.topic__title {
  font-size: var(--fz-xl);
  font-weight: var(--fw-b);
}
.topic__description {
  margin-top: 1.4em;
  font-size: var(--fz-l);
  font-weight: var(--fw-m);
  max-width: var(--banner-description-max-width);
  line-height: var(--banner-description-line-height);
}
.topic__curated {
  font-size: var(--fz-l);
}
.topic__curated-link {
}
.topic__ends {
  margin-top: 1.2em;
}
.topic__icon {
  fill: rgb(var(--banner-color));
}
.topic__references {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 20px;
}
.topic__photo-data {
}
.topic__cover-photo {
  cursor: zoom-in;
}
.topic__license {
  justify-self: center;
}
</style>