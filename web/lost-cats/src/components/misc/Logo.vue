<script setup>
    defineProps({
        className: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <h2> {{ className }} </h2>
    <img src="../../assets/img/grumpy.png" alt="Lost Cats" />
</template>