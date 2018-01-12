import Vue from 'vue'
import Router from 'vue-router'
import Company from '@/components/Company'
import News from '@/components/News'
import Product from '@/components/Product'
import Detail from '@/components/Detail'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/index'},
    {
      path:'/detail',
      name:'Detail',
      component:Detail,
      children:[
        {
          path:'/detail/:link',
          name:'DetailLink',
          component:Detail,
        }
      ],
    },{
      path:'/index',
      name:'Index',
      component:Index,
    },
    {
      path:'/company',
      name: 'Company',
      component: Company,
      children:[
        {
          path:'/company/:id',
          name: 'CompanyDetail',
          component: Company,

        }
      ],
    },
    {
      path: '/news',
      name: 'News',
      component: News,
    },
    {
      path: '/product',
      name: 'Product',
      component: Product,
      children:[
        {
          path:'/product/:brand',
          name: 'ProductBranch',
          component: Product,
        }
      ],
    }
  ]
})
