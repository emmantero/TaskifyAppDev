import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FirstPage from '../views/FirstPage.vue'
import LogIn from '../views/LogIn.vue'
import SignUp from '../views/SignUp.vue'
import Footer from '../components/Footer.vue'
import User from '../views/User.vue'
import ToDo from '../views/ToDo.vue'
import Schedule from '../views/Schedule.vue'


// import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/firstpage',
    name: 'FirstPage',
    component: FirstPage
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/signup',
    name: '/SignUp',
    component: SignUp
  },
  {
    path: '/footer',
    name: 'Footer',
    component: Footer
  },
  {
    path: '/user',
    name: 'User',
    component: User
  }, 
  {
    path: '/schedule',
    name: 'Schedule', 
    component: Schedule
  },
  {
    path: '/todo',
    name: 'ToDo',
    component: ToDo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
