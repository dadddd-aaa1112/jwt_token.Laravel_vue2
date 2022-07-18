<template>
    <div>
        Index component dd
        <nav>
            <ul>
                <router-link :to="{name: 'fruit.index'}">Index</router-link>
                <router-link v-if="!token" :to="{ name: 'user.login'}">Login</router-link>
                <router-link v-if="!token" :to="{name: 'user.register'}">Register</router-link>
                <router-link v-if="token" :to="{name: 'user.personal'}">Personal</router-link>
                <a v-if="token" href="" @click.prevent="logoutUser">logout</a>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
import api from "../api";

export default {
    name: "Index",
    data() {
        return {
            token: null
        }
    },
    methods: {
        getToken() {
            this.token = localStorage.getItem('access_token')
        },
        logoutUser() {
            api.post('/api/auth/logout')
                .then(res => {
                    localStorage.removeItem('access_token')
                    this.$router.push({name: 'user.login'})
                })
        }
    },
    mounted() {
        this.getToken()
    },
    updated() {
        this.getToken()
    }
}
</script>

<style scoped>

</style>
