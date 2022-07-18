<template>
    <div>
        Register
        <div class="w-25 form-control">

            <input type="text" placeholder="name" v-model="name">
            <input type="email" placeholder="email" v-model="email">
            <input type="password" placeholder="password" v-model="password">
            <input type="password" placeholder="password confirmed" v-model="password_confirm">
            <button @click="registerUser">register</button>
            <p v-if="error" class="text-danger">{{this.error}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "Register",
    data() {
        return {
            name: null,
            email: null,
            password: null,
            password_confirm: null,
            error: null
        }
    },
    methods: {
        registerUser() {

            axios.post('/api/users', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirm
            })
                .then(res => {
                    localStorage.setItem('access_token', res.data.access_token)
                    this.$router.push({name: 'user.personal'})
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
