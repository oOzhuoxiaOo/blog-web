import { onMounted,onUnmounted } from "vue";
import { useMdStore } from '@/store/md'

export const useChapterScroll = ()=>{
    
    
    const store = useMdStore()
    function handleScroll(){
        console.log('window事件运行中')
        const scrollTop = Math.ceil(window.scrollY);
        const headings = store.chapterDomArr
        for (let i = headings.length - 1; i >= 0; i--) {
            const heading = headings[i]
            if (Math.ceil(heading.offsetTop) <= scrollTop) {
                // console.log('小于了',heading)
                // heading.classList.add('border-test')
                store.chapterIdx = i
                break
    
            }
        }
    }
    
    // 监听页面滚动
    onMounted(() => {
    
    window.addEventListener('scroll', handleScroll)
    
    })
    
    // 卸载页面滚动
    onUnmounted(()=>{
    window.removeEventListener('scroll',handleScroll)
    })



}