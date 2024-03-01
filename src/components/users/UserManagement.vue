<template>
    <div id="user">
        <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/admin/admin-home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="box-card">
            <div class="header">
                <el-input v-model="keyword" placeholder="请输入" class="input">
                    <template #prepend>
                        <el-button :icon="Search" />
                    </template>
                </el-input>
            </div>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column label="Date" width="180">
                    <template #default="scope">
                        <div style="display: flex; align-items: center">
                            <el-icon>
                                <timer />
                            </el-icon>
                            <span style="margin-left: 10px">{{ scope.row.date }}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="Name" width="180">
                    <template #default="scope">
                        <el-popover effect="light" trigger="hover" placement="top" width="auto">
                            <template #default>
                                <div>name: {{ scope.row.name }}</div>
                                <div>address: {{ scope.row.address }}</div>
                            </template>
                            <template #reference>
                                <el-tag>{{ scope.row.name }}</el-tag>
                            </template>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column label="Operations">
                    <template #default="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                        <el-button size="small" type="danger"
                            @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script setup>
import { getUserListApi } from "@/apis/users";
import { ref } from "vue";

import { ArrowRight } from '@element-plus/icons-vue'
import { Search } from '@element-plus/icons-vue'
import { Timer } from '@element-plus/icons-vue'
let keyword = ref('');


const handleEdit = (index, row) => {
    console.log(index, row)
}
const handleDelete = (index, row) => {
    console.log(index, row)
}

// 使用假数据
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]
</script>

<style lang="less" scoped>
.input {
    width: 30%;
}
</style>