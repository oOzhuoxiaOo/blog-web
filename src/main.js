import './assets/css/base.css'
import 'github-markdown-css/github-markdown.css'
// 动画 animate.css
import "animate.css";

import App from './App.vue'
import { router } from "./router/index.js";


import { createApp } from 'vue'
import { createPinia } from 'pinia'


// elm-UI
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入自定义plugin
import vLazy from "./plugins/directive/v-lazy.js";

const pinia = createPinia()

const app = createApp(App)

app.use(pinia)

app.use(router)

app.use(vLazy)

app.use(ElementPlus)

app.mount('#app')
