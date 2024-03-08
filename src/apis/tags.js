import { $http } from "./index.js";

// 获取博客信息
export const getBlogTags = function(){
    return $http({
        method: "get",
        url: "/api/web/tags",
    })
}

export const getBlogTagById = function(tagId){
    return $http({
        method: "get",
        url: "/api/web/tags" + "/" + tagId,
    })
}