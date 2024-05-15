<template>
    <div class="cart-note-list">
 
            <div class="note-item" @click="goNoteContent(item._id)" v-for="(item, index) in store.notesData"
                ref="noteItems" :key="item._id">
                <div class="noteItemHover xn-hover-inup">
                    <NoteItem :note="item" :order="index % 2 == 0 ? 0 : 1" />
                </div>
            </div>

    </div>
    <div class="page-nav">
        <div class="back-page" @click="goPageBack" v-show="currentPage !== 1">上一页</div>
        <div class="page-list">
            <div :class="['page-item', idx + 1 == currentPage ? 'active' : '']" @click="goPageWhich(idx + 1)"
                v-for="(item, idx) in notesPageCount" :key="idx">{{ item }}</div>
        </div>
        <!-- 当为第一页时，不显示上一页，反之 -->
        <div class="next-page" @click="goPageNext" v-show="currentPage !== notesPageCount">下一页</div>
    </div>
</template>

<script setup>

import { onMounted, ref, watch, nextTick } from "vue";
import { useMdStore } from "@/store/md";
import { useRouter } from "vue-router";
import { useBackTop } from "@/hooks/utils/useBackTop";
import { getMe } from "@/apis/me.js";
import { ElLoading } from "element-plus";

// 使用标题功能
import { useTitle } from "../../hooks/note/useTitle";
useTitle()
// 使用下拉动画
import { useScrollAnimate } from "@/hooks/utils/useScrollAnimate";


const scrollAnimate = useScrollAnimate()
const router = useRouter()
import NoteItem from "./NoteItem.vue";
const store = useMdStore()
import { getNotes } from "@/apis/notes.js"



// 初始化笔记数据
const currentPage = ref(1)
const getNoteInfo = async () => {
    const dataRes = await getNotes();
    store.notesData = dataRes.data
}
getNoteInfo()




// 路由到笔记内容
function goNoteContent(noteId) {
    router.push({
        path: '/note/content',
        query: {
            noteId
        }
    })
    // store.title = item.title
}



// 到哪一页
async function goPageWhich(pageIdx) {
    currentPage.value = pageIdx
    // const loadingInstance =  ElLoading.service()
    const dataRes = await getNotes({ pageWhich: currentPage.value, pageNum: 10 });
    store.notesData = dataRes.data
    await nextTick()
    useBackTop()
}

// 下一页
async function goPageNext() {
    currentPage.value++ //下一页
    const dataRes = await getNotes({ pageWhich: currentPage.value, pageNum: 10 });
    store.notesData = dataRes.data
    useBackTop()
}

// 上一页
async function goPageBack() {
    currentPage.value-- //上一页
    // store.getNotes({ pageWhich: store.currentPage, pageNum: 10 })
    const dataRes = await getNotes({ pageWhich: currentPage.value, pageNum: 10 });
    store.notesData = dataRes.data
    useBackTop()
}

// 默认页数为1
let notesPageCount = ref(1);

// ⭐ 源
let webSiteMaster = ref({});
let requestStatus = ref(false);
const initGetMe = async () => {
    const res = await getMe();
    webSiteMaster.value = res.data;
}

const initApi = async () => {
    await initGetMe();
    requestStatus.value = true;
    // const loading = ElLoading.service({
    //     lock: true,
    //     text: 'Loading',
    //     background: 'rgba(0, 0, 0, 0.7)',
    // })
    // setTimeout(() => {
    //     loading.close()

    // }, 500);
}



onMounted(async () => {
    await initApi();
    const notesCount = webSiteMaster.value.noteInfo.notesCount;
    notesPageCount.value = Math.ceil(notesCount / 10);
})




// 下拉动画
let noteItems = ref([]);

onMounted(() => {
    scrollAnimate.start(noteItems, {
        activeClass: ['animate__animated', 'animate__fadeInUp']
    })
})

</script>





<style lang="less" scoped>
.active {
    background-color: #e84d4d;
    color: var(--primary-text-color);
}

// .noteItemHover{
//     transition: transform 0.2s;

//     &:hover {
//         transform:rotate(1deg);
//     }
// }
.cart-note-list {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 0 0.5rem;
    overflow: hidden;
}

.note-item {
    visibility: hidden;
    cursor: pointer;
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