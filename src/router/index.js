import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import manage from  '@/views/manage'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
       path:'/manage',
       name:'manage',
       component:manage
    }
  ]
})
