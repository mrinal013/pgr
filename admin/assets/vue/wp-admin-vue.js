import Vue from 'vue'
import App from './App.vue'
import router from './router'
import menuFix from './utils/admin-menu-fix'

window.addEventListener('load', function () {
  var vm = new Vue({
    router,
    render: (h) => h(App)
  })
  vm.$mount('#app')
  menuFix('pgr-grid')
})
