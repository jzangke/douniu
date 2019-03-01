import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/home/home'
import Classify from "../components/classify/classify";
import Cart from "../components/cart/cart";
import My from "../components/my/my";
import Detail from "../components/detail/detail.vue";
import ErrorCom from "../components/error"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    {
      path: '/home',
      name: 'home',
     // component: Home
     //vue提供的一种方法  异步组件
     //component:(resolve)=>require(["../components/home/home.vue"],resolve)
     component:()=>import("../components/home/home")
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path:"/detail",
      name:"detail",
      component:Detail
    },
    {
      path:"**",
      component:ErrorCom
    }
  ]
})
