import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import firebase from './service/firebase'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

/**
 * Handle Firebase immediately as it requires an additional httpRequest
 */
firebase.auth().onAuthStateChanged(function (user) {
  // @TODO Add a logout message
  if (user) {
    store.commit('setUser', user)
  } else {
    store.commit('setUser', {})
  }
})
