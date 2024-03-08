import { $http } from "./index.js";

// 获取笔记信息
export const getSearchNotes = (keyword)=>{
    return $http({
        method: "get",
        url: "/api/web/search/notes",
        params:{
            keyword
        }
    })
}
