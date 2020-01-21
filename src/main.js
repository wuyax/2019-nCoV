import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import echarts from 'echarts'
// ui freamwork https://vuematerial.io/themes/prebuilt
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'
// common style
import '@/assets/css/index.scss'

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts
// plugins
Vue.use(VueMaterial)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
