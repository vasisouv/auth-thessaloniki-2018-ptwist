<template>
    <div class="row mr-1 ml-1">
        <base-button v-on:click="sendReview(1)" tag="a"
                     href="#"
                     class="mb-3 w-20 mb-sm-0 btn-lg"
                     type="very-bad">
            Πολυ κακο
        </base-button>
        <base-button v-on:click="sendReview(2)" tag="a"
                     href="#"
                     class="mb-3 w-20 mb-sm-0 btn-lg"
                     type="bad">
            Κακο
        </base-button>
        <base-button v-on:click="sendReview(3)" tag="a"
                     href="#"
                     class="mb-3 w-20 mb-sm-0 btn-lg"
                     type="average">
            μετριο
        </base-button>
        <base-button v-on:click="sendReview(4)" tag="a"
                     href="#"
                     class="mb-3 w-20 mb-sm-0 btn-lg"
                     type="good">
            καλο
        </base-button>
        <base-button v-on:click="sendReview(5)" tag="a"
                     href="#"
                     class="mb-3 w-20 mb-sm-0 btn-lg"
                     type="very-good">
            Πολυ καλο
        </base-button>
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

                console.log(data);

                ajaxCaller.post('reviews/save', data);
                console.log("done");
                Bus.$emit('reviewed', true);
            }
        }
    }
</script>