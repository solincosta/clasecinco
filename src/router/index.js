import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//Añadir mi nueva vista
import InicioView from '../views/InicioView.vue'
import AboutView from '../views/AboutView.vue'
import CotizaView from '../views/CotizaView.vue'
import CursoView from '../views/CursoView.vue'

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
  },
  {
    path: '/cursos/:id',
    name: 'CursoView',
    component: CursoView
  },

  {
    path: '/cotizar',
    name: 'cotizar',
    component: CotizaView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
