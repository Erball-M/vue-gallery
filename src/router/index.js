import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue'),
        children: [
            { path: 't/:slug', name: 'topic', component: () => import('@/views/Home.vue'), },
        ],
    },
    // NOTE: scroll 0
    {
        path: '/:username',
        name: 'user',
        component: () => import('@/views/User.vue'),
        children: [
            { path: '', component: () => import('@/components/PhotosList.vue'), },
            { path: 'collections', name: 'user-collections', component: () => import('@/components/CollectionsList.vue'), },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router