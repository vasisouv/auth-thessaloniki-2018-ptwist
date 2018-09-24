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
                            <div class="text-center mt-5"><h3 class="display-3">Σχέδια από το <a class="text-blue"
                                    href="https://www.thingiverse.com/" target="_blank"> thingiverse.com</a></h3>
                            </div>
                        </div>
                        <masonry-grid class="mt-4"></masonry-grid>
                    </div>
                    <div class="py-5 ml-3 border-top">
                        <div v-if="!reviewed">
                            <review-buttons :userHash="userHash" page="repository"></review-buttons>
                        </div>
                        <div v-else class="mr-1 ml-1 text-center">
                            <next-button next-page="/top-tweets"></next-button>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </section>
</template>
<script>

    import {Bus} from "../bus";
    import MasonryGrid from "../components/RepositoryMasonryGrid";

    export default {
        name: "repository",
        props: ['userHash'],
        components: {MasonryGrid},
        data() {
            return {
                endpoint: 'twitter/locations',
                reviewed: false,
                words: []
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
