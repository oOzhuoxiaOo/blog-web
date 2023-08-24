## 优化
- [x] 优化仓库md代码结构
- [x] 路由懒加载
- [ ] 图片懒加载
- [x] 滚动事件节流优化












### 优化仓库md代码结构
将数据统一放入state中，然后返回出时拓展出来
源代码
```js

```
优化后
```js
export const useMdStore = defineStore('markdown',()=>{
    const state = {
        title : ref(''), //当前标题
        chapterDomArr : ref(''), //目录DOM元素nodedlist
        chapterArr : ref([]), //目录加工nodeList得到的数组包含自定义对象
        chapterIdx : ref(''), //当前激活的目录idx索引
        currentPage : ref(1), //当前页数
        notesData : ref([]),
        isHideFoot : ref(false),
        meInfo : ref({}),
        meInfoLoaded : ref(false),
    }
    // 请求笔记相关信息
    function getNotes(_query = {pageWhich:1,pageNum:10}){
        //省略...
    }
    // 请求个人相关信息
    async function getMeInfo(){
        //省略...
    }
    return {
        ...state,
        getNotes,
        getMeInfo,
        
    }
})
```

### 路由懒加载
按需加载路由，而不是把所有路由组件和其他模块都打包进一个js（首屏优化）
```js
// 路由懒加载(按需加载)
const Home = ()=> import( "@/pages/Home.vue");
const UserLogin = ()=> import( "@/pages/user/UserLogin.vue");
const UserRegister = ()=> import( "@/pages/user//UserRegister.vue");
const UserResetPassword = ()=> import( "@/pages/user/UserResetPassword.vue");
const BlogNote = ()=> import( "@/pages/BlogNote.vue");
const Admin = ()=> import( "@/pages/admin/Admin.vue");
const NoteContent = ()=> import( "@/pages/note/NoteContent.vue");
const NoteNav = ()=> import( "@/pages/note/NoteNav.vue");
const NoteCate = ()=> import( "@/pages/note/NoteCate.vue");
const NoteChapter = ()=> import( "@/pages/note/NoteChapter.vue");
const AdminWrite = ()=> import( "@/pages/admin/AdminWrite.vue");
const AdminUpload = ()=> import( "@/pages/admin/AdminUpload.vue");
const AdminQuery = ()=> import( "@/pages/admin/AdminQuery.vue");
const AdminPersonal = ()=> import( "@/pages/admin/AdminPersonal.vue");
```

### 滚动事件节流优化
滚动事件节流处理
```js
// 节流函数
export function throttle(fn,delay){
    let start = 0
    return function(...args){
        let now = new Date()
        if(now - start > delay){
            start = now
            return fn.apply(this,args)
        } else {
            console.log('触发事件了也不给执行，触发那么块干嘛?')
        }
    }
}

// 使用节流
const isHide = ref(false)
const oldScrollY = ref(0)

import { onMounted, ref, onUnmounted, reactive } from "vue";
import { throttle } from "@/hooks/utils/commonFn";

const rules = reactive(
    {
        hideDistance: 300,//滚动高度限制
        delay:500 // 节流时间间隔
    }

)

export const useNavScroll = () => {

    function scrollHandle() {
        // ...省略
    }

    // 将滚动处理函数包装成节流式滚动处理
    const scrollHandleThrottle = throttle(scrollHandle,rules.delay)

    onMounted(() => {
        window.addEventListener('scroll', scrollHandleThrottle)
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', scrollHandleThrottle)

    })

    return {
        isHide,
        rules
    }


}  

```

### 图片懒加载

图片懒加载就是按需加载图片

**实现Vue的图片懒加载功能**

**技术：** WebApi：IntersectionObserve 、自定义指定、插件注册 
**范围：**  支持样式bgc和img 图懒加载
**原理：** 滑动到即将要展示的区域时,将data-src属性值 添加到img标签的src属性上，或者背景图片的background-image上

**用法:**

1. 添加自定义指令v-lazy 
2. 添加自定义属性data-src,存放将要展示的图片

img方式使用：
```vue
 <img class="img" v-lazy data-src="/src/assets/images/avatars/av-0002.jpg" alt="头像图片">
```
背景图片方式使用：
```vue
 <div v-lazy data-src="/src/assets/images/avatars/av-0002.jpg"></div>
```



**具体实现过程:**

1. 配置指令插件:
```js
 // 导出插件对象
export default {
    // 安装插件
    install: (app, options) => {
        // 给app实例添加自定义指令
        // el:绑定的dom，binding
        app.directive('lazy', {
            // 在绑定元素的父组件
            // 及他自己的所有子节点都挂载完成后调用
            mounted(el, binding) {
                 console.log(el,binding)
                //  创建交叉实例
                 const obs = new IntersectionObserver(
                    // 交叉回调
                    (entries)=>{
                        entries.forEach((item)=>{
                            // 判断是否交叉false
                            if(!item.isIntersecting){
                                console.log('没有交叉，直接返回')
                                return ; //如果没有到交叉，直接返回
                            }
                            // 为img标签时赋值src
                            if(item.target.tagName === 'IMG'){
                                console.log(item)
                                console.log('交叉成功,src赋值')
                                // 交叉为true，执行图片src处理
                                // 将图片标签自定义属性的src赋值给src
                                item.target.src = item.target.dataset.src
                            } else {
                                // 为其他标签时赋值bgi
                                item.target.style.backgroundImage = `url(${item.target.dataset.src})`

                            }
                            // 加载图后卸载侦听
                            obs.unobserve(item.target)
                        })
                    }
                 )
                //  侦听元素
                obs.observe(el) 
            }
        })
    }
}
```

2. 导入注册插件

```js

import App from './App.vue'

import { createApp } from 'vue'
// 引入自定义plugin
import vLazy from "./plugins/directive/v-lazy.js";

const app = createApp(App)

app.use(vLazy)

app.mount('#app')

```
