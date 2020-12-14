import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import filter from "./services/filter"

import iView from "iview";
import "iview/dist/styles/iview.css";
import common from "./common";
import VueElementLoading from 'vue-element-loading'

import store from './store'

Vue.component("VueElementLoading", VueElementLoading);

Vue.use(iView);

Vue.mixin(common);



Vue.config.productionTip = false;

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount("#app");
