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

</script>



<!-- <template>
    <div class="admin">
        <AdminMenu />
        <div class="container">
            <div class="space"></div>
            <router-view/>
        </div>
    </div>
</template> -->
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
          <el-main>Main</el-main>
        </el-container>
      </el-container>
    </div>
  </template>
  




<style  scoped>
#home {
    min-height: 100vh;
}
.el-header {
background-color: #2b2c43;
}
.el-aside {
    min-height: calc(100vh - 60px);
    background-color: #2b2c43;
}

/* .admin {
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    .container {
        & {
            flex: 1;
            border: solid;

        }
    }
} */
</style>