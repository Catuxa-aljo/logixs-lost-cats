<script setup>
import Header from './components/header/Header.vue'
import LoginForm from './components/form/Login.vue'
import CatList from './components/cats/CatList.vue'

</script>

<template>
  
  <header>
    <Header />
  </header>

  <main>
    <router-link to="/">Go to Home</router-link>
  </main>
  <div>
    <router-view></router-view>    
  </div>
</template>



