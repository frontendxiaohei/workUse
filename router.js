import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Cart from './views/Cart.vue'
import store from './store'
import History from './utils/history.js';
Vue.use(Router)
Vue.use(History)

// 实例化之前，拓展Router
Router.prototype.goBack = function () {
  this.isBack = true;
  this.back();
}
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/about',
      name: 'about',
      meta: {auth: true},
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});

// 守卫
router.beforeEach((to,from,next) => {
  if (to.meta.auth) { // 查看路由是否需要登录
    // 需要认证，则检查令牌
    if (store.state.token) { // 已登录
      next();
    } else {// 去登陆
      next({
        path: '/login',
        query: {redirect: to.path}
      })
    }
  } else {
    next();
  }
});
export default router;
