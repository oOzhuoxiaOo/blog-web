<template>
    <div class="personal">
        <h2>个人信息</h2>
        <button @click="queryPersonalInfo">点击查询个人信息</button>
    </div>
</template>

<script setup>
import { ref,reactive } from "vue";
let errMsg = ref('获取成功')
import  axios  from "axios";
const personInfo = reactive(null)
async function queryPersonalInfo(){
   let res = axios.get('/proxy/api/user/me')
   if(res.code != 0) {
    errMsg.value = '获取失败'
    return ;
   }
   personInfo =res.data.data
   

}
</script>

<style  scoped>
.personal {
    margin-top: 10rem;
}
</style>