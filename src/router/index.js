import Vue from 'vue'
import Router from 'vue-router'
import Home from "../views/Home.vue"
import Buy from "../views/Buy.vue"
import { publicPath } from '../../vue.config'
Vue.use(Router
)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,

    }, {
        path: '/buy',
        name: 'Buy',
        component: Buy,

    }
]

const router = new Router({
    mode: 'history',
    base: publicPath,
    routes
})

export default router;
