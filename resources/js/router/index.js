import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../admin/views/Home'
// import Category from '../admin/views/Category'
// import Tag from '../admin/views/Tag'
// import AdminUser from '../admin/views/AdminUser'
import Login from '../admin/views/Login'


Vue.use(VueRouter)

const Home = () => import('../admin/views/Home');

const routes = [
  {
    path: '/admin',
    name: 'home',
    component: Home
  },
  {
    path: '/admin/category',
    name: 'category',
    component: () => import('../admin/views/Category')
  },
  {
    path: '/admin/tag',
    name: 'tag',
    component: () => import('../admin/views/Tag')
  },
   {
    path: '/admin/adminuser',
    name: 'admin',
    component: () => import( '../admin/views/AdminUser')
  },
  {
    path: '/admin/login',
    name: 'login',
    component: Login
  },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
