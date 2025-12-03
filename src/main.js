import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Icon, Toast } from 'vant'
import store from '@/store'
// 导入按需导入的配置文件
import '@/utils/vant-ui'
import '@/styles/common.less'

Vue.use(Toast)

Vue.use(Button)
Vue.use(Icon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
