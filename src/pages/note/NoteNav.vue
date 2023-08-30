<template>
    <div class="cart-note-list">
        <TransitionGroup enter-active-class="animate__animated animate__fadeInUp">
            <div class="note-item" @click="goNoteContent(item, index)" v-for="(item, index) in store.notesData"
                ref="noteItems" :key="item._id">
                <NoteItem :note="item" :order="index % 2 == 0 ? 0 : 1" />
            </div>
        </TransitionGroup>
    </div>
    <div class="page-nav">
        <div class="back-page" @click="goPageBack" v-show="store.currentPage !== 1">上一页</div>
        <div class="page-list">
            <div :class="['page-item', idx + 1 == store.currentPage ? 'active' : '']" @click="goPageWhich(idx + 1)"
                v-for="(item, idx) in notesPageCount" :key="idx">{{ item }}</div>
        </div>
        <!-- 当为第一页时，不显示上一页，反之 -->
        <div class="next-page" @click="goPageNext" v-show="store.currentPage !== notesPageCount">下一页</div>
    </div>
</template>

<script setup>

import { onBeforeMount, reactive, onMounted, ref, watch, nextTick, watchEffect } from "vue";
import { useMdStore } from "@/store/md";
import { useRoute, useRouter } from "vue-router";
import { useBackTop } from "@/hooks/utils/useBackTop";

// 使用标题功能
import { useTitle } from "../../hooks/note/useTitle";
useTitle()
// 使用下拉动画
import { useScrollAnimate } from "@/hooks/utils/useScrollAnimate";
const scrollAnimate = useScrollAnimate()

const router = useRouter()


import NoteItem from "./NoteItem.vue";
const store = useMdStore()



onBeforeMount(() => {
    // 更新笔记数据
    console.log('NoteNav加载前______')
    store.currentPage = 1
    store.getNotes()
})

function goNoteContent(item, index) {
    router.push({
        path: '/note/content',
        query: {
            noteIndex: index
        }
    })
    store.title = item.title
}

// 到哪一页
function goPageWhich(pageIdx) {
    store.currentPage = pageIdx
    store.getNotes({ pageWhich: pageIdx, pageNum: 10 })
    useBackTop()
}

// 下一页
function goPageNext() {
    store.currentPage++ //下一页
    store.getNotes({ pageWhich: store.currentPage, pageNum: 10 })
    useBackTop()
}

// 上一页
function goPageBack() {
    store.currentPage-- //上一页
    store.getNotes({ pageWhich: store.currentPage, pageNum: 10 })
    useBackTop()
}

// 默认页数为1
let notesPageCount = ref(1);
onMounted(() => {
    watch(() => store.hasMeInfo, (newVal, oldVal) => {
        console.log('new:', newVal, 'old:', oldVal)
        // 数据到了
        // 根据文章总数算页数
        const notesCount = store.meInfo.noteInfo.notesCount
        notesPageCount.value = Math.ceil(notesCount / 10)
    })

})

// 下拉动画
let noteItems = ref([]);
onMounted(() => {
   scrollAnimate.start(noteItems,{
    activeClass:['animate__animated','animate__fadeInUp']
   })
})



</script>





<style lang="less" scoped>
.active {
    background-color: #e84d4d;
    color: var(--primary-text-color);
}

.cart-note-list {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 0 0.5rem;
}

.note-item {

    transition: all 0.2s;
    cursor: pointer;
    visibility: hidden;
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

    .back-page {
        /* border: solid; */
        border: var(--debug-border);
        padding: 0.5rem 1rem;
        cursor: pointer;
        transition: all 0.3s;
        border-radius: 0.4rem 0 0 0.4rem;

        &:hover {
            background-color: #e84d4d;
            color: var(--primary-text-color);
        }
    }
}
</style>