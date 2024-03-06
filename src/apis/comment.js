import { $http } from "./index.js";

// 获取评论信息
export const getBlogComments = function(params = { pageWhich: 1, pageNum: 8 }){
    return $http({
        method: "get",
        url: "/api/web/friends",
        params
    })
}

// 提交评论
export const postBlogComment = function(data){
    return $http({
        method: "post",
        url: "/api/web/comment",
        data
    })
}