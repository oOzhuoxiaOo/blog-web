<template>
    <div class="cart-note-list">
        <div class="note-item" v-for="(item,index) in store.notesData" :key="item._id" @click="goNoteContent(item,index)">
            <NoteItem  :note="item" :order="index % 2 == 0 ? 0 : 1"/>
        </div>
    </div>
    <div class="page-nav">
        <div class="page-list">
            <div :class="['page-item' ,idx+1 == store.currentPage ? 'active' : '']" @click="goPageWhich(idx+1)" v-for="(item,idx) in testPageArr" :key="idx">{{ item }}</div>

        </div>
        <div class="next-page" @click="goPageNext">下一页</div>
    </div>
</template>

<script setup>
import { onBeforeMount, reactive } from "vue";
import { useMdStore } from "@/store/md";
import { useRoute, useRouter } from "vue-router";


// 使用标题功能
import { useTitle } from "../../hooks/note/useTitle";
useTitle() 

const router = useRouter()


import NoteItem from "./NoteItem.vue";
const store = useMdStore()



onBeforeMount(() => {
    // 更新笔记数据
    console.log('NoteNav加载前______')
    store.currentPage = 1
    store.getNotes()
})

function goNoteContent(item,index){
    router.push({
        path:'/note/content',
        query:{
            noteIndex:index
        }
    })
    store.title = item.title
}

function goPageWhich(pageIdx){
    store.currentPage = pageIdx
    store.getNotes({pageWhich:pageIdx,pageNum:10})
}

function goPageNext(){
    store.currentPage++ //下一页
    store.getNotes({pageWhich:store.currentPage,pageNum:10})
}

const testPageArr = reactive([1,2,3]) 

</script>





<style  scoped>

.active {
    background-color: #e84d4d;
    color: var(--primary-text-color);
}
.cart-note-list {
    display: flex;
    flex-direction: column;
    gap: 50px;

}
.note-item {

    transition: all 0.2s;
    cursor: pointer;
}
.note-item:hover {
    transform: rotate(1deg);
    
}

.page-nav {
    margin-top: 2.5rem;
    display: flex;
    /* border: solid; */
    border: var(--debug-border);
    background-color: var(--secondary-bg-color);
    justify-content: space-between;
    .page-list {
        display: flex;
        flex: 1;
        /* border: solid; */
        border: var(--debug-border);
        justify-content: center;
        gap: 0.5rem;


        .page-item {
            /* border: solid; */
            border: var(--debug-border);
            padding: 0.5rem 1rem;
            border-radius: 0.3rem;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
                background-color: #e84d4d;
                color: var(--primary-text-color);
            }
        }
        
    }
    .next-page {
            /* border: solid; */
            border: var(--debug-border);
            padding: 0.5rem 1rem;
            cursor: pointer;
            transition: all 0.3s;
            border-radius: 0 0.4rem 0.4rem 0;


            &:hover {
                background-color: #e84d4d;
                color: var(--primary-text-color);
            }
        }
}



</style>