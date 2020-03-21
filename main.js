import Vue from 'vue'
import App from './App'
// 引入全局方法
import Tool from "./common/lib/tool.js"
Vue.prototype.$Tool = Tool
// 公共组件引入
import divider from '@/components/common/divider.vue'
import noThing from '@/components/common/no-thing.vue';
import loading from "@/components/common/loading.vue";
Vue.component('divider',divider)
Vue.component('no-thing',noThing)
Vue.component('loading',loading)

// 引入vuex
import store from './store'
Vue.prototype.$store = store


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
