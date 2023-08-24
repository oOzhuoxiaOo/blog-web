<template>
    <aside class="aside">
        <div class="cart cart-author">
            <div class="author-avatar"></div>
            <div class="author-name">D-Xiana</div>
            <div class="author-description">D-xiana's blog</div>
            <div class="author-state">
                <div class="state-article">
                    <div>文章</div>
                    <div v-if="store.meInfo.noteInfo">{{ store.meInfo.noteInfo.notesCount }}</div>
                    <div v-else>Loading...</div>
                </div>
                <div class="state-cate">
                    <div>分类</div>
                    <div v-if="store.meInfo.noteInfo">{{ store.meInfo.noteInfo.typeCount }}</div>
                    <div v-else>Loading...</div>
                </div>
                <div class="state-tags">
                    <div>标签</div>
                    <div v-if="store.meInfo.noteInfo">{{ store.meInfo.noteInfo.tagsCount }}</div>
                    <div v-else>Loading...</div>
                </div>
            </div>
            <div class="author-other-address">
                <a href="" class="address-item github"></a>
                <a href="" class="address-item bilibili"></a>
                <a href="" class="address-item twitter"></a>
                <a href="" class="address-item youtube"></a>
            </div>
            <div class="author-nav">
                
                <router-link class="nav-item" to="/note/nav" active-class="active">首页</router-link>
                <router-link class="nav-item" to="/note/cate" active-class="active">归档</router-link>
                
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


const store = useMdStore()

function toChapterContent(index) {
    const heading = store.chapterDomArr[index]
    // console.log(heading)
    heading.scrollIntoView({ behavior: 'smooth', block: 'start' })
}



// 个人信息相关数据

onMounted(async () => {
    store.getMeInfo(); //请求个人信息数据
})





</script>

<style scoped>

@media (max-width: 768px){
    .aside {
        display: none;
    }
}


.author-nav {
    display: flex;
    flex-direction: column;
    /* border: solid; */
    margin-top: 1.5rem;
    gap: 1rem;
    

    .nav-item {
        padding: 0.5rem 4rem;
        border: 10px double;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: all 0.5s;
        color: rgb(137, 43, 43);
        &:hover {
            color: rgb(255, 0, 0);
        }
    }
    .active {
        color: rgb(255, 0, 0);
    }

}
.aside {

    border: var(--debug-border);
    width: 280px;
    /* background-color: #fff; */
    /* align-self:flex-start; */
}

.cart {
    background-color: var(--secondary-bg-color);
    /* border: solid; */
    border: var(--debug-border);
    /* display: flex; */
    /* flex-direction: column; */
    /* height: 500px; */
    /* align-items: center; */
    padding: 20px 0;
    box-shadow: 0 0 10px 3px rgb(19, 19, 19);
}

.cart-author {
    background-color: var(--secondary-bg-color);
    /* border: solid; */
    border: var(--debug-border);
    display: flex;
    flex-direction: column;
    /* height: 500px; */
    align-items: center;
    padding: 20px 0;
    box-shadow: 0 0 10px 3px rgb(19, 19, 19);
}

.author-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: solid;
    background: url("../assets/images/avatars/av-0001.jpg") center / cover;
}

.author-name {
    margin-top: 1.5rem;
    color: rgb(242, 106, 106);
    font-weight: 700;
}

.author-description {
    color: var(--other-text-color);
    margin-top: 0.25rem;
    font-size: 14px;
}

.author-state {
    font-size: 14px;
    color: rgb(189, 79, 79);
    margin-top: 20px;
    display: flex;
    /* border: solid; */
    border: var(--debug-border);
    transition: all 0.4s;
    text-align: center;
    user-select: none;
    &:hover {
        color: rgb(255, 0, 0);
    }
}

.author-state>div {
    padding: 0 15px;
    /* border: 1px solid; */

    line-height: 1.5rem;
}

.author-state>div:nth-child(2) {
    border-left: solid 1px;
    border-right: solid 1px;
}

.author-other-address {
    margin-top: 1rem;
    display: flex;
    gap: 10px;



    .address-item {
        width: 30px;
        height: 30px;
        /* border: solid; */
        /* border-radius: 50%; */
    }

    .github {
        background: url('@/assets/images/logos/GITHUB-LOGO.png') center / cover;
    }

    .bilibili {
        background: url('@/assets/images/logos/BILIBILI-LOGO.png') center / cover;

    }

    .twitter {
        background: url('@/assets/images/logos/TWITTER-LOGO.jpg') center / cover;
    }

    .youtube {
        background: url('@/assets/images/logos/YOUTUBE-LOGO.jpg') center / cover;
    }

}
</style>