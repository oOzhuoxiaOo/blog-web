
<script setup>

import { ref , reactive} from "vue";
import ErrorBar from "@/pages/user/ErrorBar.vue";
import axios from "axios";
import config from "@/config/blog.config";
import { useCheckUserName ,useCheckPwd ,useCheckConfirmPwd} from "@/hooks/useCheck.js";

const errMsg = ref('')
const baseUrl = config.baseUrl

const user = reactive({
    username:'',
    password:'',
    confirmPwd:''
})



function register(){
    if(!useCheckUserName(user.username)){
        return errMsg.value = '账号不能为空'
    }
    if(!useCheckPwd(user.password)){
        return errMsg.value = '密码格式错误'
    }
    if(!useCheckPwd(user.confirmPwd)){
        return errMsg.value = '确认密码格式错误'
    }
    if(!useCheckConfirmPwd(user.password,user.confirmPwd)){
        return errMsg.value = '两次密码输入不一致'
    }
    
    axios.post('/proxy/api/user/register', {
        username:user.username,
        password:user.password,
        confirmPassword:user.confirmPwd
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
        <div class="hint"></div>
        <div class="cart-box">
            <div class="cart-left"></div>
            <form action="/user/register" method="post" class="cart-right" enctype="application/x-www-form-urlencoded">
                <div class="logo"></div>
                <div class="username input-box">
                    <input type="text" id="username" name="username" placeholder="用户名" v-model="user.username">
                </div>
                <div class="password input-box">
                    <input type="password" id="password" name="password" placeholder="密码(不小于6位)" v-model="user.password">
                </div>
                <div class="confirm-password input-box">
                    <input type="password" id="confirm-password" name="confirmPassword" placeholder="确认密码" v-model="user.confirmPwd">
                </div>

                <!-- 错误提示 -->
                <ErrorBar :errMsg="errMsg" />

                <button class="submit" type="button" @click="register">register</button>
                <div class="go">
                    <router-link to="/login">登录</router-link>
                    <router-link to="/resetpassword">修改密码</router-link>
                </div>
            </form>
        </div>
    </div>
</template>



<style src="@/assets/css/auth.less" lang="less" scoped></style>