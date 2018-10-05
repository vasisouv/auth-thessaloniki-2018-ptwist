<template>
    <section class="section-hero section-shaped my-0">
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
                        <ptwist-wordcloud :words="words"></ptwist-wordcloud>
                    </div>
                    <div class="py-5 ml-3 border-top">
                        <div v-if="!reviewed">
                            <review-buttons :userHash="userHash" page="wordclouds"></review-buttons>
                        </div>
                        <div v-else class="mr-1 ml-1 text-center">
                            <next-button next-page="/repository"></next-button>
                        </div>
                    </div>
                </card>
            </div>
        </section>
        <info-card title="Σύννεφο λέξεων" :text="infoText" icon="comments"></info-card>
    </section>
</template>
<script>

    import {Bus} from "../bus";
    import AjaxCaller from '../utils'
    import PtwistLoading from "../components/PTwistLoading";

    const ajaxCaller = new AjaxCaller();

    export default {
        name: "wordclouds",
        props: ['userHash'],
        components: {PtwistLoading},
        mounted() {
            this.getWordcloud();
        },
        data() {
            return {
                endpoint: 'twitter/locations',
                infoText: 'Το σύννεφο λέξεων που εμφανίζεται, δημιουργείται από τις λέξεις με την μεγαλύτερη συχνότητα εμφάνισης στα δεδομένα μας. Όσο μεγαλύτερη η λέξη σε μέγεθος, τόσο μεγαλύτερη και η συχνότητα εμφάνισης της. Το εργαλείο αυτό βοηθάει στο να εντοπίσουμε νεοεμφανιζόμενες τάσεις, πιθανές θεματικές συνδέσεις, κτλ.',
                reviewed: false,
                words: []
            }
        },
        methods: {
            getWordcloud() {
                ajaxCaller.get('wordclouds').then((results) => {
                    this.words = results.data;
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
