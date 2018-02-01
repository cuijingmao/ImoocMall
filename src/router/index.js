import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from './../views/GoodsList.vue'
import Title from '@/views/Title'
import Image from '@/views/Image'
Vue.use(Router)

export default new Router({
  mode:'hash',
  routes: [
    {
      path: '/goods',
      name: 'GoodsList',
      component: GoodsList,
      children:[
        {
          path:'title',
          name:'title',
          component:Title
        },
        {
          path:'img',
          name:'img',
          component:Image
        }
      ]


    }
  ]
})
