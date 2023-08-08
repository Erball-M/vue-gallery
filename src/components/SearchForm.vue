<script setup>
import Svg from './ui/Svg.vue'
</script>

<template>
  <form class="search-form" @submit.prevent>
    <!-- <button type="submit" class="search-form__btn">
        <Svg name="magnifying_glass"></Svg>
    </button> -->
  </form>
</template>

<style scoped>
.search-form{
    background-color: rgb(var(--color-secondary-100));
    display: flex;
    align-items: stretch;
}
.search-form__btn{}
</style>