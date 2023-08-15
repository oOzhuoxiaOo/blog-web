const isHide = ref(false)
const oldScrollY = ref(0)

import { onMounted, ref, onUnmounted, reactive } from "vue";


const rules = reactive(
    {
        hideDistance: 300 //滚动高度限制
    }

)
export const useNavScroll = () => {

    function scrollHandle() {
        const scrollY = window.scrollY //当前滚动距离
        const { hideDistance } = rules //隐藏的台阶高度限制
        const scrollStep = scrollY - oldScrollY.value //滚动台阶(方向)
        // oldScrollY.value = scrollY //将旧的滚动位置更新
        if (scrollStep >= hideDistance) {
            isHide.value = true //根据滚动方向决定是否隐藏
            oldScrollY.value = scrollY
        }

        if (scrollStep <= -hideDistance) {
            isHide.value = false //根据滚动方向决定是否隐藏
            oldScrollY.value = scrollY
        }

    }

    onMounted(() => {
        window.addEventListener('scroll', scrollHandle)
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', scrollHandle)

    })

    return {
        isHide,
        rules
    }


}  
