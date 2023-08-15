<template>
    <div class="cart-note-item">
        <div :class="['note-item-pic', order ? 'after' : '']" :style="stylePic"></div>
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
import defaultImgSrc from "../../assets/images/animations/rows/Pz-0050.jpg";

const props = defineProps(['note', 'order'])
const note = props.note
// 计算属性格式化时间
const filteredDate = computed(() => {
    return moment(note.createTime).format('yyyy-MM-DD  HH:mm:ss')
})


const stylePic = reactive({
    backgroundImage: `url("${defaultImgSrc}")`
})


if (note.img.isHasImg) {
    stylePic.backgroundImage = `url("${note.img.imgUrl}")`
}




</script>

<style  scoped>
.cart-note-item {
    border: var(--debug-border);
    height: 250px;
    display: flex;
    background-color: var(--secondary-bg-color);
    box-shadow: var(--cart-shadow);
    border-radius: 0.5rem;
    overflow: hidden;
}

.cart-note-item:hover .note-item-pic {
    /* background-size: 120%; */
    transform: scale(1.08);
}

.after {
    order: 1;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 10% 100%) !important;
}

.note-item-pic {
    min-width: 40%;
    background: url('@/assets/images/animations/rows/Pz-0019.jpg') no-repeat center / cover;
    clip-path: polygon(0 0, 90% 0, 100% 100%, 0 100%);
    transition: all 0.3s;
}

.note-introduce {
    flex: 1;
    padding: 1.5rem;
    overflow: hidden;
}

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









.pic {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: url("/src/assets/images/animations/rows/Pz-0020.jpg") center / cover;
    z-index: -10;
}

.pic::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .5);
    z-index: -9;
}

.introduce-tips {
    display: flex;
    justify-content: flex-end;
}

.publish-date {
    /* width: 100%; */
    text-align: right;
    color: var(--secondary-text-color);
}
</style>