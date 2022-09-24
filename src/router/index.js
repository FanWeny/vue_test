import { createRouter, createWebHistory } from 'vue-router'
// createRouter是將路由綁定好
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'
import AboutView from '../views/AboutView.vue'
import CalendarView from '../views/CalendarView.vue'
import ScrollView from '../views/ScrollView.vue'
import FeatrueView from '../views/FeatrueView.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    chName: '首頁',
    component: HomeView
  },
  {
    // path: '/shop',
    // path: '/shop/:productID',
    path: '/shop/:productID(\\d+)',
    name: 'shop',
    chName: '商品區',
    component: ShopView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: CalendarView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/CalendarView.vue')
  },
  {
    path: '/scroll',
    name: 'scroll',
    component: ScrollView
  },
  {
    path: '/featrue',
    name: 'featrue',
    component: FeatrueView
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
