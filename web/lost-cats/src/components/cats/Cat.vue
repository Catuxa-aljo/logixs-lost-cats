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
        <img v-bind:src="data.img" />
        <h3>{{ data.name }}</h3>
        <p>{{ data.description }}</p>
        <h4>{{ data.date }}</h4>
    </div>
</template>

