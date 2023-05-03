import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/reset.css'     // скопировали путь в свой main.js
                                // и исправили его.

createApp(App).use(store).use(router).mount('#app')
