<template>
    <aside class="aside" >
        <div class="xn-hover-inup animateFather">
            <div class="cart cart-author animate__animated animate__fadeInRight">
                <CartAuthor/>
            </div>
        </div>
        <!-- 文章目录路由 -->
        <router-view name="NoteChapter"></router-view>
        <!-- <div class="cart cart-cate"></div>
        <div class="cart cart-tags"></div>
        <div class="cart cart-archive"></div> -->
    </aside>
</template>

<script setup>

import { useMdStore } from "@/store/md";
import { reactive, onMounted, onBeforeMount } from "vue";
import IconRead from "@/components/icons/IconRead.vue";
// import NoteChapter from "@/pages/note/NoteChapter.vue";
import CartAuthor from "@/components/common/CartAuthor.vue";


const store = useMdStore()

function toChapterContent(index) {
    const heading = store.chapterDomArr[index]
    // console.log(heading)
    heading.scrollIntoView({ behavior: 'smooth', block: 'start' })
}



// 个人信息相关数据

// onBeforeMount(() => {
//     store.getMeInfo(); //请求个人信息数据
// })





</script>

<style lang="less" scoped>

@media (max-width: 980px){
    .aside {
        display: none;
    }
}



.aside {

    border: var(--debug-border);
    width: 23%;
    // margin: 0 auto;
    /* background-color: #fff; */
    /* align-self:flex-start; */
}

.cart {

}

.cart-author {

}





</style>