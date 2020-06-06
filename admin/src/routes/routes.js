import Blog from '../pages/Blog.vue';
import BlogList from '../components/blog/BlogList.vue';
import BlogArticle from '../components/blog/BlogArticle.vue';

import Categories from '../pages/Categories.vue';
import CategoryList from '../components/categories/CategoryList.vue';
import Category from '../components/categories/Category.vue';

import Products from '../pages/Products.vue';
import ProductList from '../components/products/ProductList.vue';
import Product from '../components/products/Product.vue';

import Promo from '../pages/Promo.vue';
import PromoList from '../components/promo/PromoList.vue';
import PromoArticle from '../components/promo/PromoArticle.vue';

import Login from '../pages/Login.vue';
import Dashboard from '../pages/Dashboard.vue';
import Orders from '../pages/Orders.vue';

export const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/main',
    alias: '',
    component: Dashboard,
    meta: { title: 'Панель администратора' }
  },
  {
    path: '/orders',
    component: Orders,
    meta: { title: 'Заявки' }
  },
  {
    path: '/blog',
    component: Blog,
    children: [
      {
        path: '',
        component: BlogList,
        meta: { title: 'Блог' }
      },
      {
        path: 'new',
        component: BlogArticle,
        meta: { title: 'Блог'}
      },
      {
        path: ':id/',
        component: BlogArticle,
        meta: { title: 'Блог' }
      }
    ]
  },
  {
    path: '/categories',
    component: Categories,
    children: [
      {
        path: '',
        component: CategoryList,
        meta: { title: 'Список категорий' }
      },
      {
        path: ':id/',
        component: Category,
        meta: { title: 'Редактирование категории' }
      }
    ]
  },
  {
    path: '/products',
    component: Products,
    children: [
      {
        path: '',
        component: ProductList,
        meta: { title: 'Список продуктов' }
      },
      {
        path: ':id/',
        component: Product,
        meta: { title: 'Редактирование продуктов' }
      }
    ]
  },
  {
    path: '/promo',
    component: Promo,
    children: [
      {
        path: '',
        component: PromoList,
        meta: { title: 'Список акций' }
      },
      {
        path: ':id/',
        component: PromoArticle,
        meta: { title: 'Редактирование акции' }
      }
    ]
  }
];
