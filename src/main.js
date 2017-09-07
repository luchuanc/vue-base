import Vue from 'vue'
import App from './App'
import store from './vuex/index'
import router from './router'

import bscroll from '@/components/scroll/scroll.vue'
import alert from '@/common/alert.js'
import Api from '@/api/api.js'

Vue.component('bscroll', bscroll);

window.Api=Api;

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
