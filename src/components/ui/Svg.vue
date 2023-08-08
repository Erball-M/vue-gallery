<script setup>
import { defineAsyncComponent } from 'vue'

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        default: 'r',
        validator: (value) => ['s', 'r', 'l', 'xl'].includes(value),
    },
    class: String,
})
const icon = defineAsyncComponent(() => import(`../../assets/icons/${props.name}.svg`))

const classNames = {
    icon: true,
    'icon_s': props.size === 's',
    'icon_r': props.size === 'r',
    'icon_l': props.size === 'l',
    'icon_xl': props.size === 'xl',
}
</script>

<template>
    <component :is="icon" :class="[classNames,props.class]"/>
</template>

<style scoped>
.icon {
    fill: rgb(var(--color-secondary-400));
}

.icon_s {
    height: var(--icon-s);
    width: var(--icon-s);
}

.icon_r {
    height: var(--icon-r);
    width: var(--icon-r);
}

.icon_l {
    height: var(--icon-l);
    width: var(--icon-l);
}

.icon_xl {
    height: var(--icon-xl);
    width: var(--icon-xl);
}
</style>