<script setup>
import { onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import Button from './ui/Button.vue';
import topicsMock from '@/assets/mocks/topicsMock'

const route = useRoute()
const arrowLeft = ref(false)
const arrowRight = ref(false)
const topicsData = ref([])

function showArrows(e) {
    const scrollValue = e.target.scrollLeft
    const width = e.target.clientWidth
    
    if(scrollValue > 0) {
        arrowLeft.value = true
    } else if(scrollValue <= 0) {
        arrowLeft.value = false
    }
    if(scrollValue >= width) {
        arrowRight.value = false
    } else if(scrollValue < width) {
        arrowRight.value = true
    }
}

onMounted(() => {
    topicsData.value = topicsMock
})
</script>

<template>
  <nav class="navigation">
    <ul class="navigation__list navigation__globals">
        <li 
            class="navigation__item" 
            :class="{'navigation__item_active':route.path === '/'}" 
        >
            <RouterLink 
                :to="{name:'home'}" 
                class="navigation__link" 
                :class="{'navigation__link_active': route.path === '/'}"
            >
                Editorial
            </RouterLink>
        </li>
    </ul>
    <div class="lists-divider"/>
    <div 
        class="navigation__list-wrapper"
        @scroll="showArrows"
    >
    <!-- wrap every child in extra divs and make arrow buttons absolute pose  -->
        <Button 
            v-if="arrowLeft"
            icon="arrow_left" 
            variant="inline" 
            class="navigation__button navigation__button_left"
        ></Button>
        <ul class="navigation__list navigation__topics">
            <li 
                class="navigation__item" 
                :class="{'navigation__item_active':route.path === '/'}" 
                v-for="topic in topicsData" 
                :key="topic.id"
            >
                <RouterLink 
                    :to="{name:'home'}" 
                    class="navigation__link" 
                    :class="{'navigation__link_active': route.path === '/'}"
                >
                    {{ topic.title }}
                </RouterLink>
            </li>
        </ul>
        <Button 
            v-if="arrowRight"
            icon="arrow_right" 
            variant="inline" 
            class="navigation__button navigation__button_right"
        ></Button>
    </div>
  </nav>
</template>

<style scoped>
.navigation{
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
    column-gap: var(--nav-column-gap);
    background-color: rgb(var(--color-primary));
    padding: 0 var(--block-padding-x);
}
.lists-divider{
    height: 2.3em;
    width: 1px;
    background: rgb(var(--color-secondary-300));
}
.navigation__list-wrapper{
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    -ms-overflow-style: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
    position: relative;
}
.navigation__list-wrapper::-webkit-scrollbar {
    display: none;
    width: 0;
}
.navigation__button{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.navigation__button_left{
    left:0;
}
.navigation__button_right{
    right:0;
}
.navigation__list{
    display: flex;
    column-gap: var(--nav-column-gap);
}
.navigation__globals{}
.navigation__topics{
    height: 100%;
    flex: 1 1 auto;
}
.navigation__item{}
.navigation__item_active{
    box-shadow: inset 0 -2px rgb(var(--color-secondary-500));
}
.navigation__link{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
}
.navigation__link_active{
    color: rgb(var(--color-secondary-500));
}
.navigation__link:hover{
    text-decoration: none;
}
</style>