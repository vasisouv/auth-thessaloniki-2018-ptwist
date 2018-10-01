<template>
    <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-ptwist">
            <span class="span-150"></span>
            <span class="span-50"></span>
            <span class="span-50"></span>
            <span class="span-75"></span>
            <span class="span-100"></span>
            <span class="span-75"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
        </div>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile" no-body>
                    <div class="px-4 pb-3">

                        <div class="row justify-content-center">
                            <div class="text-center mt-5"><h3 class="display-3">Κορυφαία tweets</h3>
                            </div>
                        </div>
                        <top-tweets-masonry-grid class="mt-4"></top-tweets-masonry-grid>
                    </div>
                    <div class="py-5 ml-3 border-top">
                        <div v-if="!reviewed">
                            <review-buttons :userHash="userHash" page="top-tweets"></review-buttons>
                        </div>
                        <div v-else class="mr-1 ml-1 text-center">
                            <next-button :userHash="userHash" next-page="/thanks"></next-button>
                        </div>
                    </div>
                </card>
            </div>
        </section>
        <info-card title="Τοποθεσίες" text="Info text" icon="map-marked-alt"></info-card>
    </section>
</template>
<script>

    import {Bus} from "../bus";
    import TopTweetsMasonryGrid from "../components/TopTweetsMasonryGrid";
    import AjaxCaller from '../utils'

    const ajaxCaller = new AjaxCaller();

    export default {
        name: "repository",
        props: ['userHash'],
        components: {'top-tweets-masonry-grid' : TopTweetsMasonryGrid},
        data() {
            return {
                reviewed: false,
                topTweets: []
            }
        },
        created() {
            Bus.$on('reviewed', function (reviewed) {
                this.reviewed = reviewed
            }.bind(this));
        }

    };
</script>
<style>
</style>
