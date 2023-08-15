import { defineStore } from "pinia";
import { ref , reactive } from "vue";
import  axios  from "axios";

export const useCommonStore = defineStore('common',()=>{
    const isHideFoot = ref(false)
    const isHideNav = ref(false)

    
    return {
        isHideFoot,
        isHideNav
    }
})