<script setup>
import { computed, onMounted, ref, useSlots } from "vue";
import Svg from "./Svg.vue";

const props = defineProps({
  variant: {
    type: String,
    default: "default",
    validator: (value) => ["inline", "default"].includes(value),
  },
  icon: String,
  size: {
    type: String,
    default: "r",
    validator: (value) => ["s", "r", "l"].includes(value),
  },
  // link: Boolean,
});

const slots = useSlots();

const classNames = {
  button_default: props.variant === "default",
  button_gaped: props.icon && slots.default,
  "button_size-s": props.size === "s",
  "button_size-r": props.size === "r",
  "button_size-l": props.size === "l",
};

const rootRef = ref(null);
defineExpose({ rootRef });
</script>

<template>
  <!-- NOTE: need to make tagName more configurable -->
  <!-- component :is="props.link ? 'a' : 'button'" -->
  <button class="button" :class="classNames" ref="rootRef">
    <Svg
      v-if="props.icon"
      class="button__icon"
      :name="props.icon"
      :size="props.size"
    ></Svg>
    <!-- <div
      v-if="!props.icon"
      class="button__stretcher"
      :style="{ height: `var(--icon-${props.size})` }"
    /> -->
    <span class="button__label">
      <slot name="default" />
    </span>
  </button>
</template>

<style scoped>
.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
}
.button_default {
  border: 1px solid rgb(var(--color-secondary-300));
  border-radius: var(--button-border-radius);
  background-color: rgb(var(--color-primary));
  padding: var(--button-padding-y) var(--button-padding-x);
  box-shadow: var(--form-shadow);
}
.button_gaped {
  column-gap: var(--button-column-gap);
}
/* .button__stretcher {
  display: inline-block;
  background: none;
  width: 0;
} */
.button__icon {
  fill: rgb(var(--color-secondary-400));
}
.button__label {
  color: rgb(var(--color-secondary-400));
}
.button:hover,
.button:hover .button__icon,
.button:hover .button__label {
  border-color: rgb(var(--color-secondary-500));
  fill: rgb(var(--color-secondary-500));
  color: rgb(var(--color-secondary-500));
}
.button_size-s {
  font-size: var(--fz-s);
}
.button_size-r {
  font-size: var(--fz-r);
}
.button_size-l {
  font-size: var(--fz-l);
}
</style>