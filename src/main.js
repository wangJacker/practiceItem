// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'lib-flexible/flexible';
import "@/base/css/app.less";
import Exports from '@/base/js/common';
// import Toast from './toast.js';

Vue.config.productionTip = false
Vue.use(Exports);
// console.log(common)
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
