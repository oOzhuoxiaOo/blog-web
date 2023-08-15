

<script setup>



import { reactive } from "vue";
import { ref } from 'vue'
import axios from "axios";
import IconTag from "@/components/icons/IconTag.vue";
import markdownIt from "markdown-it";



// 响应式交互获取数据
const note = reactive({
    title: "",
    description: '',
    mdHtml: '',
    tags: [],
    typename: 'default',
    noteImg:null 
})


// 处理笔记文件
function handleFileChange(event) {
    console.log('上传成功')
    console.log(event)
    const file = event.target.files[0]

    if (file) {
        const reader = new FileReader()
        // 读取操作完成时触发，保存数据
        reader.onload = () => {
            const mdStr = reader.result
            // 字符串md解析为标签str后保存到对象中
            note.mdHtml = markdownIt().render(mdStr)
        }
        reader.readAsText(file) //文本形式读取文件内容
    }

}





// 处理图片文件
function imgHandle(event){
    note.noteImg = event.target.files[0]
    
}


// 消息提示
const errMsg = ref(' ')




// 提交服务器
async function publish() {
    const formData = new FormData()
    // 提取数据封装到formData中
    JSON.stringify(note.tags)
    for(const key in note) {
        if(key != 'tags') {
            formData.append(key,note[key])
        } else {
            formData.append(key,JSON.stringify(note[key]))
        }
        console.log('note[key]',note[key])
    }
    console.log('提交的formdata————tags',formData.get('tags'))
    try {
        const res = await axios.post('/proxy/api/user/publish', formData, {
            withCredentials: true, //携带凭证(cookie)
            headers: {
                // "content-type": "application/x-www-form-urlencoded"
                "Content-Type":'multipart/form-data'
            },

        })

        errMsg.value = res.data.msg

    } catch (err) {
        errMsg.value = "服务器异常"
    }


}

const inputTag = ref('')
function addTag() {
    note.tags.push(inputTag.value) //追加标签数据
    inputTag.value = '' //清空输入
}


const inputType = ref('')
function addType() {
    note.typename = inputType.value //更新分类数据
    inputType.value = '' //清空输入
}
</script>

<template>
    <div class="write-chapter">
        
        <h2>发布</h2>
        <input class="input-title" type="text" placeholder="文章标题" v-model="note.title">
        <br>
        <textarea class="textarea" rows="6" cols="40" placeholder="笔记描述" v-model="note.description"></textarea>
        <div class="tags">
            <h2>请添加标签</h2>
            <div class="tags-content">
                <div class="tags-list">
                    <div class="cart-info tag-item" v-for="item in note.tags">
                        <IconTag />
                        <div class="tag-title">{{ item }}</div>
                    </div>

                </div>
                <div class="tags-tail">
                    <input type="text" class="add-tag" v-model="inputTag" @keyup.enter="addTag" />
                    <span class="tips">按Ender键添加标签</span>
                </div>
            </div>
        </div>

        <div class="types">
            <h2>请添加类别</h2>
            <div class="types-content">
                <div class="types-list">
                    <div class="cart-info type-item">
                        <IconTag />
                        <div class="type-title">{{ note.typename }}</div>
                    </div>

                </div>
                <div class="types-tail">
                    <input type="text" class="add-type" v-model="inputType" @keyup.enter="addType" />
                    <span class="tips">按Ender修改类别</span>
                </div>
            </div>
        </div>

        
        <h2>上传MD笔记文件</h2>
        <input type="file" @change="handleFileChange" accept=".md">
        <br>

        <h2>上传笔记封面</h2>
        <input class="image" @change="imgHandle" type="file" accept="image/*">

        <button class="btn-publish" @click="publish">点击发布</button>
        <h2>发布结果:</h2>
        <h2>{{ errMsg }}</h2>
    </div>
</template>


<style  scoped>
.write-chapter {
    /* border: solid; */
    height: 100%;
    padding: 2rem;
    /* overflow: hidden; */
    overflow: auto;




    .input-title {
        height: 2.5rem;
        font-size: 1.5rem;
        padding-left: 0.5rem;
    }

    .textarea {
        font-size: 1.5rem;
        /* color: red; */
        padding-left: 0.5rem;

    }

    & h2 {
        margin-top: 0.6rem;
        margin-bottom: 0.3rem;
    }

    & input[type='file'] {
        /* padding: 0.5rem; */
        border: solid;
        font-size: 1.2rem;
    }

    .btn-publish {
        display: block;
        font-size: 1.2rem;
        padding: 0.5rem 1rem;
        margin-top: 1rem;
        border-radius: 0.5rem;
        background-color: #667be4;

        

    }


    .tags {


        .tags-content {
            & {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }

            .tags-list {
                & {

                    display: flex;
                    gap: 8px;
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

            }

            .tags-tail {
                & {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .add-tag {
                    height: 2rem;
                    font-size: 1.2rem;
                    border-radius: 1rem;
                    width: 8rem;
                    padding-left: 0.4rem;
                }
            }
        }



    }

    .types {


        .types-content {
            & {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }

            .types-list {
                & {

                    display: flex;
                    gap: 8px;
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

            }

            .types-tail {
                & {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .add-type {
                    height: 2rem;
                    font-size: 1.2rem;
                    border-radius: 1rem;
                    width: 8rem;
                    padding-left: 0.4rem;
                }
            }
        }



    }


}
</style>