import Vue from 'vue'
import Router from 'vue-router'
import load from './load'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'//重定向到home页面
    },
    {
      path:"/about",
      name:"about",
      meta:{
        name:'关于',
        requireAuth:true
      },
      component:load('view','About')
    },
    {
      path:"/home",
      name:"home",
      meta:{
        name:'首页',
      },
      component:load('view','Home')
    },
    {
      path:"/user",
      name:"user",
      meta:{
        name:'用户登录'
      },
      component:load('view','User')
    },
  ]
})
//先把所有的页面写好，view放页面，components放一些可以复用的组件

