
<script setup>
import { ref , reactive} from "vue";
import ErrorBar from "./ErrorBar.vue";
import axios from "axios";
import config from "@/config/blog.config";
import { useCheckUserName ,useCheckPwd } from "@/hooks/useCheck.js";

const errMsg = ref(' ')
const baseUrl = config.baseUrl

const user = reactive({
    username:'',
    password:''
})



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
        errMsg.value = res.data.msg
    
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



<style src="@/assets/css/auth.css" scoped></style>