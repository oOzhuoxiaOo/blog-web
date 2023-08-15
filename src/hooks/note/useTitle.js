

import { onMounted } from "vue";
import { useMdStore } from '@/store/md'
import { useRoute } from "vue-router";
export const useTitle = ()=>{
    
    const store = useMdStore()
    const route = useRoute()
    onMounted(()=>{
        if(route.meta.hasOwnProperty('title')){
            store.title = route.meta.title
        }
    })
}