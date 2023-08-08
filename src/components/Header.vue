<script setup>
import { RouterLink } from 'vue-router'
import Container from './ui/Container.vue'
import Svg from './ui/Svg.vue'
import SearchForm from './SearchForm.vue'
</script>

<template>
    <header class="header">
        <Container class="header__container">
            <!-- <RouterLink :to="{ name: 'home' }" class="logo_link">
                <Svg name="logo" class="logo-icon" size="xl"></Svg>
            </RouterLink> -->
            <!-- <SearchForm></SearchForm> -->
        </Container>
    </header>
</template>

<style scoped>
.header {
    background-color: rgb(var(--color-primary));
    padding: var(--block-padding-y) var(--block-padding-x);
    height: calc(var(--icon-xl) + (var(--block-padding-y) * 2));
}
.header__container{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: stretch;
}
.logo_link{
    display: inline-block;
    fill: rgb(var(--color-secondary-500));
}
.logo-icon{
    height: 100%;
    fill: inherit;
}
</style>