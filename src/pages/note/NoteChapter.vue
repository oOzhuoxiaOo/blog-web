<template>
    <div class="cart cart-chapter">

        <div class='chapter-info'>
            <IconRead />
            <div class="chapter-title">目录</div>
        </div>
        <div class="chapter-list">
            <div :class="['chapter-item', store.chapterIdx == index ? 'chapter-active' : '']"
                v-for="(item, index) in store.chapterArr" :key="index" @click="toChapterContent(index)"
                :style="{ 'margin-left': (item.level - 1) * 16 + 'px' }">
                {{ item.title }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { useMdStore } from "@/store/md";
import IconRead from "@/components/icons/IconRead.vue";
const store = useMdStore()
// 点击导航到目标事件
function toChapterContent(index){
    store.chapterDomArr[index].scrollIntoView({behavior:'smooth'})
}
</script>

<style scoped>

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

.cart-chapter {
    position: sticky;
    top: 3rem;
    padding: 1rem !important;

    .chapter-info {
        display: flex;
        /* border: solid; */
        align-items: center;
        gap: 0.5rem;
        fill: rgb(226, 79, 79);
        color: rgb(226, 79, 79);

        .chapter-title {
            font-size: 1.5rem;

        }
    }

    .chapter-list {

        margin-top: 0.5rem;

        .chapter-item {
            height: 2.4rem;
            line-height: 2.4rem;
            /* border: solid; */
            padding-left: 5px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
                background-color: rgb(189, 79, 79);
                color: var(--primary-text-color);
            }

        }

        .chapter-active {
            /* border: solid !important; */
            background-color: rgb(189, 79, 79);
            color: var(--primary-text-color);
        }

    }

}

</style>