<template>
    <div class="err-msg">
        {{ errMsg }}
    </div>
</template>

<script setup>
const props = defineProps({
    errMsg:{
        type:String,
        default:'测试还没传'
    }
})
</script>

<style  scoped>
.err-msg {
    color: red;
}
</style>