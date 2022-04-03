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
    <div key= index class="card-deck__item" >
        <img v-bind:src="data.img" :alt="data.name" />
        <div>
            <h3>{{ data.name }}</h3>
            <h4>Description</h4>
            <p>{{ data.description }}</p>
            <h4><i class="fa-solid fa-calendar-xmark"></i> Lost at: {{ data.date }}</h4>
        </div>
    </div>
</template>

