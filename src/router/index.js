import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue'),
        children: [
            { path: 't/:slug', name: 'topic', component: () => import('@/views/Home.vue'), }
        ],
    },
    // { path: '/t/:slug', name: 'home', component: () => import('@/views/Home.vue'), },
    { path: '/:username', name: 'user', component: () => import('@/views/User.vue'), },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router