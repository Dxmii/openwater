// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'lib-flexible/flexible.js'
import 'animate.css'
import 'fullpage-vue/src/fullpage.css'
import VueFullpage from 'fullpage-vue'

/* eslint-disable */
Vue.config.productionTip = false;
Vue.use(ElementUI);

Vue.use(VueFullpage)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
