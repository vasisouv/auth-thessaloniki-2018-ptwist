<template>
    <footer class="footer">
        <div class="container">
            <div class="row row-grid align-items-center my-md">
                <div class="col-lg-6">
                    <img class="w-50" src="../assets/img/oswinds_logo_500.png">
                    <br>
                    <div class="mt-3">
                        <a href="https://github.com/OSWINDS">
                            <icon :name="{ prefix: 'fab', iconName: 'github' }" size="sm"
                                  class="bg-gradient-white"
                                  color="oswinds" shadow
                                  rounded></icon>
                        </a>
                        <a href="https://twitter.com/oswinds_auth">
                            <icon :name="{ prefix: 'fab', iconName: 'twitter' }" size="sm"
                                  class="bg-gradient-white"
                                  color="oswinds" shadow
                                  rounded></icon>
                        </a>
                        <a href="https://www.facebook.com/oswinds/">
                            <icon :name="{ prefix: 'fab', iconName: 'facebook-f' }" size="sm"
                                  class="bg-gradient-white"
                                  color="oswinds" shadow
                                  rounded></icon>
                        </a>
                    </div>
                </div>
                <div class="col-lg-6 text-lg-center btn-wrapper">
                    <p>This project has received funding from the European Union’s Horizon 2020 Research and Innovation
                        Programme under Grant Agreement No. 780121</p>
                    <img class="eu-flag" src="../assets/img/eu_flag.png"/>
                </div>
            </div>
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; 2018
                        <a href="http://plastictwist.com/" target="_blank">PlasticTwist Project</a>.
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                            <a href="https://www.facebook.com/PlasticTwist/" class="nav-link" target="_blank">Facebook
                                page</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://twitter.com/PlasticTwistBot" class="nav-link" target="_blank">Twitter
                                Bot
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="http://plastictwist.com/" class="nav-link" target="_blank">Official website</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
    export default {};
</script>
<style>
</style>
