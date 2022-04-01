<script setup>
    import LoginForm from './Form.vue'
    import Logo from '../misc/Logo.vue'
</script>

<template>
    <div class="login">
        <div>
            <Logo className="login" />
        </div>
        <div>
            <h2>Login</h2>
            <loginForm />
        </div>
    </div>
</template>