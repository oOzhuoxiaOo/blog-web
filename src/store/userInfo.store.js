import { defineStore } from "pinia";
import { httpInstance } from "@/apis/index.js";
import { ref, reactive } from "vue";
import axios from "axios";
import blogConfig from "@/config/blog.config.js";
import { router } from "../router";


export const useUserInfoStore = defineStore('userinfo-store', () => {

    const state = {
        userInfo: ref({})
    }

    // 设置token为请求头，并存储本地
    const setAuth = (token) => {
        httpInstance.defaults.headers.common.Authorization = token;
        localStorage.setItem('token', token);
    }
    // 检查本地是否有token，有并将token设置到请求头中并返回true，没有则false
    const authFromLocal = () => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuth(token);
            return true;
        }
        return false;
    }
    // 移除token请求头
    const removeAuth = () => {
        delete httpInstance.defaults.headers.common.Authorization;
        localStorage.removeItem('token');
        router.push('/login')
    }

    return {
        ...state,
        setAuth,
        removeAuth,
        authFromLocal
    }
})