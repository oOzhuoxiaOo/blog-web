<template>
    <div class="cart-note-item">
        <div :class="['note-item-pic', order ? 'after' : '']" :data-src="stylePic.backgroundImage" v-lazy></div>
        <div class="note-introduce">
            <div class="introduce-tips">
                <div class="publish-date">{{ filteredDate }}</div>
                <!-- <span class="time">33分钟</span> -->
            </div>
            <h2 class="note-title">{{ note.title }}</h2>
            <div class="note-description">
                {{ note.description }}
            </div>
        </div>
    </div>
</template>

<script setup>
import moment from "moment";
import { defineProps, computed, ref, reactive, onMounted } from "vue";
// import defaultImgSrc from "../../assets/images/animations/rows/Pz-0050.jpg";

// 默认图片路径
let defaultImgSrc = "/src/assets/images/animations/rows/Pz-0050.jpg";
const props = defineProps(["note", "order"]);
const note = props.note;
// 计算属性格式化时间
const filteredDate = computed(() => {
    return moment(note.createTime).format("yyyy-MM-DD  HH:mm:ss");
});

// 图片路径
const stylePic = reactive({
    backgroundImage: defaultImgSrc,
});

// 如果传入图片，就使用传入图的url
if (note.img.isHasImg) {
    stylePic.backgroundImage = note.img.imgUrl;
}
</script>

<style lang="less" scoped>
.cart-note-item {
    transition: 0.5s all;
    border: var(--debug-border);
    height: 250px;
    display: flex;
    background-color: var(--secondary-bg-color);
    box-shadow: var(--cart-shadow);
    border-radius: 0.5rem;
    overflow: hidden;

    // 右内容
    .note-introduce {
        flex: 1;
        padding: 1.5rem;
        overflow: hidden;
        .note-title {
            /* flex: 1; */
            margin: 1rem 0;
            color: rgb(255, 94, 94);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .note-description {
            color: var(--other-text-color);
            line-height: 2rem;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            /* white-space: nowrap; */
            text-overflow: ellipsis;
        }

        .introduce-tips {
            display: flex;
            justify-content: flex-end;

            .publish-date {
                /* width: 100%; */
                text-align: right;
                color: var(--secondary-text-color);
            }
        }
    }

    // 左图
    .note-item-pic {
            width: 40%;
            background: no-repeat center / cover;
            clip-path: polygon(0 0, 90% 0, 100% 100%, 0 100%);
            transition: all 0.3s;

            &.after {
                order: 1;
                clip-path: polygon(0 0, 100% 0, 100% 100%, 10% 100%);
            }
        }

    &:hover {
        .note-item-pic {
            /* background-size: 120%; */
            transform: scale(1.08);
        }
    }

    @media (max-width: 420px) {
        & {
            height: 400px;
            flex-direction: column;
            border-radius: 0;
        }

        .note-item-pic {
            width: 100%;
            height: 45%;

            &.after {
                order: 0;
                clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            }
        }
    }
}
</style>
