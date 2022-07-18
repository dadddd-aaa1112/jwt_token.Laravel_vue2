<template>
<div>
    Login
    <div class="w-25 form-control">
        <input type="email" v-model="email">
        <input type="password" v-model="password">
        <button @click="loginUser">login</button>
        <p v-if="error" class="text-danger">{{this.error}}</p>

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
            password: null,
            error: null
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
                .catch(error => {
                    this.error = error.response.data.error
                })

        }
    }
}
</script>

<style scoped>

</style>
