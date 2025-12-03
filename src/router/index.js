import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'
// import Search from '@/views/search'
// import SearchList from '@/views/search/list'
import store from '@/store'
const ProDetail = () => import('@/views/prodetail')
const Login = () => import('@/views/login')
const Pay = () => import('@/views/pay')
const MyOrder = () => import('@/views/myorder')

const Home = () => import('@/views/layout/home')
const Category = () => import('@/views/layout/category')
const Cart = () => import('@/views/layout/cart')
const User = () => import('@/views/layout/user')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      name: 'login',
      path: '/login', // path设置为/login
      component: Login
    },
    {
      path: '/',
      component: Layout
    },
    // {
    // path: '/search',
    // component: Search
    // },
    // {
    //   path: '/searchlist',
    //   component: SearchList
    // },
    {
      path: '/prodetail/:id',
      component: ProDetail
    },
    {
      path: '/pay',
      component: Pay
    },
    {
      path: '/myorder',
      component: MyOrder
    },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        { path: '/home', component: Home },
        { path: '/category', component: Category },
        { path: '/cart', component: Cart },
        { path: '/user', component: User }
      ]
    }
  ]

})
const authUrl = ['/pay', '/myorder']
router.beforeEach((to, from, next) => {
  const token = store.getters.token
  if (!authUrl.includes(to.path)) {
    next()
    return
  }

  if (token) {
    next()
  } else {
    next('/login')
  }
})
export default router
