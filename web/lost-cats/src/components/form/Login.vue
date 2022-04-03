<script setup>
    import LoginForm from './Form.vue';
    import Logo from '../misc/Logo.vue';
    import service from '../../services/user.services.js';
    import { reactive } from "vue";
    import router from '../../main.js'

    const login = reactive({
      email: '',
      password: ''
    })

    function sendForm() {
        event.preventDefault(); 
        service.login(login.email, login.password)
            .then(user => console.log(user))
         //router.push({path: "/cats"})
         
        
    }


</script>

<template>
    <div class="login">
        <div>
            <Logo className="login" />
        </div>
        <div>
            <h2>Login</h2>
            <form v-on:submit="sendForm">
            <login-form     
                v-model:email="login.email"
                v-model:password="login.password"
            />
            <button type="submit" > Click </button>
            </form>
        </div>
    </div>

    <div>
  {{ login }}
    </div>
</template>

