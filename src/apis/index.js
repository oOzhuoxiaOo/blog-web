import axios from "axios";
import blogConfig from "@/config/blog.config.js";
import { ElMessage } from "element-plus";
// TODO:->bug,router为undefined
// import { useRouter } from 'vue-router'
// const router = useRouter()
// console.log('apis里router')

// 创建axios实例
export const httpInstance = axios.create({
    // 创建baseUrl地址
    baseURL: blogConfig['baseUrl'],
    // 统一请求头
    headers: {
        // 表单常用默认头
        "Content-Type": "application/x-www-form-urlencoded",
    },
    // 请求超时时间
    timeout: 5000
});

// 请求拦截器
httpInstance.interceptors.request.use(function (config) {
    let token = localStorage.getItem('token');
    // 设置token在请求头Authorization
    config.headers.Authorization = token
    return config
}, (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
})

// 响应拦截一下
export const $http = async (config) => {
    try {
        const axiosResponse = await httpInstance(config)
        const dataRes = axiosResponse.data

        // start
        // 对响应数据做点什么
        // 400 Bad Request：服务器不理解客户端的请求，未做任何处理。
        // 401 Unauthorized：用户未提供身份验证凭据，或者没有通过身份验证。
        // 403 Forbidden：用户通过了身份验证，但是不具有访问资源所需的权限。
        // 404 Not Found：所请求的资源不存在，或不可用。
        // 405 Method Not Allowed：用户已经通过身份验证，但是所用的 HTTP 方法不在他的权限之内。
        // 410 Gone：所请求的资源已从这个地址转移，不再可用。
        // 415 Unsupported Media Type：客户端要求的返回格式不支持。比如，API 只能返回 JSON 格式，但是客户端要求返回 XML 格式。
        // 422 Unprocessable Entity ：客户端上传的附件无法处理，导致请求失败。
        // 429 Too Many Requests：客户端的请求次数超过限额。
        // 500 Internal Server Error：客户端请求有效，服务器处理时发生了意外。
        // 503 Service Unavailable：服务器无法处理请求，一般用于网站维护状态。
        // end
        
        // 错误处理
        if (dataRes.code >= 300) {
            let errTitle = "Error";
            if (dataRes.code == 401) {
                // 身份登录验证失败
                errTitle = dataRes.msg || "身份验证失败";
                // TODO:
                // console.log('为啥没push到登录',dataRes);
                // console.log('router无效?',router);
                // router.push('/login');
            } else if (dataRes.code == 403) {
                errTitle = "Forbidden";
            } else if (dataRes.code == 404) {
                errTitle = "Not Fount";
            } else if (dataRes.code == 500) {
                errTitle = "Internal Server Error";
            } else if (dataRes.code == 503) {
                errTitle = "Service Unavailable";
            } else {
                errTitle = "UnKnown"
            }

            ElMessage.error(errTitle);
            
            const err = new Error(dataRes.msg || "UnKnown")
            err.name = errTitle;
            throw err;
        }
        // 将处理后响应返回
        return dataRes
    } catch (error) {
        ElMessage.error(error)
    }
}
