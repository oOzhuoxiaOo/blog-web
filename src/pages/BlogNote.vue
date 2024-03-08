

<script setup>
// import NoteContent from "./NoteContent.vue";
import Aside from "@/components/Aside.vue";
import  NoteNav  from "@/pages/note/NoteNav.vue";

import { reactive,onMounted,ref } from "vue";


import { useMdStore } from "@/store/md";

const store = useMdStore()

import img_Pz_0052 from "@/assets/images/animations/cols/Pz-0052.jpg"


</script>


<template>
    <div class="blog-node">
        
        <div class="pic" v-lazy :data_src="img_Pz_0052"></div>
        <div class="header">
            <h1 class="header-title">{{store.title}}</h1>
        </div>
        <div class="content">
            <div class="main">
                <!-- <NoteContent/> -->
                <!-- <NoteNav/> -->
                <router-view></router-view>
            </div>
            <!-- 侧边栏 -->
                <Aside/>
        </div>
    </div>
</template>



<style lang="less" scoped>

@media screen {
    
}

.pic {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background:  center / cover;
    background-attachment: fixed;
    z-index: -10;
}

.pic::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom,rgba(0,0,0,.3), var(--primary-bg-color));
    z-index: -9;
}


.header {
    & {
        width: 100%;
        height: 400px;
        /* border: solid; */
        border: var(--debug-border);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .header-title {
        margin: auto auto;
        width: 100%;
        text-align: center;
        color: var(--primary-text-color);
    }
}


.content {
    // padding: 0 8%;
    // margin: 0 max(8%);
    /* border: solid; */
    // overflow:hidden;
    max-width: 1200px;
    margin: 0 auto;
    border: var(--debug-border);
    /* height: 1000px; */
    display: flex;
    gap: 30px;
    @media (max-width: 720px) {
        width: 100%;
        padding: 0;
    }
}

.main {
    /* border: solid; */
    border: var(--debug-border);
    flex: 1;
    /* padding: 30px; */
    /* background-color: #0d1117; */
}



</style>