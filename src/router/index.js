import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Index_one from '../views/Index_one.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Personal from '../views/Personal.vue'
import Trolley from '../views/Trolley.vue'
import Classify from '../views/Classify.vue'
import Particulars from '../views/Particulars.vue'
import Profile from '../views/Profile.vue'
import Profile0 from '../views/Profile0.vue'
import AboutMeS from '../views/AboutMeS.vue'
import set from '../views/Set.vue'
import Order from '../views/Order.vue'


/*报错原因：使用push()、replace()进行导航时，不能重复导航到当前路由。 */
//解决方法如下
//不懂开始
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
   
}
//不懂结束
// 懒加载组件
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index_one',
    component: Index_one
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/register',
    component:Register
  },
  {
    path:'/index',
    component:Index
  },
  {
    name:'Personal',
    path:'/personal',
    component:Personal
  },
  {
    name:'Trolley',
    path:'/Trolley',
    component:Trolley
  },
  {
    path:'/classify',
    component:Classify
  },
  {
    path:'/particulars/:id',
    component:Particulars
  },
  {
    path:'/Profile',
    component:Profile
  },
  {
    path:'/Profile0',
    component:Profile0
  },
  {
    path:'/AboutMeS',
    component:AboutMeS
  },
  {
    path:'/set',
    component:set
  },
  {
    path:'/Order',
    component:Order
  },



]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

export default router
