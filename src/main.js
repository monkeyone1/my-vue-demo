import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,

  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
