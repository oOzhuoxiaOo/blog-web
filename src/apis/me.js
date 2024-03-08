import { $http } from "./index.js";


export const getMe = ()=>{
    return $http({
        method: "get",
        url: "/api/web/me",
    })
}
