import './assets/css/base.css'
import 'github-markdown-css/github-markdown.css'
// 动画 animate.css
import "animate.css";
import "@/assets/css/xiana.css"

import App from './App.vue'
// import { router } from "./router/index.js";


import { createApp } from 'vue'
// import { createPinia } from 'pinia'


// elm-UI
import 'element-plus/dist/index.css'

// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'



// 引入自定义plugin
import vLazy from "./plugins/directive/v-lazy.js";

const app = createApp(App)

app.use(vLazy)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

console.log('此时在app紧跟后')
// 异步引入pinia和router
async function asyncRegister() {
    console.log('执行asyncRegister了')
    const createPinia = (await import('pinia')).createPinia;
    app.use(createPinia());
    const router = (await import("@/router")).router;
    app.use(router)
    app.mount('#app')
}

asyncRegister()