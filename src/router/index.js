import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import View from '../components/View.vue'
import View2 from '../components/View2.vue'
import View3 from '../components/View3.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/home/:id/',
        name: 'home1',
        component: View,
        children: [{
          path: '/home/:id/he',
          name: 'home2',
          component: View2,
          children: [{
            path: '/home/:id/he/:id',
            name: 'home3',
            component: View3
          }]
        
        }]
      },
    ]
  },
 
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
