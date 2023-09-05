import axios from "axios";
import blogConfig from "@/config/blog.config.js";

// 创建axios实例
export const instance = axios.create({
    // 创建baseUrl地址
    baseURL: blogConfig['baseurl'],
    // 统一请求头
    headers: {
        // 表单常用默认头
        "Content-Type": "application/x-www-form-urlencoded"
    },
    // 请求超时时间
    timeout: 10000
});

// 请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求前做些什么
    // config为请求配置对象
    console.log('config是什么', config)
    console.log('this是什么', this) // undefined
    console.log('instance是什么', instance) //推测：是一个类
    return config
}, (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
})

instance.interceptors.response.use((res) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    console.log('res拦截成功',res)
    return res
}, (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
})