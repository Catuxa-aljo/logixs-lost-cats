<script setup>
 defineProps({
        data: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    })
</script>

<template>
    <div key = index >
        <h3>{{ data.name }}</h3>
        <p>Cat description</p>
        <h4>Lost data</h4>
    </div>
</template>

