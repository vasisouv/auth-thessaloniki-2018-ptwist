import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import './plugins/fontawesome-library'

import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker'
import 'vue-airbnb-style-datepicker/dist/styles.css'

const datepickerOptions = {};
Vue.use(AirbnbStyleDatepicker, datepickerOptions);

Vue.config.productionTip = false;
Vue.use(Argon);
new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
