<template>
<div>
    Index component dd
    <nav>
        <ul>
            <router-link :to="{name: 'fruit.index'}">Index</router-link>
            <router-link :to="{ name: 'user.login'}">Login</router-link>
            <router-link :to="{name: 'user.register'}">Register</router-link>

        </ul>
    </nav>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: "Index"
}
</script>

<style scoped>

</style>
