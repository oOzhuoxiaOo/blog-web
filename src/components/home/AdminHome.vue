<template>
    <div class="wrap">
        <AdminOverview class="item"></AdminOverview>
        <PieChart class="item"></PieChart>
        <barChar class="item"></barChar>
        <LineChart class="item"></LineChart>
    </div>
</template>

<script setup>
import AdminOverview from "./adminHome/AdminOverview.vue";
import PieChart from "./adminHome/PieChart.vue";
import barChar from "./adminHome/barChar.vue";
import LineChart from "./adminHome/LineChart.vue";

</script>

<style lang="less" scoped>

.wrap {
    display: flex;
    flex-wrap: wrap;
    box-shadow: var(--el-box-shadow-light);


    .item {
        width: 50%;
        height: calc((100vh - 100px) / 2);
        //  防止压缩变形
        min-height: 300px;
        padding: 20px;
        border: 1px solid ;
    }
}

</style>