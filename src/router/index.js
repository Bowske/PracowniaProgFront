import Vue from 'vue'
import VueRouter from 'vue-router'
import Wynajmy from '../views/Wynajmy.vue'
import Ubezpieczenia from '../views/Ubezpieczenia.vue'
import Przeglady from '../views/Przeglady.vue'
import Najemcy from '../views/Najemcy.vue'
import Mieszkania from '../views/Mieszkania.vue'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/mieszkania',
    name: 'mieszkania',
    component: Mieszkania
  },
  {
    path: '/najemcy',
    name: 'najemcy',
    component: Najemcy
  },
  {
    path: '/przeglady',
    name: 'przeglady',
    component: Przeglady
  },
  {
    path: '/ubezpieczenia',
    name: 'ubezpieczenia',
    component: Ubezpieczenia
  },
  {
    path: '/wynajmy',
    name: 'wynajmy',
    component: Wynajmy
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router