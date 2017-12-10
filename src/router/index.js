import Vue from 'vue'
import Router from 'vue-router'
import Company from '@/components/Company'
import News from '@/components/News'
import Product from '@/components/Product'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/detail',
      name:'Detail',
      component:Detail,
    },
    {
      path:'/company',
      name: 'Company',
      component: Company,
      children:[
        {
          path:'/company/:id',
          name: 'Company',
          component: Company,

        }
      ],
    },
    {
      path: '/',
      name: 'News',
      component: News,
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    }
  ]
})
