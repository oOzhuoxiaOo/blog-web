<template>
    <svg t="1693467395558" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7705"
        :width="width" :height="height">
        <path d="M417.696 224c0-52.928 43.072-96 96-96s96 43.072 96 96-43.072 96-96 96S417.696 276.928 417.696 224z"
            p-id="7706"></path>
        <path d="M417.696 512c0-52.928 43.072-96 96-96s96 43.072 96 96-43.072 96-96 96S417.696 564.928 417.696 512z"
            p-id="7707"></path>
        <path d="M417.696 800c0-52.928 43.072-96 96-96s96 43.072 96 96-43.072 96-96 96S417.696 852.928 417.696 800z"
            p-id="7708"></path>
    </svg>
</template>

<script setup>
const props = defineProps({
    width: {
        type: [Number, String],
        default: 20
    },
    height: {
        type: [Number, String],
        default: 20
    },
})

</script>