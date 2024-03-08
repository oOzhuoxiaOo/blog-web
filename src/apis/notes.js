import { $http } from "./index.js";

// 获取笔记信息
export const getNotes = (params = {pageWhich:1,pageNum:10})=>{
    return $http({
        method: "get",
        url: "/api/web/notes",
        params,
    })
}
// 获取笔记信息
export const getNoteByNoteId = (noteId)=>{
    return $http({
        method: "get",
        url: "/api/web/notes" + "/" + noteId,
    })
}