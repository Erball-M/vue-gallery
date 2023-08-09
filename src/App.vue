<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Navigation from './components/Navigation.vue'
import Container from './components/ui/Container.vue'
import { useTheme } from './composables​/useTheme'

function toggleTheme() {
  document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark'
}

useTheme()
</script>

<template>
  <Header/>
  <Navigation/>
  <main class="main">
    <Container class="main__container">
      <RouterView/>
    </Container>
  </main>
</template>

<style scoped>
.main__container{}
</style>
