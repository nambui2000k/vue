import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Applicants from '../views/Applicants.vue'
import Login from '../views/Login.vue'
import Pets from '../views/Pets.vue'
import store from '../store'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/applicants',
        name: 'Applicants',
        component: Applicants,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/pets',
        name: 'Pets',
        component: Pets,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            requiresVisitor: true
        }
    },
]

const router = new VueRouter({
    mode: "history",
    routes
})
router.beforeEach(((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.loggedIn) {
            next({name: "Login"})
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.requiresVisitor)) {
        if (store.getters.loggedIn) {
            next({name: "Home"})
        } else {
            next()
        }
    } else {
        next()
    }
}))

export default router
