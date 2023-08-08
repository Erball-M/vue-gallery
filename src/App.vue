<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Container from './components/ui/Container.vue'

onMounted(() => {
  document.body.setAttribute('data-theme', 'light') //dark
  window.theme = () => document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark'
})
</script>

<template>
  <Header/>
  <Container class="main__container">
    <RouterView/>
  </Container>
</template>

<style scoped>
.main__container{
  display: flex;
  align-items: flex-end;
}
</style>
