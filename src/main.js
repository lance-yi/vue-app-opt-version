import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores/store'
import './registerServiceWorker'
import './assets/sass/main.sass'
import './utils/rem'
import Scroll from './components/Scroll'

Vue.config.productionTip = false
/* 加载自定义组件 */
Vue.component('Scroll', Scroll)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
