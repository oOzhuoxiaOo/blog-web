<template>
    <svg t="1691839000859" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="12243" 
        :width="width" :height="height">
        <path
            d="M890.336 330.912c-12.576-12.416-32.8-12.352-45.248 0.192L517.248 661.952 184.832 332.512c-12.576-12.448-32.8-12.352-45.28 0.192-12.448 12.576-12.352 32.832 0.192 45.28l353.312 350.112c0.544 0.544 1.248 0.672 1.792 1.184 0.128 0.128 0.16 0.288 0.288 0.416 6.24 6.176 14.4 9.28 22.528 9.28 8.224 0 16.48-3.168 22.72-9.472l350.112-353.312C902.976 363.616 902.88 343.36 890.336 330.912z"
            p-id="12244"></path>
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