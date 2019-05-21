import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home, meta: { keepAlive: true } },
    { path: '/about',
      name: 'about', // 路线级别代码分隔
      // 这将为该路由生成一个单独的块(about.[hash].js)
      // 当访问路由时，它是惰性加载的。
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: { keepAlive: true }
    },
    { path: '/list', name: 'list', component: () => import('./views/list.vue'), meta: { keepAlive: 'true' } }
  ]
})
