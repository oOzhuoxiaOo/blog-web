<script setup>
import CommonNav from "./components/CommonNav.vue"
import CommonFooter from './components/CommonFooter.vue'
import { useCommonStore } from ".//store/common";
import { useParticle } from "@/hooks/utils/useParticle.js";
import { onMounted } from "vue";

const store = useCommonStore()
const particle =  useParticle();
onMounted(()=>{
    particle.clickEffect();
})

</script>

<template>
 <!-- <CommonNav /> -->
 <CommonNav v-show="!store.isHideNav" />
 <router-view></router-view>
 <CommonFooter v-show="!store.isHideFoot" />
</template>

<style scoped>

</style>
