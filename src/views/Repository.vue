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
        <info-card title="Σχέδια για 3D εκτύπωση" :text="infoText" icon="print"></info-card>
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
                infoText: 'Σε αυτή την ενότητα παρουσιάζονται 3D printing designs που υπάρχουν ήδη στην πλατφόρμα thingiverse και έχουν δωρεάν license. Η συγκεκριμένη ενότητα θα εμπλουτιστεί στο μέλλον με 3D printing designs που θα έχουν ως πρώτη ύλη ανακυκλωμένο πλαστικό, καθώς και ιδέες για DIY κατασκευές.',
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
