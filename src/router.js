import Vue from "vue";
import Router from "vue-router";
import Landing from "./views/Landing.vue";

import Locations from "./views/Locations.vue";
import Wordclouds from "./views/Wordclouds.vue";
import Repository from "./views/Repository.vue";
import TopTweets from "./views/TopTweets.vue";
import Thanks from "./views/Thanks.vue";

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
        {
            path: "/repository",
            name: "repository",
            components: {
                default: Repository,
            }
        },
        {
            path: "/top-tweets",
            name: "top-tweets",
            components: {
                default: TopTweets,
            }
        },
        {
            path: "/thanks",
            name: "thanks",
            components: {
                default: Thanks,
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
