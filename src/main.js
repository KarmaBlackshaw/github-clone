import Vue from './config/vue'
import router from './router'
import App from './App.vue'

import 'reset-css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
