<template>
<div id="header">
    <div class="logo-box">
        XiaNaBlog
    </div>
    <div class="right-box">
        <div class="title">博客笔记管理</div>
        <div class="avatar-box">
            <el-avatar
        :src="userInfoStore.userInfo.avatar"
      />
        </div>
    </div>
</div>
</template>

<script setup>
import { useUserInfoStore } from "@/store/userInfo.store";
const userInfoStore = useUserInfoStore();
</script>

<style lang="less" scoped>
#header {
    display: flex;
    justify-content: space-between;


    .logo-box {
        width: 200px;
        text-align: center;
        line-height: 60px;
        font-size: 22px;
        font-weight: bold;
        color: #e73267;
    }


    .right-box {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 18px;
        .el-avatar {
            margin-right: 10px;
        }
    }
}
</style>