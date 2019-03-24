import Vue from 'vue'
import Router from 'vue-router'
import SignIn from './components/User/SignIn.vue'
import SignUp from './components/User/SignUp.vue'
import Interface from './components/Interface/Interface.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
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
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
