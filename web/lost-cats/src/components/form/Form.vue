<script setup>  

      import service from '../../services/user.services.js';

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

      function sendForm() {
        event.preventDefault(); 
        console.log(props.email)
        //service.login(email, password)
         //   .then(user => console.log(user))
         //router.push({path: "/cats"})
         
        
    }
</script>

<template>
    
        <input 
            type="text" 
            placeholder="Insert your email" 
            name="email" 
            :value="email"
            @input="$emit('update:email', $event.target.value)"
        />
        <input 
            type="password" 
            placeholder="Type your password" 
            name="password"
            @input="$emit('update:password', $event.target.value)"
            required
            />
        
   
</template>