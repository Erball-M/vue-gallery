<script setup></script>

<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  margin: 0 auto;
  max-width: calc(
    var(--container-max-width) + (var(--container-padding-x) * 2)
  );
  padding: var(--container-padding-y) var(--container-padding-x);
}
</style>