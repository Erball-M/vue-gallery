<script setup>
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import Button from "./ui/Button.vue";
import topicsMock from "@/assets/mocks/topicsMock";

//NOTE: component should be decomposed

const route = useRoute();
const sliderRef = ref(null);
const arrowLeft = ref(false);
const arrowRight = ref(false);
const topicsData = ref([]);

function showArrows(e) {
  const slider = sliderRef.value;
  if (!slider.tagName) return;
  const leftSide = slider.scrollLeft;
  const rightSide = slider.scrollLeft + slider.clientWidth;
  const scrollWidth = slider.scrollWidth;

  arrowLeft.value = leftSide > 0;
  arrowRight.value = scrollWidth % rightSide >= 1;
}
watch(sliderRef, () => showArrows(), { flush: "post" });

function backScroll() {
  sliderRef.value.scrollLeft -= 300;
}
function forwardScroll() {
  sliderRef.value.scrollLeft += 300;
}

onMounted(() => {
  topicsData.value = topicsMock;
  window.addEventListener("resize", showArrows);
});
onUnmounted(() => {
  window.removeEventListener("resize", showArrows);
});
</script>

<template>
  <nav class="navigation">
    <div class="navigation__item navigation__globals">
      <div class="navigation__list-wrapper">
        <ul class="navigation__list">
          <li class="navigation__list-item">
            <router-link
              :to="{ name: 'home' }"
              class="navigation__link"
              exact-active-class="navigation__link_active"
            >
              Editorial
            </router-link>
          </li>
          <li class="navigation__list-item">
            <a
              href="https://unsplash.com/"
              target="_blank"
              class="navigation__link"
            >
              Unsplash
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="navigation__item">
      <div class="navigation__divider" />
    </div>
    <div class="navigation__item navigation__topics">
      <div
        class="navigation__slider"
        :class="{ 'left-concealer': arrowLeft, 'right-concealer': arrowRight }"
      >
        <div
          v-if="arrowLeft"
          class="navigation__slider-arrow navigation__slider-arrow_left"
        >
          <Button
            icon="arrow_left"
            variant="inline"
            class="slider__button"
            @click="backScroll"
          ></Button>
        </div>
        <div
          class="navigation__list-wrapper"
          ref="sliderRef"
          @scroll="showArrows"
        >
          <ul class="navigation__list">
            <li
              class="navigation__list-item"
              v-for="topic in topicsData"
              :key="topic.id"
            >
              <router-link
                :to="{ name: 'topic', params: { slug: topic.slug } }"
                class="navigation__link"
                exact-active-class="navigation__link_active"
              >
                {{ topic.title }}
              </router-link>
            </li>
          </ul>
        </div>
        <div
          v-if="arrowRight"
          class="navigation__slider-arrow navigation__slider-arrow_right"
        >
          <Button
            icon="arrow_right"
            variant="inline"
            class="slider__button"
            @click="forwardScroll"
          ></Button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navigation {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  column-gap: var(--nav-column-gap);
  background-color: rgb(var(--color-primary));
  padding: 0 var(--block-padding-x);
}
.navigation__item {
}
.navigation__divider {
  height: 2.3em;
  width: 1px;
  background: rgb(var(--color-secondary-300));
  margin: var(--nav-link-padding-y) 0;
}
.navigation__item {
}
.navigation__list-wrapper {
  height: 100%;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  -ms-overflow-style: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-behavior: smooth;
}
.navigation__list-wrapper::-webkit-scrollbar {
  display: none;
  width: 0;
}
.navigation__list {
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  column-gap: var(--nav-list-column-gap);
}
.navigation__globals {
}
.navigation__topics {
  flex: 1 1 auto;
  overflow: hidden;
}
.navigation__list-item {
  height: 100%;
}
.navigation__link {
  height: 100%;
  display: flex;
  align-items: center;
  white-space: nowrap;
  padding: var(--nav-link-padding-y) var(--nav-link-padding-x);
}
.navigation__link:hover {
  text-decoration: none;
}
.navigation__item_active {
}
.navigation__link_active {
  color: rgb(var(--color-secondary-500));
  box-shadow: inset 0 -2px rgb(var(--color-secondary-500));
}
.navigation__slider {
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  position: relative;
}
.left-concealer::before,
.right-concealer::after {
  content: "";
  position: absolute;
  display: block;
  height: 100%;
  width: 10%;
}
.left-concealer::before {
  left: 0;
  background-image: linear-gradient(
    to left,
    transparent 0,
    rgb(var(--color-primary)) 90%,
    rgb(var(--color-primary))
  );
}
.right-concealer::after {
  right: 0;
  background-image: linear-gradient(
    to right,
    transparent 0,
    rgb(var(--color-primary)) 90%,
    rgb(var(--color-primary))
  );
}
.navigation__slider-arrow {
  height: 100%;
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
}
.navigation__slider-arrow_left {
  left: 0;
}
.navigation__slider-arrow_right {
  right: 0;
}
.slider__button {
}
</style>