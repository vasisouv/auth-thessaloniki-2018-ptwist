import Vue from "vue";
import {library} from '@fortawesome/fontawesome-svg-core'

import {
    faCoffee,
    faComments,
    faExternalLinkAlt,
    faDesktop,
    faUsersCog,
    faMapMarkedAlt,
    faBook,
    faInfoCircle,
    faCheckCircle,
    faDownload,
    faEye,
    faSmileBeam,
    faExclamationTriangle,
    faPrint,
    faRetweet
} from '@fortawesome/free-solid-svg-icons'

library.add(faCoffee);
library.add(faComments);
library.add(faExternalLinkAlt);
library.add(faDesktop);
library.add(faUsersCog);
library.add(faMapMarkedAlt);
library.add(faBook);
library.add(faInfoCircle);
library.add(faCheckCircle);
library.add(faDownload);
library.add(faEye);
library.add(faSmileBeam);
library.add(faExclamationTriangle);
library.add(faPrint);
library.add(faRetweet);

import {
    faUserCircle,
    faThumbsUp,
    faHeart,
    faComment
} from '@fortawesome/free-regular-svg-icons'

library.add(faUserCircle);
library.add(faThumbsUp);
library.add(faHeart);
library.add(faComment);

import {faTwitter, faFacebookF, faConnectdevelop, faGithub} from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter);
library.add(faFacebookF);
library.add(faConnectdevelop);
library.add(faGithub);

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon);