import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VeeValidator from "vee-validate"

Vue.config.productionTip = false

Vue.use(VeeValidator);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
