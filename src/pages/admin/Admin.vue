<script setup>
import { onBeforeMount,onUnmounted } from "vue";
import AdminMenu from "@/pages/admin/AdminMenu.vue";
import { useCommonStore } from "../../store/common";
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


</script>
<template>
    <div class="admin">
        <!-- 侧边栏 -->
        <AdminMenu />
        <div class="container">
            <div class="space"></div>
            <!-- 写文章路由 -->
            <router-view/>
            <!-- <AdminWrite/> -->
        </div>


    </div>
</template>


<style  scoped>
.admin {
    /* margin-top: 4rem; */
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    .container {
        & {
            /* border: solid; */
            flex: 1;
            /* background-color: #f7d2d2; */
            border: solid;

        }


      
    }


}
</style>