
<script setup>
import { ref , reactive , onBeforeMount,onUnmounted} from "vue";
import ErrorBar from "@/pages/user/ErrorBar.vue";
import axios from "axios";
import config from "@/config/blog.config";
import { useCheckUserName ,useCheckPwd } from "@/hooks/useCheck.js";

import { useCommonStore } from "@/store/common";
const store = useCommonStore()
import { useRouter } from "vue-router";

// 公共footer组件的显示与隐藏
onBeforeMount(()=>{
    store.isHideFoot = true
    store.isHideNav = true
})
onUnmounted(()=>{
    store.isHideFoot = false
    store.isHideNav = false
})


const errMsg = ref(' ')
const baseUrl = config.baseUrl

const user = reactive({
    username:'',
    password:''
})

const router = useRouter()

function login(){
    if(!useCheckUserName(user.username)){
        return errMsg.value = '账号不能为空'
    }
    if(!useCheckPwd(user.password)){
        return errMsg.value = '密码格式错误'
    }

    axios.post('/proxy/api/user/login', {
        username:user.username,
        password:user.password
    }, {
        headers: {
            "content-type": "application/x-www-form-urlencoded"
        }
    }).then((res) => {
        if(res.data.code != 0) {
            errMsg.value = res.data.msg
            return 0;
        }
        // 登录成功，n秒跳转笔记页
        errMsg.value = res.data.msg + ",2s后跳转到笔记页"
        setTimeout(()=>{
            router.push("/note")
        },2000)
    
    }).catch(() => {
        errMsg.value = "服务器异常"
    })
}





</script>



<template>
    <div class="auth">
        <div class="cart-box">
            <div class="cart-left"></div>
            <form class="cart-right" enctype="application/x-www-form-urlencoded">
                <div class="logo"></div>
                <div class="username input-box">
                    <input type="text" id="username" name="username" placeholder="用户名" v-model="user.username">
                </div>
                <div class="password input-box">
                    <input type="password" id="password" name="password" placeholder="密码(不小于6位)" v-model="user.password">
                </div>


                <!-- 错误提示 -->
                <ErrorBar :errMsg="errMsg" />

                <button class="submit" type="button" @click="login">Sign in</button>
                <div class="go">
                    <router-link to="/register">注册</router-link>
                    <router-link to="/resetpassword">修改密码</router-link>
                </div>
            </form>
        </div>
    </div>
</template>



<style src="@/assets/css/auth.less" lang="less" scoped>


</style>