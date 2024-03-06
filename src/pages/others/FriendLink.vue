

<script setup>

import { onMounted, nextTick, reactive,ref } from "vue";
import { ElLoading } from "element-plus";
import { ElMessage } from 'element-plus'
import { getBlogFriendsApi } from "@/apis/friends.js"
let friendsList = ref([{
    name:'xiana',
    imgUrl:"aa",
    description:"dd"
}]);
const getFriends = async()=>{
    const resData = await getBlogFriendsApi();
    console.log("resData为:",resData)
    friendsList.value = resData.data
}
onMounted(()=>{
    getFriends();
})

</script>

<template>
    <div class="friend">
        <h2 class="main-title">小伙伴们</h2>
        <div class="friend-list">
            <div class="friend-item" v-for="(item,idx) in friendsList" :key="idx">
                <div class="avatar">
                    <img :src="item.imgUrl" alt="">
                </div>
                <div class="content">
                    <div class="title">{{ item.name }}</div>
                    <div class="text">{{ item.description }}</div>
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
    @friend-height:100px;
    @image-height:@friend-height * 0.8;
    // border: solid;
    display: flex;
    align-items: center;
    box-shadow: var(--cart-boxShadow);
    height: @friend-height;
    width: 48%;
    margin: 1%;

    @media screen and (max-width: 765px) {
        width: 98%;
    }
    transition: all ease 0.3s;
    &:hover {
        transform: translateY(-8px);
        scale: 1.05;
        cursor: pointer;

    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 1rem;

        // flex: 1;
        .title {
            font-weight: 700;
            font-size: 1rem;
            color: rgb(222, 62, 62);
            padding: 0.3rem 0;
        }

        .text {
            padding: 0.3rem 0;
            font-size: 0.8rem;
        }
    }

    .avatar {
        // position: relative;
        width: @image-height;
        height: @image-height;
        //padding-bottom: 100%;
        overflow: hidden;

        // overflow: hidden;
        img {
            // display: block;
            border-radius: 50%;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}</style>