<template>
    <div style="margin-left:-20px;" class="mr-1 d-flex justify-content-center align-items-center">
        <base-button class="review-button" v-on:click="sendReview(1)" type="very-bad">Καθολου ενδιαφερον
        </base-button>
        <base-button class="review-button" v-on:click="sendReview(2)" type="bad">Λιγο ενδιαφερον</base-button>
        <base-button class="review-button" v-on:click="sendReview(3)" type="average">Μετριο</base-button>
        <base-button class="review-button" v-on:click="sendReview(4)" type="good">Λιγο ενδιαφερον</base-button>
        <base-button class="review-button" v-on:click="sendReview(5)" type="very-good">Πολυ ενδιαφερον</base-button>

    </div>
</template>
<script>
    import {Bus} from '../bus'
    import AjaxCaller from '../utils'

    export default {
        name: 'review-buttons',
        props: {
            page: {
                type: String
            },
            userHash: {
                type: String
            }

        },
        methods: {
            sendReview(review) {
                const ajaxCaller = new AjaxCaller();

                let data = {
                    page: this.page,
                    review: review,
                    user_hash: this.userHash
                };
                ajaxCaller.post('reviews/save', data);
                Bus.$emit('reviewed', true);
            }
        }
    }
</script>