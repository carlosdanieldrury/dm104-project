// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'
import VueResourceMock from 'vue-resource-mock'
import MockData from './api/products'
import VueLocalStorage from 'vue-localstorage'
import VueFire from 'vuefire'

Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.use(VueResourceMock, MockData)
Vue.use(VueFire)
Vue.use(VueLocalStorage)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
