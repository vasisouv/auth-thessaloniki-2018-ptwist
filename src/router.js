import Vue from "vue";
import Router from "vue-router";
import Landing from "./views/Landing.vue";

import Locations from "./views/Locations.vue";
import Wordclouds from "./views/Wordclouds.vue";

Vue.use(Router);

export default new Router({
    mode: 'history',
    linkExactActiveClass: "active",
    routes: [
        {
            path: "/",
            name: "landing",
            components: {
                default: Landing
            }
        },
        {
            path: "/locations",
            name: "locations",
            components: {
                default: Locations,
            }
        },
        {
            path: "/wordclouds",
            name: "wordclouds",
            components: {
                default: Wordclouds,
            }
        },
    ],
    scrollBehavior: to => {
        if (to.hash) {
            return {selector: to.hash};
        } else {
            return {x: 0, y: 0};
        }
    }
});
