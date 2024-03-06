<template>
    <div class="note-content">
        <div class="main-info">
            <div class="cart-info main-info-date">
                <IconClock />
                <div class="note-date">{{ filteredDate }}</div>
            </div>
            <!-- 类别 -->
            <div class="cart-info main-info-date">
                <IconClock />
                <div class="note-date">{{ noteItem.type.typename }}</div>
            </div>
            <div class="main-info-tags">
                <div class="cart-info tag-item" v-for="item in noteItem.tags">
                    <IconTag />
                    <div class="tag-title">{{ item.tagname }}</div>
                </div>

            </div>
            <div class="line"></div>
            <!-- <div class="note-description">{{ noteItem.title }}</div> -->
        </div>
        <div class="markdown-body mdBody" v-html="noteItem.mdHtml" ref="noteContentDomRef"></div>
        <div class="comments">
            <div class="title">评论</div>
            <div class="inputBox">
                <div class="top">
                    <div class="nickname">
                        <input type="text" class="nickname-input" placeholder="昵称" v-model="nickname">
                    </div>
                    <div class="email">
                        <input type="email" class="email-input" placeholder="邮箱" v-model="email">
                    </div>
                    <div class="web">
                        <input type="text" class="web-input" placeholder="网站">
                    </div>
                </div>
                <div class="content">
                    <textarea name="" class="content-input" placeholder="内容" v-model="content"></textarea>
                </div>
                <el-button type="primary" class="publish-comment" @click="handlePublishComment(1)">发布评论</el-button>
            </div>
            <div class="commentList">
                <div class="comment-item" v-for="(item, idx) in noteItem.comments" :key="idx">
                    <div class="flex-left">
                        <div class="avatar">
                            <img :src="'https://gravatar.com/avatar/'+stringToHash(item.email)"
                                alt="">
                        </div>
                    </div>
                    <div class="flex-right">
                        <div class="nickname">{{ item.nickname }}</div>
                        <div class="content">{{ item.content }}</div>
                        <div class="other">
                            <div class="time">{{ moment(item.createdAt).format("yyyy-MM-DD") }}</div>
                            <div class="review" @click="handleDialogToggle(item._id,item.nickname)">回复</div>

                        </div>
                        <div class="comment-level2-list">
                            <div class="leve2-item" v-for="(childItem, i) in item.children" :key="i">
                                <div class="flex-left">
                                    <div class="avatar">
                                        <img :src="'https://gravatar.com/avatar/'+stringToHash(childItem.email)"
                                            alt="">
                                    </div>
                                </div>
                                <div class="flex-right">
                                    <div class="nickname">{{ childItem.nickname }}</div>
                                    <div class="content">{{ "回复 " }}<span class="reviewName">{{ "@" +
                    childItem.targetNickName }}</span> {{ "：" }} {{ childItem.content }}</div>
                                    <div class="other">
                                        <div class="time">{{ moment(childItem.createdAt).format("yyyy-MM-DD") }}</div>
                                        <div class="review" @click="handleDialogToggle(item._id,childItem.nickname)">回复</div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog v-model="dialogVisible" title="回复" width="500" :before-close="handleClose">
            <div class="comon-inputBox">
                <div class="top">
                    <div class="nickname">
                        <input type="text" class="nickname-input" placeholder="昵称" v-model="nickname">
                    </div>
                    <div class="email">
                        <input type="email" class="email-input" placeholder="邮箱" v-model="email">
                    </div>
                    <div class="web">
                        <input type="text" class="web-input" placeholder="网站">
                    </div>
                </div>
                <div class="content">
                    <textarea name="" class="content-input" placeholder="内容" v-model="content"></textarea>
                </div>

            </div>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="handlePublishComment(2)">
                        发布评论
                    </el-button>
                </div>
            </template>
        </el-dialog>

    </div>
</template>

<script setup>
import { onBeforeMount, onMounted, onUnmounted, ref, reactive, computed } from "vue";
import { useMdStore } from '@/store/md'
import { useRoute } from "vue-router";
import moment from "moment";

import { useChapterScroll } from "@/hooks/note/useChapterScroll";

import IconClock from "@/components/icons/IconClock.vue";
import IconTag from "@/components/icons/IconTag.vue";



// 哈希
import { SHA256 } from "crypto-js";
function stringToHash(inputString){
  const hashedString = SHA256(inputString).toString();
  return hashedString;
}



const store = useMdStore()
const route = useRoute()

useChapterScroll()

const noteIndex = route.query.noteIndex;

const noteItem = store.notesData[noteIndex];



const noteContentDomRef = ref() //获取dom元素



// 计算属性格式化时间
const filteredDate = computed(() => {
    return moment(noteItem.createTime).format('yyyy-MM-DD')
})




// 挂载dom时
onMounted(() => {
    const noteContentDomNodeList = noteContentDomRef.value.querySelectorAll('h1,h2,h3,h4,h5,h6')
    const chapterArr = Array.from(noteContentDomNodeList).map((dom) => {
        return {
            title: dom.textContent, //标题
            level: parseInt(dom.tagName.slice(1)) //级别
        }
    })
    store.chapterDomArr = noteContentDomNodeList
    store.chapterArr = chapterArr
})

