<script setup>
    import service from '../../services/user.services.js'
    import router from '../../main.js'
    function sendForm() {
        event.preventDefault();
        service.logout()
            .then(() => router.push({path: "/"}) )
            .catch(error => console.error(error))
    }

</script>

<template>
    <div class="login">
        <img src="../../assets/img/no-cat.png" alt="A very angry cat" class="login" />
        <div class="form">
            <h1> Logout </h1>
            <h2> It seems that you have already log!</h2>
            <form v-on:submit="sendForm">
                <button>Logout</button>
            </form>
        </div>
    </div>
</template>