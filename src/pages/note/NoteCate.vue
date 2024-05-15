<script setup>
// 导入库
import IconTag from "@/components/icons/IconTag.vue";
import IconCate from "@/components/icons/IconCate.vue";
import { useRouter } from "vue-router";
import { onMounted, ref  } from "vue";
import moment from "moment";


// 导入api
import { getBlogTags, getBlogTagById } from "@/apis/tags";
import { getBlogTypes, getBlogTypeById } from "@/apis/types";

// others
// 使用标题功能
import { useTitle } from "../../hooks/note/useTitle";
useTitle()



// ⭐init
// data
const router = useRouter();
let tagsList = ref([]);
let typesList = ref([]);
let notesList = ref([]);
let targetId = ref("");

// 原api
const initGetBlogTags = async () => {
    const res = await getBlogTags();
    tagsList.value = res.data;
}
const initGetBlogTypes = async () => {
    const res = await getBlogTypes();
    typesList.value = res.data;
}
// 事api
const getNotesByType = async (typeId) => {
    targetId.value = typeId;
    const res = await getBlogTypeById(typeId);
    notesList.value = res.data;
}
const getNotesByTag = async (tagId) => {
    targetId.value = tagId;
    const res = await getBlogTagById(tagId);
    notesList.value = res.data;
}

const initApis = () => {
    initGetBlogTags();
    initGetBlogTypes();
}

onMounted(() => {
    initApis();
})




function filterDate(_date) {
    return moment(_date).format('YYYY-MM-DD')
}


// 去笔记内容

function goNoteContent(noteId) {
    router.push({
        path: '/note/content',
        query: {
            noteId
        }
    })
    // store.title = item.title
}

</script>

<template>
    <div class="cate">
        <div class="cate-nav">
            <h2>类别：</h2>
            <div class="comon-list types-list">
                <template v-for="item in typesList" :key="item._id">
                    <div class="xn-hover-inup" >
                        <div class="comon-btn type-item animate__animated animate__fadeInLeft" :class="{selected:item._id == targetId}" @click="getNotesByType(item._id)">
                            <IconCate /> <span>{{ item.typename }}</span>
                        </div>
                    </div>
                </template>
            </div>
            <h2>标签：</h2>
            <div class="comon-list tags-list">
                <template v-for="item in tagsList" :key="item._id">
                    <div class="xn-hover-inup">
                        <div class="comon-btn tag-item animate__animated animate__fadeInLeft" :class="{selected:item._id == targetId}" @click="getNotesByTag(item._id)">
                            <IconTag /> <span>{{ item.tagname }}</span>
                        </div>
                    </div>
                </template>

            </div>
        </div>
        <div class="cate-section">
            <div class="note-list">
                <div class="note-item" v-for="(item, index) in notesList" @click="goNoteContent(item._id)" :key="item._id">
                    <div class="a-restful"></div>
                    <div class="item-date">{{ filterDate(item.createTime) }}</div>
                    <div class="item-title">{{ item.title }}</div>
                </div>

            </div>
        </div>
    </div>
</template>



<style lang="less" scoped>
.selected {
    // color: rgb(32, 74, 190) !important;
    background-color: #a0e2f1 !important;
}
.cate {
    border: var(--debug-border);
    /* border: solid; */
    background-color: var(--secondary-bg-color);
    padding: 5rem 3rem;

    .cate-nav {
        /* border: solid; */
        border: var(--debug-border);
        display: flex;
        flex-direction: column;
        gap: 2rem;

        .comon-list {
            /* border: solid; */
            border: var(--debug-border);
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .types-list {}

        .tags-list {}

        .comon-btn {
            fill: rgb(202, 32, 32);
            color: rgb(255, 0, 0);
            background-color: rgb(227, 205, 205);
            padding: 0.4rem 1.2rem;
            height: 2.2rem;
            /* border: solid; */
            border-radius: 2.2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.3rem;
            user-select: none;
            cursor: pointer;

        }
    }

    .cate-section {
        /* border: solid red; */
        border: var(--debug-border);
        margin-top: 3rem;

        .note-list {
            /* border: solid blue; */
            border: var(--debug-border);
            display: flex;
            flex-direction: column;
            gap: 1rem;

            .note-item {
                & {
                    display: flex;
                    justify-content: start;
                    align-items: center;
                    padding-left: 0.5rem;
                    gap: 1rem;
                    text-align: center;
                    height: 3rem;
                    line-height: 3rem;
                    /* border: solid; */
                    border: var(--debug-border);
                    cursor: pointer;
                }

                .a-restful {
                    background-color: rgb(181, 68, 68);
                    width: 6px;
                    height: 14px;
                    transition: all 0.3s;
                }

                .item-title {
                    color: rgb(181, 68, 68);
                    transition: all 0.3s;
                    font-weight: 600;
                }

                &:hover {
                    .a-restful {
                        background-color: #ff0000;
                        height: 6px;
                        border-radius: 5px;
                    }

                    .item-title {
                        color: #ff0000;
                    }
                }
            }
        }
    }
}
</style>