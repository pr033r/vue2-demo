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

new Vue({ // in constructor we're passing a settings object
  render: h => h(App),
  router,
  created: function () { }, // hook methods -> dont use arrows functions (they dont have 'this' operator)
  mounted: function () { }, // another hooks methods...
  updated: function () { },
  destroyed: function () { },
}).$mount('#app');