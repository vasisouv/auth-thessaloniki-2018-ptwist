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
                        <img src="../assets/img/ptwist_logo_text.png" style="width: 300px;" class="img-fluid"><br>
                        <h1 class="lead text-white">Like PlasticTwist on Facebook!</h1>
                        <img src="../assets/img/qr_code.png" style="width: 100px;" class="img-fluid">

                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 text-center">
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
                    <div v-if="!infoSubmitted" class="col-md-8 mt-4 input-info-container text-center">
                        <p class="lead text-white input-info">Συμπληρώστε τα στοιχεία σας για να ενημερώνεστε για τα νέα
                            του
                            PlasticTwist:</p>
                        <div class="row w-70 mx-auto">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <input type="number" aria-describedby="addon-right addon-left" v-model="age" min="0"
                                           max="200"
                                           placeholder="Ηλικία" class="form-control-alternative shadow form-control">
                                </div>

                            </div>
                            <div class="col-md-8">
                                <div class="form-group">
                                    <input aria-describedby="addon-right addon-left" v-model="email" type="email"
                                           maxlength="50" minlength="3"
                                           placeholder="E-mail" class="form-control-alternative shadow form-control">
                                </div>

                            </div>
                        </div>
                        <div class="row w-70 mx-auto">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <input type="text" aria-describedby="addon-right addon-left" v-model="name"
                                           placeholder="Ονοματεπώνυμο" maxlength="50" minlength="3"
                                           class="form-control-alternative shadow form-control">
                                </div>

                            </div>
                        </div>
                        <div class="custom-control custom-checkbox mb-3">
                            <input id="termsCheckbox" v-model="acceptedTerms" type="checkbox"
                                   class="custom-control-input">
                            <label for="termsCheckbox" class="text-white custom-control-label"> Συμφωνώ με τους

                            </label>
                            <a style="cursor: pointer" class="text-black-50" @click="showModal = true">όρους και
                                προϋποθέσεις </a>
                        </div>
                        <modal :show.sync="showModal" class="text-justify">
                            <template slot="header">
                                <h5 class="modal-title" id="exampleModalLabel">Όροι και προϋποθέσεις συμμετοχής</h5>
                            </template>
                            <div>
                                <p>Συμπληρώνοντας την παραπάνω φόρμα συμφωνώ ότι:</p>
                                <ol type="1">
                                    <li>
                                        Λαμβάνω μέρος στο ερευνητικό πρόγραμμα PlasticTwist (<a
                                            href="http://plastictwist.com">http://plastictwist.com</a>) το οποίο
                                        υλοποιείται υπό το χρηματοδοτικό πρόγραμμα της Ε.Ε. για την Έρευνα και την
                                        Καινοτομία Horizon 2020. Το αντικείμενο του προγράμματος αφορά στην ανάδειξη
                                        καινοτόμων λύσεων με τη δημιουργική αξιοποίηση των τεχνολογιών Πληροφορικής για
                                        την επαναχρησιμοποίηση πλαστικών απορριμμάτων με στόχο την ευαισθητοποίηση των
                                        πολιτών σχετικά με τις πρακτικές της κυκλικής οικονομίας και την βιώσιμη
                                        καινοτομία μέσω της απόδοσης αξίας στα πλαστικά μιας χρήσης.
                                    </li>
                                    <li>
                                        Είχα αρκετό χρόνο να σκεφτώ τις πληροφορίες τις οποίες θα παραθέσω και να ρωτήσω
                                        οποιαδήποτε ερώτηση είχα, και είμαι ικανοποιημένος/ή από τις απαντήσεις που
                                        έλαβα.
                                    </li>
                                    <li>
                                        Κατανοώ ποιος θα έχει πρόσβαση στα προσωπικά δεδομένα που παρέχω, πως θα
                                        αποθηκευτούν
                                        τα δεδομένα και τι θα συμβεί με τα δεδομένα μου κατά το πέρας του προγράμματος.
                                    </li>
                                    <li>
                                        Κατανοώ ότι τα δεδομένα μου, εφόσον ανωνυμοποιηθούν (μετατραπούν σε
                                        μη-αναγνωρίσιμη μορφή),
                                        μπορεί να αρχειοθετηθούν και να διαμοιραστούν σε άλλους για νόμιμους
                                        ερευνητικούς
                                        σκοπούς.
                                    </li>
                                    <li>
                                        Κατανοώ ότι η συμμετοχή μου είναι εθελοντική και ότι έχω την δυνατότητα να
                                        αποσυρθώ
                                        ανά πάσα στιγμή χωρίς δικαιολογία.
                                    </li>
                                </ol>

                            </div>
                            <template slot="footer">
                                <base-button type="primary" @click="showModal = false">ΟΚ</base-button>
                            </template>
                        </modal>
                        <transition name="fade">
                            <base-alert v-show="error" type="danger" class="w-75 mx-auto">
                            <span class="alert-inner--icon">
                                <font-awesome-icon class="ml-2 mr-1" :icon="{prefix: 'fas',
                                 iconName: 'exclamation-triangle'}"/>
                            </span>
                                <span class="alert-inner--text"><span>{{errorText}}</span></span>
                            </base-alert>
                        </transition>

                        <base-button tag="a"
                                     @click="savePersonalInfo"
                                     class="mt-3 mb-sm-0 btn-lg text-white"
                                     type="ptwist">
                            Εγγραφη
                        </base-button>
                    </div>
                    <div v-if="infoSubmitted" class="col-md-8 mt-4 input-info-container text-center">
                        <font-awesome-icon class="mt-5 review-saved text-blue"
                                           :icon="{prefix: 'fas', iconName: 'check-circle'}"/>
                        <h4 class="lead mt-3 text-white">Τα στοιχεία σας αποθηκεύτηκαν με επιτυχία.</h4>
                    </div>

                </div>
                <div class="row align-items-center justify-content-around stars-and-coded-thanks">
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
    import AjaxCaller from '../utils'

    export default {
        name: "components",
        components: {},
        props: ['userHash'],
        data() {
            return {
                infoSubmitted: false,
                showModal: false,
                acceptedTerms: false,
                error: false,
                errorText: '',
                age: '',
                email: '',
                name: '',
            }
        },
        methods: {
            savePersonalInfo() {
                if (!this.hasErrors()) {
                    this.infoSubmitted = true;
                    const ajaxCaller = new AjaxCaller();
                    console.log(this.$parent.userHash);

                    let data = {
                        name: this.name,
                        age: this.age,
                        email: this.email,
                        user_hash: this.userHash
                    };
                    console.log(data);

                    ajaxCaller.post('personal_data/save', data);
                    // this.infoSubmitted = true;
                }
            },
            hasErrors() {
                if (this.age === '') {
                    this.errorText = 'Παρακαλούμε εισάγετε την ηλικία σας.';
                    this.error = true;
                    return true
                }
                else if (this.email === '' || !this.mailIsValid()) {
                    this.errorText = 'Παρακαλούμε εισάγετε έναν έγκυρο λογαριασμό email';
                    this.error = true;
                    return true
                }
                else if (this.name === '') {
                    this.errorText = 'Παρακαλούμε εισάγετε το όνομα σας.';
                    this.error = true;
                    return true
                }
                else if (!this.acceptedTerms) {
                    this.errorText = 'Παρακαλούμε συμφωνήστε με τους όρους και προϋποθέσεις.';
                    this.error = true;
                    return true
                } else return false

            },
            mailIsValid() {
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(this.email).toLowerCase());
            }

        }

    };
</script>
