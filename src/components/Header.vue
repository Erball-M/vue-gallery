<script setup>
import { RouterLink } from 'vue-router'
import Svg from './ui/Svg.vue'
import SearchForm from './SearchForm.vue'
import Button from './ui/Button.vue'
import { useThemeToggle } from '../composables​/useThemeToggle'

const { changeTheme } = useThemeToggle()
</script>

<template>
    <header class="header">
        <nav class="header__nav">
            <RouterLink :to="{name:'home'}" class="header__logo-link" >
                <Svg name="logo" size="xl" class="header__logo"></Svg>
            </RouterLink>
            <SearchForm class="header__search"></SearchForm>
            <Button icon="theme" size="l" variant="inline" @click="changeTheme"></Button>
            <Button icon="burger_menu" size="l" variant="inline" class="header__menu"></Button>
        </nav>
    </header>
</template>

<style scoped>
.header {
    background-color: rgb(var(--color-primary));
    padding: var(--block-padding-y) var(--block-padding-x);
}
.header__nav {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: stretch;
    column-gap: var(--nav-column-gap);
}
.header__logo-link {}
.header__logo{
    fill: rgb(var(--color-secondary-500));
}
.header__search {
    flex: 1 1 auto;
}
.header__menu{}
</style>