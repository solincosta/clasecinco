import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//Añadir mi nueva vista
import InicioView from '../views/InicioView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: InicioView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
