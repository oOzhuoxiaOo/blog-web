<template>
    <div id="menu">

        <el-menu 
        active-text-color="#fff" background-color="rgb(43, 44, 67)" class="el-menu-vertical-demo"
            :default-active="defaultActive" 
            router
            text-color="rgb(180,180,180)" 
            @open="handleOpen" @close="handleClose">


            <component :is="item.children? ElSubMenu : ElMenuItem" v-for="item in menuList" :key="item.id"
                :index="item.index">
                <template v-if="item.children" #title>
                    <el-icon v-if="item.icon">
                        <component :is="item.icon"></component>
                    </el-icon>
                    <span>{{ item.name }}</span>
                </template>
                <template v-if="item.children">
                    <component v-for="subItem in item.children" :is="ElMenuItem" :index="subItem.index" :key="subItem.id">
                        <el-icon v-if="subItem.icon">
                            <component :is="subItem.icon"></component>
                        </el-icon>
                        <span>{{ subItem.name }}</span>
                    </component>
                </template>

                <template v-if="!item.children">
                    <el-icon v-if="item.icon">
                        <component :is="item.icon"></component>
                    </el-icon>
                    <span>{{ item.name }}</span>
                </template>
            </component>
        </el-menu>
    </div>
</template>

<script setup>


import { ElMenuItem, ElSubMenu } from "element-plus";
import { User, Notebook, Setting, House } from "@element-plus/icons-vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()
// 动态显示路由激活
const defaultActive = ref(router.currentRoute.value.path)

const menuList = [
    {
        id: 1,
        name: "首页",
        index: '/admin/admin-home',
        icon: House,
    },
    {
        id: 2,
        name: "用户",
        index: '/admin/users',
        icon: User
    },
    {
        id: 3,
        name: "笔记管理",
        index: '/admin/note-management',
        icon: Notebook,
        children: [
            {
                id: 31,
                name: '笔记列表',
                index: '/admin/notes'
            },
            {
                id: 32,
                name: '标签列表',
                index: '/admin/tags'
            },
            {
                id: 33,
                name: '类型列表',
                index: '/admin/type'
            },
        ]
    },
    {
        id: 4,
        name: "设置",
        index: 'admin/setting',
        icon: Setting
    },
]

</script>

<style lang="less" scoped></style>