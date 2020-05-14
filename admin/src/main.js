import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes/routes';
import 'bootstrap/scss/bootstrap.scss';
import './assets/css/style.scss';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'nav-item active',
  scrollBehavior: (to) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  }
})

new Vue ({
  el: '#app',
  router,
  render: h => h(App),
})
