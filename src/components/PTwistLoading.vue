<template>
    <div class="loading-container">
        <div class="loading-holder">
            <div class="loading-box">
            </div>
        </div>
        <div class="loading-holder">
            <div class="loading-box">
            </div>
        </div>
        <div class="loading-holder">
            <div class="loading-box">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'ptwist-loading'
    }

</script>
<style>
    .loading-container {
        padding: 120px;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-perspective: 2000px;
        perspective: 2000px;
        -webkit-transform: rotateX(-30deg) rotateY(-45deg);
        transform: rotateX(-30deg) rotateY(-45deg);
        pointer-events: none;
    }

    .loading-holder {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transform: translate3d(0em, 3em, 1.5em);
        transform: translate3d(0em, 3em, 1.5em);
    }

    .loading-holder:last-child {
        -webkit-transform: rotateY(-90deg) rotateX(90deg) translate3d(0, 3em, 1.5em);
        transform: rotateY(-90deg) rotateX(90deg) translate3d(0, 3em, 1.5em);
    }

    .loading-holder:first-child {
        -webkit-transform: rotateZ(-90deg) rotateX(-90deg) translate3d(0, 3em, 1.5em);
        transform: rotateZ(-90deg) rotateX(-90deg) translate3d(0, 3em, 1.5em);
    }

    .loading-holder:nth-child(1) .loading-box {
        background-color: #2dd8bf;
    }

    .loading-holder:nth-child(1) .loading-box:before {
        background-color: #228a78;
    }

    .loading-holder:nth-child(1) .loading-box:after {
        background-color: #28ad96;
    }

    .loading-holder:nth-child(2) .loading-box {
        background-color: #a4ea5d;
    }

    .loading-holder:nth-child(2) .loading-box:before {
        background-color: #659742;
    }

    .loading-holder:nth-child(2) .loading-box:after {
        background-color: #8cca53;
    }

    .loading-holder:nth-child(3) .loading-box {
        background-color: #fee154;
    }

    .loading-holder:nth-child(3) .loading-box:before {
        background-color: #dab915;
    }

    .loading-holder:nth-child(3) .loading-box:after {
        background-color: #efd253;
    }

    .loading-box {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-animation: ani-loading-box 6s infinite;
        animation: ani-loading-box 6s infinite;
        width: 3em;
        height: 3em;
    }

    .loading-box:before, .loading-box:after {
        position: absolute;
        width: 100%;
        height: 100%;
        content: "";
    }

    .loading-box:before {
        left: 100%;
        bottom: 0;
        -webkit-transform: rotateY(90deg);
        transform: rotateY(90deg);
        -webkit-transform-origin: 0 50%;
        transform-origin: 0 50%;
    }

    .loading-box:after {
        left: 0;
        bottom: 100%;
        -webkit-transform: rotateX(90deg);
        transform: rotateX(90deg);
        -webkit-transform-origin: 0 100%;
        transform-origin: 0 100%;
    }

    @-webkit-keyframes ani-loading-box {
        8.33% {
            -webkit-transform: translate3d(-50%, -50%, 0) scaleZ(2);
            transform: translate3d(-50%, -50%, 0) scaleZ(2);
        }
        16.7% {
            -webkit-transform: translate3d(-50%, -50%, -3em) scaleZ(1);
            transform: translate3d(-50%, -50%, -3em) scaleZ(1);
        }
        25% {
            -webkit-transform: translate3d(-50%, -100%, -3em) scaleY(2);
            transform: translate3d(-50%, -100%, -3em) scaleY(2);
        }
        33.3% {
            -webkit-transform: translate3d(-50%, -150%, -3em) scaleY(1);
            transform: translate3d(-50%, -150%, -3em) scaleY(1);
        }
        41.7% {
            -webkit-transform: translate3d(-100%, -150%, -3em) scaleX(2);
            transform: translate3d(-100%, -150%, -3em) scaleX(2);
        }
        50% {
            -webkit-transform: translate3d(-150%, -150%, -3em) scaleX(1);
            transform: translate3d(-150%, -150%, -3em) scaleX(1);
        }
        58.3% {
            -webkit-transform: translate3d(-150%, -150%, 0) scaleZ(2);
            transform: translate3d(-150%, -150%, 0) scaleZ(2);
        }
        66.7% {
            -webkit-transform: translate3d(-150%, -150%, 0) scaleZ(1);
            transform: translate3d(-150%, -150%, 0) scaleZ(1);
        }
        75% {
            -webkit-transform: translate3d(-150%, -100%, 0) scaleY(2);
            transform: translate3d(-150%, -100%, 0) scaleY(2);
        }
        83.3% {
            -webkit-transform: translate3d(-150%, -50%, 0) scaleY(1);
            transform: translate3d(-150%, -50%, 0) scaleY(1);
        }
        91.7% {
            -webkit-transform: translate3d(-100%, -50%, 0) scaleX(2);
            transform: translate3d(-100%, -50%, 0) scaleX(2);
        }
        100% {
            -webkit-transform: translate3d(-50%, -50%, 0) scaleX(1);
            transform: translate3d(-50%, -50%, 0) scaleX(1);
        }
    }

    @keyframes ani-loading-box {
        8.33% {
            -webkit-transform: translate3d(-50%, -50%, 0) scaleZ(2);
            transform: translate3d(-50%, -50%, 0) scaleZ(2);
        }
        16.7% {
            -webkit-transform: translate3d(-50%, -50%, -3em) scaleZ(1);
            transform: translate3d(-50%, -50%, -3em) scaleZ(1);
        }
        25% {
            -webkit-transform: translate3d(-50%, -100%, -3em) scaleY(2);
            transform: translate3d(-50%, -100%, -3em) scaleY(2);
        }
        33.3% {
            -webkit-transform: translate3d(-50%, -150%, -3em) scaleY(1);
            transform: translate3d(-50%, -150%, -3em) scaleY(1);
        }
        41.7% {
            -webkit-transform: translate3d(-100%, -150%, -3em) scaleX(2);
            transform: translate3d(-100%, -150%, -3em) scaleX(2);
        }
        50% {
            -webkit-transform: translate3d(-150%, -150%, -3em) scaleX(1);
            transform: translate3d(-150%, -150%, -3em) scaleX(1);
        }
        58.3% {
            -webkit-transform: translate3d(-150%, -150%, 0) scaleZ(2);
            transform: translate3d(-150%, -150%, 0) scaleZ(2);
        }
        66.7% {
            -webkit-transform: translate3d(-150%, -150%, 0) scaleZ(1);
            transform: translate3d(-150%, -150%, 0) scaleZ(1);
        }
        75% {
            -webkit-transform: translate3d(-150%, -100%, 0) scaleY(2);
            transform: translate3d(-150%, -100%, 0) scaleY(2);
        }
        83.3% {
            -webkit-transform: translate3d(-150%, -50%, 0) scaleY(1);
            transform: translate3d(-150%, -50%, 0) scaleY(1);
        }
        91.7% {
            -webkit-transform: translate3d(-100%, -50%, 0) scaleX(2);
            transform: translate3d(-100%, -50%, 0) scaleX(2);
        }
        100% {
            -webkit-transform: translate3d(-50%, -50%, 0) scaleX(1);
            transform: translate3d(-50%, -50%, 0) scaleX(1);
        }
    }
</style>