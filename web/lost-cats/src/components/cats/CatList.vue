<script setup>
    import data from '../../data/cats.json'
    import Cat from './Cat.vue'
    const dataCats = data.data
</script>

<template>

<div v-for="(cat, index) in dataCats">
  <Cat :data="cat" :index="index" />
</div>


</template>