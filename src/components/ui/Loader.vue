<script setup>
import Svg from "./Svg.vue";

const props = defineProps({
  centered: Boolean,
  size: {
    type: String,
    default: "r",
    validator: (value) => ["xs", "s", "r", "l"].includes(value),
  },
});

const classNames = {
  centered: props.centered,
  size_xs: props.size === "xs",
  size_s: props.size === "s",
  size_r: props.size === "r",
  size_l: props.size === "l",
};
</script>

<template>
  <!-- NOTE: make gif for loader and finish component -->
  <div class="loader" :class="classNames">
    <div class="loader__part"></div>
  </div>
</template>

<style scoped>
.loader {
  height: 3em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
}
.centered {
  display: flex;
}
.size_xs {
  font-size: var(--fz-xs);
}
.size_s {
  font-size: var(--fz-s);
}
.size_r {
  font-size: var(--fz-r);
}
.size_l {
  font-size: var(--fz-l);
}
.loader::before,
.loader::after,
.loader__part {
  display: inline-block;
  height: 100%;
  width: 0.5em;
  animation: partAnimation 1s infinite ease-in-out;
  background: rgb(var(--color-secondary-500));
}
.loader::before,
.loader::after {
  content: "";
  animation-delay: 0.3s;
}
.loader__part {
  animation-delay: 0s;
}

@keyframes partAnimation {
  0%,
  80%,
  100% {
    height: 70%;
  }
  40% {
    height: 100%;
  }
}
</style>