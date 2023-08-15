import './assets/css/base.css'
import 'github-markdown-css/github-markdown.css'
import App from './App.vue'
import { router } from "./router/index.js";


import { createApp } from 'vue'
import { createPinia } from 'pinia'


// elm-UI
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const pinia = createPinia()

const app = createApp(App)

app.use(pinia)

app.use(router)

app.use(ElementPlus)

app.mount('#app')
