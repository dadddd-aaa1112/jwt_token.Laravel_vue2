import VueRouter from "vue-router";
import Vue from 'vue';
import Index from "./components/Fruit";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import Personal from "./components/User/Personal";

Vue.use(VueRouter)

const route = new VueRouter({
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
            path: '/users/register',
            component: Register,
            name: 'user.register'
        },
        {
            path: '/users/personal',
            component: Personal,
            name: 'user.personal'
        },
        {
            path: '*',
            component: Personal,
            name: '404'

        }

    ]
})

route.beforeEach((to, from, next) => {
    const accessToken = localStorage.getItem('access_token');

    if (!accessToken) {
        if (to.name === 'user.login' || to.name === 'user.register') {
            return next()
        } else {
            return next({
                name: 'user.login'
            })
        }

    }

    if (to.name === 'user.login' || to.name === 'user.register' && accessToken) {
        return next({
            name: 'user.personal'
        })
    }

    next()
})

export default route
