import { defineStore } from "pinia";
import { ref , reactive } from "vue";
import  axios  from "axios";

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


    // 请求笔记相关信息
    function getNotes(_query = {pageWhich:1,pageNum:10}){
        axios.get('/proxy/api/user/notes',{
            params:{
                pageWhich:_query.pageWhich, //页数
                pageNum:_query.pageNum //一页多少数据
            }

        }).then((req)=>{
            state.notesData.value = req.data.data
        }).catch(err=>{
            console.error(err)
        })
    }

    // 请求个人相关信息
    async function getMeInfo(){
        try {
            let res = await axios.get('/proxy/api/user/me')
            state.meInfo.value = res.data.data
            state.hasMeInfo.value++ //获取个人信息成功

        } catch(err) {
            console.error(err)
        }
    }

    async function checkLogin(){
        try {
            let res = await axios.get('/proxy/api/user/auth/login')
            if(res.data.code == 10) {
                // 更新登录状态
                state.isLogin.value = false
            } else {
                state.isLogin.value = true
            }
        } catch(err) {
            console.error(err)
        }
    }

    // 请求所有标签
    async function getAllTags(){
        try {
            let res = await axios.get('/proxy/api/user/tags')
            state.tagsArr.value = res.data.data

        } catch(err) {
            console.error(err)
        }
    }
    // 请求所有类别
    async function getAllTypes(){
        try {
            let res = await axios.get('/proxy/api/user/types')
            state.typesArr.value = res.data.data

        } catch(err) {
            console.error(err)
        }
    }
    // 请求note数据关于类别
    async function getNotesByTypeId(_typeId){
        try {
            let url = '/proxy/api/user/notes/types/' + _typeId
            let res = await axios.get(url)
            state.cateShowArr.value = res.data.data

        } catch(err) {
            console.error(err)
        }
    }
    // 请求note数据关于标签
    async function getNotesByTagId(_tagId){
        try {
            let url = '/proxy/api/user/notes/tags/' + _tagId
            let res = await axios.get(url)
            state.cateShowArr.value = res.data.data

        } catch(err) {
            console.error(err)
        }
    }

    return {
        ...state,
        getNotes,
        getMeInfo,
        
        getAllTags,
        getAllTypes,

        getNotesByTypeId,
        getNotesByTagId,

        checkLogin
        
    }
})