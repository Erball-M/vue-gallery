<script setup>
import { computed } from "vue";

const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <input type="text" class="textfield" v-model="value" />
</template>

<style scoped>
.textfield {
  line-height: 1.6em;
  font-size: var(--fz-r);
  color: rgb(var(--color-secondary-500));
}
.textfield::placeholder {
  font-size: var(--fz-r);
  color: rgb(var(--color-secondary-400));
}
</style>