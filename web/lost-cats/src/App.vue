<script setup>
import Header from './components/header/Header.vue'
import LoginForm from './components/auth/Login.vue'
import CatList from './components/cats/CatList.vue'
import Footer from './components/misc/Footer.vue'

</script>

<template>
  
  <header>
    <Header />
  </header>

  <main>
     <router-view></router-view>    
  </main>
  <Footer />
</template>



