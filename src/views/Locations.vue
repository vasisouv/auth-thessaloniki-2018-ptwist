<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-ptwist shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4 pb-3">

                        <div class="row justify-content-center">
                            <div class="text-center mt-5"><h3 class="display-3">Locations</h3>
                            </div>
                        </div>

                        <div class="mt-5 row">
                            <div class="col-md-4 col-sm-12">
                                <daterange-picker alternative class="col-md-12"></daterange-picker>
                            </div>
                            <div class="col-md-4 col-sm-12">
                                <collections-select v-model="collection" alternative
                                                    label="Collection"></collections-select>
                            </div>
                            <div class="col-md-4 col-sm-12">
                                <language-select alternative label="Language"></language-select>
                            </div>
                        </div>
                        <leaflet-map :coordinates="mapCoordinates" v-if="dataReady"></leaflet-map>
                        <ptwist-loading v-else></ptwist-loading>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>

    import {Bus} from "../bus";
    import AjaxCaller from '../utils'

    const ajaxCaller = new AjaxCaller();

    export default {
        name: "locations",
        components: {},
        data() {
            return {
                collection: 'terms',
                language: 'en',
                endpoint: 'twitter/locations',
                dataReady: false
            }
        },
        methods: {
            updateMap() {
                this.dataReady = false;
                let data = {
                    collection: this.collection,
                    language: this.language,
                    timestamp_from: this.timestampFrom,
                    timestamp_to: this.timestampTo
                };
                ajaxCaller.makeInternalCall(this.endpoint, data).then((results) => {
                    this.dataReady = true;
                    this.mapCoordinates = results.data;
                });
            }
        },
        created() {
            Bus.$on('new-language', function (newLanguage) {
                this.language = newLanguage;
                Bus.$emit('new-collections', this.language);
            }.bind(this));
            Bus.$on('new-collection', function (newCollection) {
                this.collection = newCollection;
            }.bind(this));
            Bus.$on('daterange-update', function (timestamps) {
                this.timestampFrom = timestamps.from;
                this.timestampTo = timestamps.to;
                this.updateMap();
            }.bind(this));
        }

    };
</script>
<style>
</style>
