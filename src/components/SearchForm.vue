<script setup>
import { ref } from "vue";
import Button from "./ui/Button.vue";
import TextField from "./ui/TextField.vue";

const isFocused = ref(false);
const query = ref("");

const searchQuery = () => console.log(query.value);
</script>

<template>
  <form
    class="search-form"
    :class="{ 'search-form_focused': isFocused }"
    @submit.prevent
    title="Search"
  >
    <Button
      icon="magnifying_glass"
      size="r"
      variant="inline"
      class="search-form__button"
      @click="searchQuery"
    ></Button>
    <TextField
      class="search-form__input"
      placeholder="Search high-resolution images"
      v-model="query"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
  </form>
</template>

<style scoped>
.search-form {
  display: flex;
  align-content: center;
  overflow: hidden;
  border-radius: 1.7em;
  background-color: rgb(var(--color-secondary-100));
  border: 1px solid rgb(var(--color-secondary-100));
}
.search-form_focused {
  background-color: rgb(var(--color-primary));
  border-color: rgb(var(--color-secondary-300));
}
.search-form:hover {
  border-color: rgb(var(--color-secondary-300));
}
.search-form__button {
  padding-left: 1em;
}
.search-form__input {
  flex: 1 1 auto;
  padding-left: 0.5em;
  padding-right: 1em;
}
</style>