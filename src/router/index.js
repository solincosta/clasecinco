import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//Añadir mi nueva vista
import InicioView from '../views/InicioView.vue'
import AboutView from '../views/AboutView.vue'
import CotizaView from '../views/CotizaView.vue'
import CursoView from '../views/CursoView.vue'
import AllVuelosView from '../views/AllVuelosView.vue'
import LoginView from '../views/LoginView.vue'
import ReservarView from '../views/ReservarView.vue'

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
  {
    path: '/get-vuelos',
    name: 'get-vuelos',
    component: AllVuelosView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/reservar',
    name: 'reservar',
    component: ReservarView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
