import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/joker.vue'
import p_register from '../views/Product/p_register.vue'
import purchaseitem from '../views/Purchase/purchaseItem.vue'
import saleitem from '../views/Sale/saleItem.vue'
import supplier from '../views/Purchase/supplier.vue'
const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
    {
    path: '/supp_regist',
    name: 'supplier',
    component: supplier
  },
  {
    path: '/a',
    name: 'p_register',
    component: p_register
  },

  
  {
    path: '/saleitem',
    name: 'saleitem',
    component: saleitem
  },
  {
    path: '/',
    name: 'purchaseitem',
    component: purchaseitem
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
