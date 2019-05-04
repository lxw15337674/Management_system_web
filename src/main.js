import Vue from "vue";
import App from "./App.vue";
import store from "./vuex/store";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axiosPlugin from "./rest-api/index";
import echarts from 'echarts'
import router from './router'; // 路由相关配置


Vue.use(Element);
Vue.use(axiosPlugin);
//引入echarts
Vue.prototype.$echarts = echarts;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
