import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/news',
    name: 'news',
    component: () => import(/* webpackChunkName: "about" */ '../views/news.vue')
  },
  {
    path: '/info',
    name: 'info',
    component: () => import(/* webpackChunkName: "about" */ '../views/info.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
