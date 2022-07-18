import VueRouter from "vue-router";
import Vue from 'vue';
import Index from "./components/Fruit";
import Login from "./components/User/Login";
import Register from "./components/User/Register";

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/fruits',
            component: Index,
            name: 'fruit.index'

        },
        {
            path: '/users/login',
            component: Login,
            name: 'user.login'
        },
        {
            path:'/users/register',
            component: Register,
            name: 'user.register'
        },

    ]
})

