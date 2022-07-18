<template>
    <div>
        Register
        <div class="w-25 form-control">

            <input type="text" placeholder="name" v-model="name">
            <input type="email" placeholder="email" v-model="email">
            <input type="password" placeholder="password" v-model="password">
            <input type="password" placeholder="password confirmed" v-model="password_confirm">
            <button @click="registerUser">register</button>
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
            password_confirm: null
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
                    console.log(res)
                    // this.$router.push({name: 'user.login'})
                })
        }
    }
}
</script>

<style scoped>

</style>
