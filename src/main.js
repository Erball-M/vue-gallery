import { createApp } from 'vue'
import App from './App.vue'
import Unlazy from '@unlazy/vue'
import router from './router/index'
import './assets/styles/main.css'

createApp(App)
    .use(Unlazy)
    .use(router)
    .mount('#app')