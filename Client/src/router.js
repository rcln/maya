import Vue from 'vue'
import Router from 'vue-router'
import SignIn from './views/SignIn.vue'
import SignUp from './views/SignUp.vue'
import Interface from './views/Interface.vue'

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/Interface',
      name: 'Interface',
      component: Interface
    },
    
  ]
})
