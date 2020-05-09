import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/Auth.vue'
// import HomePage from '../views/HomePage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    redirect: 'home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/HomePage.vue')
      },
      {
        path: '/follower',
        name: 'Follower',
        component: () => import('../views/Follower.vue')
      },
      {
        path: '/following',
        name: 'following',
        component: () => import('../views/Following.vue')
      },
      {
        path: '/respositry',
        name: 'Respositry',
        component: () => import('../views/Respositry.vue')
      }
    ]
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
