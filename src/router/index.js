import Vue from 'vue';
import Router from 'vue-router';
import VueChatTitle from "vue-wechat-title";
const Index = () =>import ("@/components/pages/index/index");
const Classify = () =>import ("@/components/pages/classify/classify");

Vue.use(Router);
Vue.use(VueChatTitle);
export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Index',
            redirect: '/index',
            meta: {
                title: "优礼微信商城"
            }
        },
        {
            path: "/index",
            name: "Inde",
            component: Index,
            meta: {
                title: "优礼微信商城"
            }
        },
        {
            path: "/classify",
            name: "classify",
            component: Classify,
            meta: {
                title: "礼品分类"
            }
        }
    ]
})
