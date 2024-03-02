import { $http } from "./index.js";

// 获取博客信息
export const getBlogFriendsApi = function(params = { pageWhich: 1, pageNum: 8 }){
    return $http({
        method: "get",
        url: "/api/web/friends",
        params
    })
}