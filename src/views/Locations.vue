<template>
    <section class="section-shaped section-hero my-0">
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
                        <leaflet-map v-if="dataReady" class="mt-4" :coordinates="coordinates"></leaflet-map>
                    </div>
                    <div class="py-5 ml-3 border-top">
                        <div v-if="!reviewed">
                            <review-buttons :userHash="userHash" page="locations"></review-buttons>
                        </div>
                        <div v-else class="mr-1 ml-1">
                            <next-button next-page="/wordclouds"></next-button>
                        </div>
                    </div>
                </card>
            </div>
        </section>
        <info-card title="Τοποθεσίες" :text="infoText" icon="map-marked-alt"></info-card>
    </section>
</template>
<script>

    import {Bus} from "../bus";
    import AjaxCaller from '../utils'

    const ajaxCaller = new AjaxCaller();


    export default {
        name: "locations",
        props: ['userHash'],
        components: {},
        data() {
            return {
                dataReady: false,
                infoText: 'Σε αυτή την ενότητα παρουσιάζεται ένας χάρτης με τις περιοχές από τις οποίες προέρχονται τα περισσότερα tweets που αφορούν την θεματική του "Πλαστικού". O αριθμός που εμφανίζεται αναλογεί στο συνολικό αριθμό των tweets που προέρχονται από την αυτόματα σχεδιασμένη περιοχή. Μεγεθύνοντας τον χάρτη, ο αριθμός των tweets μειώνεται και διασπάται σε μικρότερες περιοχές κι αντίστροφα. Το συγκεκριμένο εργαλείο βοηθάει στο να δούμε ποιες περιοχές είναι πιο ενεργές στο θέμα της επαναχρησιμοποίησης του πλαστικού και της πλαστικής μόλυνσης.',

                endpoint: 'locations',
                reviewed: false
            }
        },
        mounted() {
            this.updateMap();
        },
        methods: {
            updateMap() {
                let data = {};
                ajaxCaller.get(this.endpoint, data).then((results) => {
                    this.coordinates = results.data;
                    this.dataReady = true;

                });
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
