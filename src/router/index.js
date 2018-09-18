import Vue from 'vue';
import Router from 'vue-router';
import VueChatTitle from "vue-wechat-title";
const Index = () => import ("@/components/pages/index/index");

Vue.use(Router);
Vue.use(VueChatTitle);
export default new Router({
  routes: [{
      path: '/',
      name: 'Index',
      redirect: '/index',
      meta:{
        title:"优礼微信商城"
      }
    },
    {
      path: "/index",
      name: "Inde",
      component: Index,
      meta:{
        title:"优礼微信商城"
      }
    }
  ]
})
