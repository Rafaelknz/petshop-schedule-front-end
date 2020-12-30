import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.use(VueResource)
Vue.use(VueRouter)
const router = new VueRouter({routes, mode: 'history'})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
