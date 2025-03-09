import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import './assets/main.css'

const myapp = createApp(App)
const pinia = createPinia()

myapp.use(pinia)
myapp.mount('#app')

myapp.config.devtools = true;

import "../node_modules/bootstrap/dist/js/bootstrap.js";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