onUnmounted(() => {

})


// 评论
import { postBlogComment } from "@/apis/comment.js";
import { ElMessage } from "element-plus";

let type = ref(1);
let noteid = ref("");
let nickname = ref("");
let email = ref("");
let content = ref("");
let targetNickName = ref("");
let who = ref("");

noteid.value = noteItem._id;
const handlePublishComment = async (level) => {
    dialogVisible.value = false;
    type.value = level;
    const sendData = {
        type: type.value,
        noteid: noteid.value,
        nickname: nickname.value,
        email: email.value,
        content: content.value
    }
    if(type.value == 2) {
        sendData.targetNickName = targetNickName.value;
        sendData.who = who.value;

    }

    const resData = await postBlogComment(sendData);
    ElMessage.success(resData.message)
}

// 回复
import { ElMessageBox } from 'element-plus'

const dialogVisible = ref(false)
const clearInputComment = () => {
    nickname.value = "";
    email.value = "";
    content.value = "";
}

const handleDialogToggle = (commentId,commentName) => {
    dialogVisible.value = true
    who.value = commentId;
    targetNickName.value = commentName;
    clearInputComment();

}

</script>

<style lang="less" scoped>
@input-padding: 5px;
@input-font-size: 1rem;

.reviewName {
    color: rgb(44, 216, 207);
}

.comments {
    .title {
        font-size: 1.2rem;
        color: #fff;
        font-weight: 700;
        margin: 20px 0 20px;
    }

    .inputBox {
        @width-input: 30%;
        display: flex;
        flex-wrap: wrap;
        gap: 15px 5px;

        // border: solid;
        // background-color: #000000;
        .top {
            display: flex;
            justify-content: space-between;
            gap: 30px;

            .nickname {

                // width: @width-input;
                .nickname-input {
                    width: 100%;
                    padding: @input-padding;
                    font-size: @input-font-size;
                }
            }

            .email {

                // width: @width-input;
                .email-input {
                    width: 100%;
                    padding: @input-padding;
                    font-size: @input-font-size;
                }
            }

            .web {

                // width: @width-input;
                .web-input {
                    width: 100%;
                    padding: @input-padding;
                    font-size: @input-font-size;
                }
            }
        }

        .publish-comment {
            margin-left: auto;
            // margin-top: 8px;
        }

        .content {
            width: 100%;

            .content-input {
                border: none;
                outline: none;
                resize: none;
                width: 100%;
                height: 125px;
                line-height: 1.2rem;
                padding: @input-padding;
                font-size: @input-font-size;
            }
        }
    }

    .commentList,
    .comment-level2-list {
        display: flex;
        flex-direction: column;
        gap: 16px;

        .comment-item,
        .leve2-item {
            display: flex;
            gap: 15px;

            .flex-left {
                .avatar {
                    width: 60px;
                    height: 60px;

                    img {
                        width: 100%;
                        height: 100%;
                        // border-radius: 50%;
                        object-fit: cover;
                    }
                }
            }

            .flex-right {
                flex: 1;

                .content {
                    margin-top: 5px;
                    border-radius: 5px;
                    padding: 30px;
                    border: 1px solid red;
                    box-shadow: 5px 5px 5px #FF6666;
                }

                .other {
                    display: flex;
                    gap: 15px;
                    line-height: 1;
                    margin-top: 10px;
                    font-size: 14px;

                    .review {
                        color: rgb(64, 150, 44);
                    }
                }


            }
        }
    }

    .comment-level2-list {
        margin-top: 16px;
        gap: 16px;
    }
}

.comon-inputBox {
        @width-input: 30%;
        display: flex;
        flex-wrap: wrap;
        gap: 15px 5px;

        // border: solid;
        // background-color: #000000;
        .top {
            display: flex;
            justify-content: space-between;
            gap: 30px;

            .nickname {

                // width: @width-input;
                .nickname-input {
                    width: 100%;
                    padding: @input-padding;
                    font-size: @input-font-size;
                }
            }

            .email {

                // width: @width-input;
                .email-input {
                    width: 100%;
                    padding: @input-padding;
                    font-size: @input-font-size;
                }
            }

            .web {

                // width: @width-input;
                .web-input {
                    width: 100%;
                    padding: @input-padding;
                    font-size: @input-font-size;
                }
            }
        }

        .publish-comment {
            margin-left: auto;
            // margin-top: 8px;
        }

        .content {
            width: 100%;

            .content-input {
                border: none;
                outline: none;
                resize: none;
                width: 100%;
                height: 125px;
                line-height: 1.2rem;
                padding: @input-padding;
                font-size: @input-font-size;
            }
        }
    }

.main-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 2.5rem;
    gap: 0.5rem;
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

.note-content {
    border-radius: 0.5rem;
    padding: 30px 30px;
    background-color: #0d1117;

    @media (max-width: 720px) {
        width: 100vw;
    }
}

.main-info-tags {
    // width: 100%;
    /* margin-top: 10px; */
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.line {
    width: 100%;
    border-bottom: double 3px rgb(155, 47, 47);
    margin-top: 1.5rem;
    /* flex-shrink: ; */
}

.note-description {
    margin-top: 1.5rem;
}
</style>