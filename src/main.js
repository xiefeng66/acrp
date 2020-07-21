import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vant/lib/index.css';
import Vant from 'vant';
Vue.use(Vant);
import { Lazyload } from 'vant';
Vue.use(Lazyload);


// axios 连接数据库
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:3000'
Vue.prototype.axios = axios;

// 登录请求
const loginCheck = params => {
  return axios.post('/login', params).then(res => {
      return res.data
  })
}
export { loginCheck }

//全局组件
import Navigation from './components/Navigation'
Vue.component("my-foot",Navigation);
import Refresh from './components/Refresh'
Vue.component("my-refresh",Refresh);
import SubmitBar from './components/SubmitBar'
Vue.component("my-sub",SubmitBar);
// SubmitBar



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
