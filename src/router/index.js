import Vue from 'vue'
import store from '../store'
import Router from 'vue-router'
import Home from '@/pages/Home'
import About from '@/pages/About'
import QuemSomos from '@/pages/QuemSomos'
import Servicos from '@/pages/Servicos'
import Consultoria from '@/pages/Consultoria'
import Orcamento from '@/pages/Orcamento'
import Contato from '@/pages/Contato'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/consultoria',
            name: 'Consultoria',
            component: Consultoria
        },
        {
            path: '/contato',
            name: 'Contato',
            component: Contato
        },
        {
            path: '/orcamento',
            name: 'Orcamento',
            component: Orcamento
        },
        {
            path: '/quemsomos',
            name: 'QuemSomos',
            component: QuemSomos
        },
        {
            path: '/servicos',
            name: 'Servicos',
            component: Servicos
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/admin',
            name: 'admin',
            meta: {
                requiresAuth: true
            },
        },
    ],
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters['Auth/authStatus']) {
            next()
            return
        }
        next('/login')
    } else {
        next()
    }
})

export default router