import { $http } from "./index.js";

    // 请求图表信息
    export const getSet = () => {
        return $http({
            method: "get",
            url: `/api/web/setting`
        })
    }