import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import bibliothèque from '../views/Bibliothèque.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/bibliotheque',
      name: 'bibliothèque',
      component: () => import('../views/Bibliothèque.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Contactez-nous',
      name: 'Contactez-nous',
      component: () => import('../views/Contactez-nous.vue')
    },
    {
      path: '/login',
      name: 'login',
      
      component: () => import('../views/login.vue')
    },
    {
      path: '/myaccount',
      name: 'my-account',
      component: () => import('../views/my-account.vue')
    }
  ]
})

export default router
