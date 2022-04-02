<script setup>  
   defineProps({
            genre: {
                type: String,
                default: ''
            },
            email: {
                type: String,
                default: ''
            },
            password: {
                type: String,
                default: ''
            }
       })
</script>

<template>
    <form method="post" action="">
        <input 
            type="text" 
            placeholder="Insert your email" 
            name="email" 
            :value="email"
            @input="$emit('update:email', $event.target.value)"
            required
        />
        <input 
            type="password" 
            placeholder="Type your password" 
            name="password"
            @input="$emit('update:password', $event.target.value)"
            required
            />
        <button type="submit"> Send </button>
    </form>
</template>