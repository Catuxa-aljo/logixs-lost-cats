<script setup>
    import LoginForm from './Form.vue';
    import Logo from '../misc/Logo.vue';
    import service from '../../services/user.services.js';
    import { reactive } from "vue";
    import router from '../../main.js'

    const login = reactive({
      email: null,
      password: null
    });

    let message = 'holi';

    function isFormValid () {
      if (!login.email) {
        message= 'Insert your password'
      } else if (!password) {
        message= 'Insert your password'
      } 
    }

    function sendForm() {
        event.preventDefault(); 
        if ( isFormValid()) {       
        service.login(login.email, login.password)
            .then(user => { 
            console.log(user);
            router.push({path: "/cats"} )})
            .catch(error => error)
        }
    }

</script>

<template>
    <div class="login">
        <div>
            <Logo className="login" />
        </div>
        <div class="form">
            <h1>The lost Cats</h1>
            <h2>Login</h2>
            <form v-on:submit="sendForm">
            <login-form     
                v-model:email="login.email"
                v-model:password="login.password"
            />
            
            <button type="submit" > LOGIN </button>
            </form>
        </div>
    </div>
</template>

