<template>
    <div id="app">
        <main>
            <fade-transition origin="center" mode="out-in" :duration="250">
                <router-view :userHash="userHash"/>
            </fade-transition>
        </main>
    </div>
</template>
<script>
    import {FadeTransition} from "vue2-transitions";
    import {Bus} from "./bus";

    export default {
        components: {
            FadeTransition
        },
        data(){
            return {
               userHash: this.getRandomUserHash()
            }
        },
        methods: {
            getRandomUserHash(){
                return  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            }
        },
        created (){
            Bus.$on('reset', function () {
                this.userHash = this.getRandomUserHash()
            }.bind(this));

        }
    };
</script>
