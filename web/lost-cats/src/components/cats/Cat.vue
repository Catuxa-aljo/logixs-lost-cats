<script setup>
 defineProps({
        data: {
            type: Array,
            required: true
        }
    })
</script>

<template>
    <div>
        <h3>{{ data.name }}</h3>
        <p>Cat description</p>
        <h4>Lost data</h4>
    </div>
</template>

