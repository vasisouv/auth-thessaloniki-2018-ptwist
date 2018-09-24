import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import './plugins/fontawesome-library'

import {VueMasonryPlugin} from 'vue-masonry';

Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(VueMasonryPlugin)
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
