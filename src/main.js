import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import HelloWorld from "./components/HelloWorld.vue";
import TestingVueFeatures from "./components/TestingVueFeatures.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/hello-world', component: HelloWorld },
  { path: '/testing-vue-features', component: TestingVueFeatures },
];

const router = new VueRouter({ routes });

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');