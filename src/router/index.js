import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import GoodsList from './../views/GoodsList.vue'
import Title from '@/views/Title'
import Image from '@/views/Image'
import Cart from '@/views/Cart'
=======
import HelloWorld from '@/components/HelloWorld'

>>>>>>> parent of e104087... 3-2动态路由设置(GoodsList.vue)）
Vue.use(Router)

export default new Router({
  routes: [
    {
<<<<<<< HEAD
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


    },
    {
      path:'/cart',
      name:'Cart',
      component:Cart
=======
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
>>>>>>> parent of e104087... 3-2动态路由设置(GoodsList.vue)）
    }
  ]
})
