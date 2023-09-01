<script setup>
import Svg from "./ui/Svg.vue";
</script>

<template>
  <div class="footer">
    <router-link :to="{ name: 'home' }" class="link">
      <Svg name="logo" size="xl" class="logo"></Svg>
    </router-link>
    <p class="quote">Make something awesome</p>
  </div>
</template>

<style scoped>
.footer {
  margin: 0 auto;
  text-align: center;
  padding: var(--footer-padding);
  font-size: var(--fz-r);
  color: rgb(var(--color-secondary-400));
}
.link {
}
.logo {
  fill: rgb(var(--color-secondary-500));
}
.quote {
  margin: 0.5em 0 1em;
}
</style>