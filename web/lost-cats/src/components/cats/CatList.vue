<script setup>
    import data from '../../data/cats.json'
    import Cat from './Cat.vue'
    const dataCats = data.data
</script>

<template>
  <h1>This cats are lost!</h1>
  <h2>Holiss</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac ligula neque. Etiam pulvinar mi eget urna dignissim maximus. Integer viverra, lacus in elementum molestie, felis sapien eleifend turpis, sed faucibus ex nibh sit amet sem. Vestibulum a mi a ex mattis egestas id a est. Vestibulum ornare nulla eget condimentum dictum. Fusce egestas sapien nec erat consectetur hendrerit id ac massa. Quisque lobortis ac elit et blandit.</p>
  <div class="card-deck">
    <div v-for="(cat, index) in dataCats">
      <Cat :data="cat" :index="index" />
    </div>
  </div>


</template>