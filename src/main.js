import Vue from 'vue'
import App from './App.vue'
// import Welcome from './Welcome.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from '@/plugins/vuetify'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import global_ from '@/util/Global'
axios.defaults.baseURL = 'http://localhost:8080'

Vue.config.productionTip = false

Vue.prototype.GLOBAL = global_
Vue.use(VueAxios, axios)
Vue.use(ElementUI)

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
