import Vue from 'vue'
import App from './App'
import store from './vuex/index'
import router from './router'

import alert from '@/common/alert.js'
import Api from '@/api/api.js'

window.Api=Api;

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
