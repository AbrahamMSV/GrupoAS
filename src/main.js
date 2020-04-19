// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './model/firebase'
import Vue from 'vue'
import App from './App'
import router from './router'
import {firestorePlugin} from 'vuefire'
import vuetify from '@/plugin/vuetify'
import {store} from './store'
Vue.config.productionTip = false
Vue.use(firestorePlugin);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  store: store,
  components: { App },
  template: '<App/>'
})
