import axios from "axios";
import Vue from "vue";

// create an axios instance
const Axios = axios.create({
  // baseURL: "http://10.30.4.68:8090/api", // api的测试接口
  baseURL: globals.serverUrl, // api的base_url
  timeout: 20000, // request timeout
  responseType: "json",
  withCredentials: false, // 是否允许带cookie这些
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    "Content-Type": "application/json;charset=utf-8",
    "X-Requested-With": "XMLHttpRequest"
  }
});

Vue.$http = Axios;
// 对axios的实例重新封装成一个plugin ,方便 Vue.use(xxxx)
export default {
  install: function(Vue, Option) {
    Object.defineProperty(Vue.prototype, "$http", { value: Axios });
  }
};
