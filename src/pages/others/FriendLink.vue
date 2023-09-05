

<script setup>

import { onMounted, nextTick } from "vue";
import { ElLoading } from "element-plus";
import { ElMessage } from 'element-plus'


onMounted(()=>{
    // const loadingInstance = ElLoading.service()
    // ElMessage({
    //     message:"你好啊"
    // })
})

</script>

<template>
    <div class="friend">
        <h2 class="main-title">小伙伴们</h2>
        <div class="friend-list">
            <div class="friend-item">
                <div class="avatar">
                    <img src="../../assets/images/avatars/av-0003.jpg" alt="">
                </div>
                <div class="content">
                    <div class="title">D-Xiana</div>
                    <div class="text">主站,ShokaX主题</div>
                </div>
            </div>
            <div class="friend-item">
                <div class="avatar">
                    <img src="../../assets/images/avatars/av-0003.jpg" alt="">
                </div>
                <div class="content">
                    <div class="title">D-Xiana</div>
                    <div class="text">主站,ShokaX主题</div>
                </div>
            </div>
            <div class="friend-item">
                <div class="avatar">
                    <img src="../../assets/images/avatars/av-0003.jpg" alt="">
                </div>
                <div class="content">
                    <div class="title">D-Xiana</div>
                    <div class="text">主站,ShokaX主题</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.friend {
    display: flex;
    padding: 1rem 1rem;
    flex-direction: column;
    background-color: var(--secondary-bg-color);

    .main-title {
        font-size: 2rem;
        font-weight: 700;
        margin: 2rem 0;
    }

    .friend-list {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        // gap: 2%;
    }
}

.friend-item {
    // border: solid;
    display: flex;
    box-shadow: var(--cart-boxShadow);
    height: 100px;
    width: 48%;
    margin: 1%;

    @media screen and (max-width: 765px) {
        width: 98%;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 1rem;

        // flex: 1;
        .title {
            font-weight: 700;
            font-size: 1.5rem;
            color: rgb(222, 62, 62);
            padding: 0.5rem 0;
        }

        .text {
            padding: 0.5rem 0;
            font-size: 1rem;
        }
    }

    .avatar {
        // position: relative;
        width: 6rem;
        height: 0;
        padding-bottom: 100%;

        // overflow: hidden;
        img {
            // display: block;
            border-radius: 50%;
            width: 100%;
            // height: 100%;
        }
    }
}</style>