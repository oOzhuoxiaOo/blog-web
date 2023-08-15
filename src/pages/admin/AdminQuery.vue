

<script setup>

import { useMdStore } from "../../store/md";
import { onBeforeMount, reactive } from "vue";

import { useRoute, useRouter } from "vue-router";

const store = useMdStore()






const router = useRouter()






onBeforeMount(() => {
    // 更新笔记数据
    console.log('NoteNav加载前______')
    store.currentPage = 1
    store.getNotes()
})


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

<template>
    <div class="query">
        <div class="page-nav">
        <div class="page-list">
            <div :class="['page-item' ,idx+1 == store.currentPage ? 'active' : '']" @click="goPageWhich(idx+1)" v-for="(item,idx) in testPageArr" :key="idx">{{ item }}</div>

        </div>
        <div class="next-page" @click="goPageNext">下一页</div>
    </div>
        <table class="table">
            <thead class="thead">
                <tr class="tr">
                    <th class="th">标题</th>
                    <th class="th">分类</th>
                    <th class="th">标签</th>
                    <th class="th">发布时间</th>
                    <th class="th">更新时间</th>
                    <th class="th">操作</th>
                </tr>
            </thead>
            <tbody class="tbody">
                <tr class="tr" v-for="item in store.notesData">
                    <td class="td">{{ item.title }}</td>
                    <td class="td">{{ item.type.typename }}</td>
                    <td class="td">
                        <div class="tags">
                            <div class="tag" v-for=" tagItem in item.tags">{{ tagItem.tagname }}</div>
                        </div>
                    </td>
                    <td class="td">{{ item.createTime }}</td>
                    <td class="td">{{ item.updateTime }}</td>
                    <td class="td">编辑/删除</td>
                </tr>
            </tbody>
            <div class="tbody"></div>
        </table>
    </div>
    
</template>


<style scoped>

.query {
    padding: 1rem;
}
.table {
    border: solid;
    width: fit-content;
    background-color: #fff;
    color: black;
    border-collapse: collapse;
    width: 100%;
    font-size: 14px;
    .tr {
        /* display: flex; */
        /* border: solid red; */
        text-align: center;
    }
    .th {
        border: 1px solid;
    }
    .td {
        border: 1px solid;
        padding: 0.5rem 0.5rem;
    }
    .thead {
        width: 100%;
    }
    .tbody {
        width: 100%;
    }
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
    
    .active {
    background-color: #e84d4d;
    color: var(--primary-text-color);
}
}

.tags {
    /* border: solid; */
    display: flex;
    justify-content: center;
    gap: 0.3rem;
    flex-wrap: wrap;
}
.tag {
    width: fit-content;
    /* height: 50px; */
    padding: 0.3rem 0.5rem;
    /* border: solid; */
    background-color: #4b7fe8;
    color: white;
    border-radius: 0.3rem;
    overflow: hidden;
}

</style>