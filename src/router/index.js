import { createRouter, createWebHashHistory } from "vue-router"
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

import { useMdStore } from "@/store/md.js";

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
            meta: { title: 'Home' },
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            meta: { title: 'Login' },
            component: UserLogin
        },
        {
            path: '/register',
            meta: { title: 'Register' },
            component: UserRegister
        },
        {
            path: '/resetpassword',
            meta: { title: 'Reset' },
            component: UserResetPassword
        },
        {
            path: '/note',
            meta: {
                requiresAuth: true //验证身份
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
        {
            path: '/admin',
            meta: {
                title: 'Admin',
                requiresAuth: true
            },
            component: Admin,
            children: [
                {
                    path: 'write',
                    component: AdminWrite
                },
                {
                    path: 'upload',
                    component: AdminUpload
                },
                {
                    path: 'query',
                    component: AdminQuery
                },
                {
                    path: 'personal',
                    component: AdminPersonal
                },
            ]
        },
    ]
})
router.beforeEach(async (to, from, next) => {
    console.log('@to:', to)
    // 是否需要身份验证
    if (to.meta.requiresAuth) {
        let mdStore = useMdStore()
        await mdStore.checkLogin()
        // 如果没有登录,跳转登录页
        console.log('验证了')
        if (!mdStore.isLogin) {
            next('/login');
        } else {
            next()
        }
        console.log('store是否在全局前置使用', mdStore)
        if (to.meta.hasOwnProperty('title')) {
            // 设置document标题
            document.title = to.meta.title
        }

    } else {
        // 直接放行
        next()
    }


})