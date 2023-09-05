<script setup>
import IconTag from "@/components/icons/IconTag.vue";
import IconCate from "@/components/icons/IconCate.vue";


import { useMdStore } from "../../store/md.js";
import { onMounted } from "vue";
import { useRouter,useRoute } from "vue-router";

// 使用标题功能
import { useTitle } from "../../hooks/note/useTitle";
useTitle() 

const router = useRouter()
const route = useRoute()

const store = useMdStore()
import moment from "moment";

onMounted(()=>{
    store.getAllTags()
    store.getAllTypes()
})

function getAboutNotesByTypeId(item){
    let {_id} = item
    store.getNotesByTypeId(_id)
}
function getAboutNotesByTagId(item){
    let {_id} = item
    store.getNotesByTagId(_id)
}

function filterDate(_date){
    return moment(_date).format('YYYY-MM-DD')
}


// 去笔记内容

function goNoteContent(item,index){
    router.push({
        path:'/note/content',
        query:{
            noteIndex:index
        }
    })
    store.title = item.title
}

</script>

<template>
    <div class="cate">
        <div class="cate-nav">
            <div class="comon-list types-list">
                <template v-for="item in store.typesArr">
                    <div class="comon-btn type-item" @click="getAboutNotesByTypeId(item)">
                        <IconCate/> <span>{{ item.typename }}</span>
                    </div>
                </template>
            </div>
            <div class="comon-list tags-list">
                <template v-for="item in store.tagsArr">
                    <div class="comon-btn tag-item" @click="getAboutNotesByTagId(item)">
                        <IconTag/> <span>{{ item.tagname }}</span>
                    </div>
                </template>
 
            </div>
        </div>
        <div class="cate-section">
            <div class="note-list">
                <div class="note-item" v-for="(item,index) in store.cateShowArr" @click="goNoteContent(item,index)">
                    <div class="a-restful"></div>
                    <div class="item-date">{{ filterDate(item.createTime)}}</div>
                    <div class="item-title">{{ item.title }}</div>
                </div>
                
            </div>
        </div>
    </div>
</template>



<style lang="less" scoped>
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
        .types-list {

        }
        .tags-list {
        }
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