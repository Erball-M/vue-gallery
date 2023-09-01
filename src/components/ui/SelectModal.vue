<script setup>
import { ref, Transition, onMounted, onUnmounted, watch } from "vue";
import Button from "./Button.vue";

const props = defineProps({
  label: {
    type: String,
    default: null,
  },
  variant: {
    type: String,
    default: "inline",
  },
  size: {
    type: String,
    default: "r",
    validator: (value) => ["s", "r", "l"].includes(value),
  },
  pointer: {
    type: Boolean,
    default: true,
  },
  icon: String,
});

const isOpen = ref(false);
const selectRef = ref(null);
const modalRef = ref(null);
const modalRect = ref({});

function toggleModal() {
  isOpen.value = !isOpen.value;
}
function closeHandler(e) {
  if (!selectRef.value.contains(e.target)) {
    isOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", closeHandler);
});
// NOTE: dynamic transition-origin and coords
// watch(modalRef, () => {
//   if (modalRef.value.tagName) {
//     const modalClone = modalRef.value.cloneNode(true);
//     modalClone.style.cssText = `top:-1000px;left:-1000px;`;
//     document.body.append(modalClone);
//     const rect = modalClone.getBoundingClientRect();
//     modalRect.value = { width: rect.width, height: rect.height };
//     modalClone.remove();
//     console.log(modalRect.value);
//   }
// });
onUnmounted(() => {
  document.removeEventListener("click", closeHandler);
});
</script>

<template>
  <div class="select" ref="selectRef">
    <Button
      class="select__button"
      :icon="props.icon"
      :variant="props.variant"
      :size="props.size"
      @click="toggleModal"
    >
      <!-- NOTE: condition for forwarding -->
      {{ props.label }}
    </Button>
    <Transition name="opening">
      <div v-show="isOpen" class="modal" ref="modalRef">
        <div v-if="props.pointer" class="pointer">
          <div class="pointer__triangle"></div>
        </div>
        <div class="modal__body">
          <slot name="default"></slot>
          <div class="modal__extra">
            <slot name="extra"></slot>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.select {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.select__button {
}
.modal {
  position: absolute;
  top: calc(100% + var(--icon-s));
  left: 0;
  z-index: 100;
  min-width: 100%;
  /* overflow: hidden; */
  border-radius: 6px;
  border: 1px solid rgb(var(--color-secondary-300));
  background: rgb(var(--color-primary));
  box-shadow: var(--form-shadow);
}
.pointer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  bottom: 100%;
  left: 6px;
  z-index: 101;
  overflow: hidden;

  height: var(--icon-s);
  width: var(--icon-s);
}
.pointer__triangle {
  height: calc(var(--icon-s) * sin(45deg));
  width: calc(var(--icon-s) * sin(45deg));
  rotate: 45deg;
  translate: 0 50%;

  border: 1px solid rgb(var(--color-secondary-300));
  background: rgb(var(--color-primary));
}
.modal__extra {
  border-top: 1px solid rgb(var(--color-secondary-300));
}
.modal__extra:empty {
  border-top: none;
}

.opening-enter-active,
.opening-leave-active {
  transition: opacity 0.2s ease;
  /* NOTE: dynamic origin */
  transform-origin: top center;
}
.opening-enter-active {
  animation: popup 0.2s cubic-bezier(0.49, 0.39, 0.48, 1.31);
}
.opening-leave-active {
  animation: popup 0.2s cubic-bezier(0.49, 0.39, 0.48, 1.31) reverse;
}
@keyframes popup {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
.opening-enter-from,
.opening-leave-to {
  opacity: 0;
}
</style>