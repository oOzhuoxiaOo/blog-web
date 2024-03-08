import { $http } from "./index.js";

// 获取博客信息
export const getBlogTypes = function(){
    return $http({
        method: "get",
        url: "/api/web/types",
    })
}
export const getBlogTypeById = function(typeId){
    return $http({
        method: "get",
        url: "/api/web/types" + "/" + typeId,
    })
}