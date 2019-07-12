import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import axios from './backend/vue-axios'
import store from './store/index.js'


Vue.config.productionTip = false

Vue.prototype.$http = axios;

const token = localStorage.getItem('token')

if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({	
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
