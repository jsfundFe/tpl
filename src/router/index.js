import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('views/Index.vue')
const Home = () => import('views/Home.vue')
const routes = [
  {
    name: 'index',
    path: '/index',
    component: Index,
    meta: {
      title: 'Index'
    }
  },
  {
    name: 'home',
    path: '/home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '*',
    redirect: '/index'
  }
]

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: routes
  // scrollBehavior (to, from, savedPosition) { // 滚到顶部
  //   return { x: 0, y: 0 }
  // }
})

// 全局路由配置 路由开始之前的操作
router.beforeEach(async (to, from, next) => {
  // 切换标题
  // document.title = to.meta.title
  // document.querySelector('title').innerText = to.meta.title
  next()
})

// 路由完成之后的操作
router.afterEach((to, from) => {
})

export default router
