<template>
    <div class="note-content">
        <div class="main-info">
            <div class="cart-info main-info-date">
                <IconClock />
                <div class="note-date">{{ filteredDate }}</div>
            </div>
            <!-- 类别 -->
            <div class="cart-info main-info-date">
                <IconClock />
                <div class="note-date">{{ noteItem.type.typename }}</div>
            </div>
            <div class="main-info-tags">
                <div class="cart-info tag-item" v-for="item in noteItem.tags">
                    <IconTag />
                    <div class="tag-title">{{ item.tagname }}</div>
                </div>

            </div>
            <div class="line"></div>
            <!-- <div class="note-description">{{ noteItem.title }}</div> -->
        </div>
        <div class="markdown-body" v-html="noteItem.mdHtml" ref="noteContentDomRef"></div>
    </div>
</template>

<script setup>
import { onBeforeMount, onMounted, onUnmounted, ref, reactive ,computed} from "vue";
import { useMdStore } from '@/store/md'
import { useRoute } from "vue-router";
import moment from "moment";

import { useChapterScroll } from "@/hooks/note/useChapterScroll";

import IconClock from "@/components/icons/IconClock.vue";
import IconTag from "@/components/icons/IconTag.vue";






const store = useMdStore()
const route = useRoute()

useChapterScroll()

const noteIndex = route.query.noteIndex

const noteItem = store.notesData[noteIndex]

const noteContentDomRef = ref() //获取dom元素



// 计算属性格式化时间
const filteredDate = computed(() => {
    return moment(noteItem.createTime).format('yyyy-MM-DD')
})




// 挂载dom时
onMounted(() => {
    const noteContentDomNodeList = noteContentDomRef.value.querySelectorAll('h1,h2,h3,h4,h5,h6')
    const chapterArr = Array.from(noteContentDomNodeList).map((dom) => {
        return {
            title: dom.textContent, //标题
            level: parseInt(dom.tagName.slice(1)) //级别
        }
    })
    store.chapterDomArr = noteContentDomNodeList
    store.chapterArr = chapterArr
})

onUnmounted(() => {

})




</script>

<style scoped>
.main-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 2.5rem;
    gap: 0.5rem;
}

.cart-info {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-radius: 20px;
    /* border: solid; */
    padding: 0 1.5rem;
    background-color: #ffd4d4;
    color: red;
    gap: 5px;
    fill: red;
}

.note-content {
    border-radius: 0.5rem;
    padding: 30px 30px;
    background-color: #0d1117;
}

.main-info-tags {
    /* margin-top: 10px; */
    display: flex;
    gap: 8px;
}

.line {
    width: 100%;
    border-bottom: double 3px rgb(155, 47, 47);
    margin-top: 1.5rem;
    /* flex-shrink: ; */
}

.note-description {
    margin-top: 1.5rem;
}</style>