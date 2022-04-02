<script setup>
    import LoginForm from './Form.vue';
    import Logo from '../misc/Logo.vue';
    import service from '../../services/user.services.js';
    import { reactive } from "vue";

    const login = reactive({
      email: '',
      password: ''
    })

</script>

<template>
    <div class="login">
        <div>
            <Logo className="login" />
        </div>
        <div>
            <h2>Login</h2>
            <login-form     
                v-model:email="login.email"
                v-model:password="login.password"
            />
        </div>
    </div>

    <div>
         
  {{ login }}
    </div>
</template>

