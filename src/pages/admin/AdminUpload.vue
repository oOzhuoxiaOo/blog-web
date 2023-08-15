<script setup>
import { reactive, ref } from 'vue'
import axios from "axios";
const data = reactive({
    title: '',
    file: null
})

let bs64Src = ref('')
let rawFile = new FormData() //声明

function imgHandle(event) {
    const file = event.target.files[0]
    console.log(event.target.files)
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = e => {
        console.log('读取图片完毕,e为', e)
        bs64Src.value = e.target.result //base64格式数据图
        rawFile.append('noteImg', file) //将file文件数据转为formdata格式，如果不转成该格式则无法上传
        console.log(rawFile)

    }
}

async function publish() {
    rawFile.append('title', data.title)
    try {
        const res = await axios.post('/proxy/api/user/upload', rawFile, {
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        })
        console.log('res.data数据', res.data)
    } catch (err) {
        console.log('请求错误了', err)
    }
}











const tableData = [
    {
        date: '2016-05-03',
        typeName: 'bug',
        tags: '测试标签',
        updateTime: '2016-05-03',
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

<template>
    <div>
        <h1>测试图片提交</h1>
        <h2>图片标题</h2>
        <input class="title" type="text" v-model="data.title">
        <h2>上传图片</h2>
        <input class="image" @change="imgHandle" type="file">
        <button @click="publish">点击提交</button>
        <img :src="bs64Src" style="width: 400px;" alt="">
                    

    </div>
</template>



<style  scoped></style>