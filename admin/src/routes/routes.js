import Admin from '../components/Admin.vue';

import BlogList from '../components/blog/BlogList.vue';
import BlogArticle from '../components/blog/BlogArticle.vue';
import NewBlogArticle from '../components/blog/NewBlogArticle.vue';

import CategoryList from '../components/categories/CategoryList.vue';
import Category from '../components/categories/Category.vue';

import ProductList from '../components/products/ProductList.vue';
import Product from '../components/products/Product.vue';

import PromoList from '../components/promo/PromoList.vue';
import PromoArticle from '../components/promo/PromoArticle.vue';

import Login from '../components/Login.vue';
import Dashboard from '../components/Dashboard.vue';
import Orders from '../components/Orders.vue';

export const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Admin,
    children: [
      {
        path: 'main',
        alias: '',
        component: Dashboard,
        meta: { title: 'Панель администратора' }
      },
      {
        path: 'orders',
        component: Orders,
        meta: { title: 'Заявки' }
      },
      {
        path: 'blog',
        component: BlogList,
        children: [
          {
            path: 'new',
            component: NewBlogArticle,
            meta: { title: 'Добавление новой записи'}
          },
          {
            path: ':id/',
            component: BlogArticle,
            meta: { title: 'Редактирование записи' }
          }
        ]
      },
      {
        path: 'categories',
        component: CategoryList,
        children: [
          {
            path: ':id/',
            component: Category,
            meta: { title: 'Редактирование категории' }
          }
        ]
      },
      {
        path: 'products',
        component: ProductList,
        children: [
          {
            path: ':id/',
            component: Product,
            meta: { title: 'Редактирование продуктов' }
          }
        ]
      },
      {
        path: 'promo',
        component: PromoList,
        children: [
          {
            path: ':id/',
            component: PromoArticle,
            meta: { title: 'Редактирование акции' }
          }
        ]
      }
    ]
  }
]