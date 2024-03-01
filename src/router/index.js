import { createRouter, createWebHashHistory } from "vue-router"
// 路由懒加载(按需加载)
const Home = () => import("@/pages/Home.vue");
const BlogNote = () => import("@/pages/BlogNote.vue");

const NoteContent = () => import("@/pages/note/NoteContent.vue");
const NoteNav = () => import("@/pages/note/NoteNav.vue");
const NoteCate = () => import("@/pages/note/NoteCate.vue");
const NoteChapter = () => import("@/pages/note/NoteChapter.vue");

const FriendLink = () => import("@/pages/others/FriendLink.vue");


export const router = createRouter({
    history: createWebHashHistory(),
    // 路由滚动行为
    scrollBehavior(to, from) {
        console.log('=>to', to)
        return {
            top: 0
        }
    },
    routes: [
        {
            path: '/',
            meta: { title: 'Home', requiresAuth: false },
            component: Home
        },
        {
            path: '/about',
            meta: { title: '关于我', requiresAuth: false },
            component: UserLogin
        },

        {
            path: '/note',
            meta: {
                requiresAuth: false //验证身份
            },
            component: BlogNote,
            redirect: '/note/nav', //重定向
            // 嵌套命名路由
            children: [
                {
                    name: 'NoteNav',
                    meta: { title: '笔记首页' },
                    path: 'nav',
                    component: NoteNav
                },
                {
                    path: 'cate',
                    meta: { title: '分类' },
                    component: NoteCate
                },
                {
                    path: 'friend',
                    meta: { title: '友情链接' },
                    component: FriendLink
                },
                {
                    path: 'content',
                    meta: { title: '笔记详情' },
                    // 同级展示两个路由，一个为默认名路由，一个为命名路由
                    components: {
                        default: NoteContent,
                        NoteChapter: NoteChapter
                    }

                },

            ]
        },
      
    ]
})


import { useUserInfoStore } from "@/store/userInfo.store";
const userInfoStore = useUserInfoStore();

// 路由前置守卫.验证用户身份，检查权限
// to 即将进入的目标路由对象，包含路径、参数、查询参数等
// from 当前导航正要离开的路由对象，包含了当前的路由信息
// next 函数，控制导航的行为，可以接收一个参数，指定导航的目标路由
router.beforeEach(async (to, from, next) => {
    // 是否需要身份验证(路由权限、本地token存在)
    if (!to.meta.requiresAuth || userInfoStore.authFromLocal()) {
        console.log('需要登录权限,并且具有token')
        next()
    } else {
        // 没有登录则跳转登录页
        next('/login');
    }
})