import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/u/:user',
      name: 'login',
      component: Login,
    },
    {
      path: '/u/:user/dashboard',
      name: 'dashboard',
      component: Dashboard,
      props: true,
    },
    { path: '*', component: NotFound },
  ],
});
