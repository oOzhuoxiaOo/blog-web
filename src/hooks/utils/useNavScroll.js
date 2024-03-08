const isHide = ref(false)
const oldScrollY = ref(0)

import { onMounted, ref, onUnmounted, reactive } from "vue";

import { throttle } from "@/hooks/utils/commonFn";

const rules = reactive(
    {
        hideDistance: 300,//滚动高度限制
        delay:300 // 节流时间间隔
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

    // 将滚动处理函数包装成节流式滚动处理
    const scrollHandleThrottle = throttle(scrollHandle,rules.delay)

    onMounted(() => {
        window.addEventListener('scroll', scrollHandleThrottle)
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', scrollHandleThrottle)

    })

    return {
        isHide,
        rules
    }


}  
