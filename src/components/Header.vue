<script setup>
import Svg from "./ui/Svg.vue";
import Navigation from "./Navigation.vue";
import SearchForm from "./SearchForm.vue";
import Button from "./ui/Button.vue";
import SelectModal from "./ui/SelectModal.vue";
import { useThemeToggle } from "../composables​/useThemeToggle";

const props = defineProps({
  nav: Boolean,
});

const { changeTheme } = useThemeToggle();
</script>

<template>
  <header class="header">
    <div class="header__nav">
      <router-link
        :to="{ name: 'home' }"
        class="header__logo-link"
        title="Home page"
      >
        <Svg name="logo" size="xl" class="header__logo"></Svg>
      </router-link>
      <SearchForm class="header__search"></SearchForm>
      <Button
        icon="theme"
        size="l"
        variant="inline"
        @click="changeTheme"
        title="Toggle theme"
      ></Button>
      <!-- NOTE: Make popup window for burger menu -->
      <!-- <div class="header__menu"></div> -->
      <SelectModal icon="burger_menu" variant="inline" size="l">
        <ul>
          <li v-for="n in 10" :key="n" @click="console.log(`header ${n}`)">
            item{{ n }}
          </li>
        </ul>
      </SelectModal>
    </div>
    <Navigation v-if="props.nav" />
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 10;
  background-color: rgb(var(--color-primary));
}
.header__nav {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
  column-gap: var(--nav-column-gap);
  padding: var(--block-padding-y) var(--block-padding-x);
}
.header__logo-link {
}
.header__logo {
  fill: rgb(var(--color-secondary-500));
}
.header__search {
  flex: 1 1 auto;
}
</style>