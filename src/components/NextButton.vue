<template>
    <transition name="fade">
        <div class="row">
            <div class="col-md-8">
                <h3 class="ml-5">
                    <font-awesome-icon class="review-saved text-success" :icon="icon"/>
                    Η βαθμολογία σας αποθηκεύτηκε!
                </h3>
            </div>
            <div class="col-md-4 d-flex">
                <router-link :userHash="userHash" v-if="nextPage==='thanks'" :to="nextPage">
                    <base-button tag="a"
                                 class="mb-3 text-white w-100 mr-5 mb-sm-0 btn-lg"
                                 type="default">
                        Επομενο
                    </base-button>
                </router-link>
                <router-link v-else :to="nextPage">
                    <base-button tag="a"
                                 class="mb-3 text-white w-100 mr-5 mb-sm-0 btn-lg"
                                 type="default">
                        Επομενο
                    </base-button>
                </router-link>
            </div>

        </div>
    </transition>


</template>
<script>
    export default {
        name: 'next-button',
        props: {
            nextPage: {
                type: String
            },
            userHash:{
                type: String
            }
        },
        data() {
            return {
                icon: {prefix: 'fas', iconName: 'check-circle'}
            }
        }
    }
</script>