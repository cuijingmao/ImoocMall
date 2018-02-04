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
<<<<<<< HEAD
      path: '/goods',
=======
      path: '/',
>>>>>>> 7b5a72fd11c942b91b08851ea27904da77e3796d
      name: 'GoodsList',
      components:{
        default:GoodsList,
        title:Title,
        img:Image

      }
    },
    {
      path:'/cart/:cartId',
      name:'cart',
      component:Cart
=======
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
>>>>>>> parent of e104087... 3-2动态路由设置(GoodsList.vue)）
    }
  ]
})
