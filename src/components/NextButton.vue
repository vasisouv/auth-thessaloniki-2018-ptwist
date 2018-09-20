<template>
    <div class="col-md-12">
        <router-link :to="nextPage">
            <base-button tag="a"
                         href="#"
                         class="mb-3 w-20 mb-sm-0 btn-lg"
                         type="default">
                Επομενο
            </base-button>
        </router-link>
    </div>
</template>
<script>
    export default {
        name: 'next-button',
        props: {
            nextPage: {
                type: String
            }
        }
    }
</script>