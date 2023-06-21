import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import MultiCheckbox from '@/components/MultiCheckbox';
import test2 from '@/components/test2';
import test3 from '@/components/test3';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(Router);
Vue.use(BootstrapVue); // added

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/multi_checkbox',
      name: 'MultiCheckbox',
      component: MultiCheckbox,
    },
    {
      path: '/test2',
      name: 'test2',
      component: test2,
    },
    {
      path: '/test3',
      name: 'test3',
      component: test3,
    },
  ],
});
