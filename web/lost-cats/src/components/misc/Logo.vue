<script setup>
    defineProps({
        className: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <img src="../../assets/img/grumpy.png" alt="Lost Cats" :class="className" />
</template>