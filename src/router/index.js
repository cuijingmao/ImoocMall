import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from './../views/GoodsList.vue'
import Title from '@/views/Title'
import Image from '@/views/Image'
import Cart from '@/views/Cart'
Vue.use(Router)

export default new Router({
  mode:'hash',
  routes: [
    {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of 95cc8dc... Revert "3-2动态路由设置(GoodsList.vue)）"
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
    }
  ]
})
