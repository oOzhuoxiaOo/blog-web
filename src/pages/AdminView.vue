<script setup>
import { onBeforeMount,onUnmounted } from "vue";
// import AdminMenu from "@/pages/admin/AdminMenu.vue";

import { useCommonStore } from "@/store/common";
const store = useCommonStore()
// 公共footer组件的显示与隐藏
onBeforeMount(()=>{
    store.isHideFoot = true
    store.isHideNav = true
})
onUnmounted(()=>{
    store.isHideFoot = false
    store.isHideNav = false
})

import AdminHeader from "@/components/layout/AdminHeader.vue";
import AdminMenu from "@/components/layout/AdminMenu.vue";

import { useUserInfoStore } from "@/store/userInfo.store";
import { getBlogInfoApi } from "@/apis/userInfo";
const userInfoStore = useUserInfoStore();

const getUserInfo = async ()=> {
  // 此时还没有写用户接口，先用假数据
  const res = {
    code: 0,
    message:'成功',
    data: {
      userInfo: {
        avatar:'https://pic2.zhimg.com/v2-4d89a56482dde519bc1d530e005401ad_r.jpg?source=1940ef5c',
        email: '11111111111@qq.com',
        nickname:'管理员',
        phoneNumber:'11111111111',
        username:'xiana'
      }
    }
  }
  // 用户：仓库更新数据
  userInfoStore.userInfo = res.data.userInfo
}

// 调用函数获取数据
getUserInfo();



</script>


<template>
    <div class="common-layout" id="home">
      <el-container>
        <el-header>
            <AdminHeader/>
        </el-header>
        <el-container>
            <el-affix>
                <el-aside width="200px">
                    <AdminMenu/>
                </el-aside>
            </el-affix>
          <el-main>
            <router-view/>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>
  




<style  scoped>
#home {
  background-color: #fff;
  color: rgb(0, 0, 0);
    min-height: 100vh;
}
.el-header {
background-color: #2b2c43;
}
.el-aside {
    min-height: calc(100vh - 60px);
    background-color: #2b2c43;
}

</style>