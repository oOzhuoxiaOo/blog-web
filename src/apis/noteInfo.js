import { $http } from "./index.js";
import { ElLoading } from "element-plus";
import { useUserInfoStore } from "@/store/userInfo.store.js";


// 获笔记信息
export const getNoteInfoApi = (params = {pageWhich:1,pageNum:10})=>{
    return $http({
        method: "get",
        url: "/api/web/notes",
        params,
    })
}