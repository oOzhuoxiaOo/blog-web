import { $http } from "./index.js";

export const getTypeApi = ()=>{
    
}
export const getTagsApi = ()=>{
    return $http({
        method: "get",
        url: "/api/stat/tag",
    })

}
export const getTimeApi = ()=>{

}