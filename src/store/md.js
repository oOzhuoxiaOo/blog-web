import { defineStore } from "pinia";
import { $http } from "@/apis/index.js";
import { ref , reactive } from "vue";
import  axios  from "axios";
import blogConfig from "@/config/blog.config.js";

export const useMdStore = defineStore('markdown',()=>{

    const state = {
        title : ref(''), //当前标题
        chapterDomArr : ref(''), //目录DOM元素nodedlist
        chapterArr : ref([]), //目录加工nodeList得到的数组包含自定义对象
        chapterIdx : ref(''), //当前激活的目录idx索引
        currentPage : ref(1), //当前页数
        notesData : ref([]),
        isHideFoot : ref(false),
        meInfo : ref(null),
        hasMeInfo: ref(0),
        tagsArr: ref([]),
        typesArr: ref([]),
        cateShowArr: ref([]),
        isLogin:ref(false),

    }




    // 请求个人相关信息
    
    async function getMeInfo(){
        try {
            let dataRes = await $http({
                method:"get",
                url:'/api/web/me',
            }
                )
            state.meInfo.value = dataRes.data
            state.hasMeInfo.value++ //获取个人信息成功

        } catch(err) {
            console.error(err)
        }
    }

    // async function checkLogin(){
    //     try {
            
    //         let dataRes = await $http(
    //             {
    //                 method:"get",
    //                 url:'/api/user/auth/login',
    //             }
    //         )
    //         if(dataRes.code == 10) {
    //             // 更新登录状态
    //             state.isLogin.value = false
    //         } else {
    //             state.isLogin.value = true
    //         }
    //     } catch(err) {
    //         console.error(err)
    //     }
    // }

    // 请求所有标签
    
    async function getAllTags(){
        try {
            let dataRes = await $http({
                method:'get',
                url:'/api/web/notes/tags',
            })
            state.tagsArr.value = dataRes.data

        } catch(err) {
            console.error(err)
        }
    }
    // 请求所有类别
    async function getAllTypes(){
        try {
            let dataRes = await $http({
                method:'get',
                url:'/api/web/notes/types',
            })
            state.typesArr.value = dataRes.data

        } catch(err) {
            console.error(err)
        }
    }
    // 请求note数据关于类别
    async function getNotesByTypeId(_typeId){
        try {
            let url = '/api/web/notes/types/' + _typeId
            let res = await $http({
                method:'get',
                url,
            })
            state.cateShowArr.value = res.data.data

        } catch(err) {
            console.error(err)
        }
    }
    // 请求note数据关于标签
    async function getNotesByTagId(_tagId){
        try {
            let url = '/api/web/notes/tags/' + _tagId
            let res = await $http({
                method:'get',
                url,
            })
            state.cateShowArr.value = res.data.data

        } catch(err) {
            console.error(err)
        }
    }

    return {
        ...state,
        // getNotes,
        getMeInfo,
        
        getAllTags,
        getAllTypes,

        getNotesByTypeId,
        getNotesByTagId,

        // checkLogin
        
    }
})