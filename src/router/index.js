import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import News from '@/components/News'
import Product from '@/components/Product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product
    }
  ]
})
