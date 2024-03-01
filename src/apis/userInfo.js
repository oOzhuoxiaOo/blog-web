import { $http } from "./index.js";

// 获取博客信息
export const getBlogInfoApi = function(){
    return $http({
        method: "GET",
        url: "/api/web/info",
    })
}