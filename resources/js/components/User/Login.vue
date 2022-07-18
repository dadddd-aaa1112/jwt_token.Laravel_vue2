<template>
<div>
    Login
    <div class="w-25 form-control">
        <input type="email" v-model="email">
        <input type="password" v-model="password">
        <button @click="loginUser">login</button>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Login",
    data() {
        return {
            email: null,
            password: null
        }
    },
    methods: {
        loginUser() {
            axios.post('/api/auth/login', {
                email: this.email,
                password: this.password
            })
                .then(res => {
                    localStorage.setItem('access_token', res.data.access_token)
                    this.$router.push({name: 'fruit.index'})
                })

        }
    }
}
</script>

<style scoped>

</style>
