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
        <div class="container shape-container d-flex align-items-center">
            <div class="col px-0">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-8 text-center pt-lg">
                        <img src="../assets/img/ptwist_logo_text.png" style="width: 500px;" class="img-fluid">
                        <p class="lead text-white mt-4 mb-5">
                            <font-awesome-icon class="ml-2 mr-1 thanks-smile"
                                               :icon="{prefix: 'fas', iconName: 'smile-beam'}"/>
                            <span class="d-block mt-3"> Σας ευχαριστούμε πολύ για την συνεισφορά σας!</span>
                        </p>
                            <base-button tag="a"
                                         href="/"
                                         class="mt-3 mb-sm-0 btn-lg"
                                         type="warning">
                                Νεα αξιολογηση
                            </base-button>

                    </div>
                </div>
                <div class="row align-items-center justify-content-around stars-and-coded">
                    <div class="col-sm-4">
                        <a href="https://www.csd.auth.gr/el/" target="_blank">
                            <img src="../assets/img/csd_logo.png">
                        </a>
                    </div>
                    <div class="col-sm-4 mt-4 mt-sm-0 text-right">
                        <a href="http://oswinds.csd.auth.gr/" target="_blank">
                            <img src="../assets/img/oswinds_alt.png" class="ml-3" style="width: 200px;">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        name: "components",
        components: {}
    };
</script>
