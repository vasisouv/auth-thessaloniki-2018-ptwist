<template>
    <div class="map-container">
        <div class="shadow" id="map">

        </div>
        <div v-if="error" class="map-error d-flex align-items-center justify-content-center">
            <div class="text-white text-center">
                <span class="d-block error-icon">
                    <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'exclamation-triangle' }"/>
                </span>

                <span class="error-text">No data available based on these parameters</span>
            </div>

        </div>
    </div>

</template>
<script>
    import L from 'leaflet';

    export default {
        name: 'leaflet-map',
        props: {
            coordinates: {
                type: Array,
                default: [],
                description: 'Coordinates to be placed on the map'
            }
        },
        mounted() {

            this.map = L.map('map', {preferCanvas: true}).setView([30, 0], 2);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(this.map);

            if (this.coordinates.length === 0){
                this.error = true
            }
            else {
                this.placeCoordinates()
            }
            this.map.invalidateSize();

        },
        data() {
            return {
                error: false
            }
        },
        methods:{
            placeCoordinates(){
                let markers = L.markerClusterGroup();
            }
        }
    }

</script>
<style lang="sass">
    @import "../../node_modules/leaflet/dist/leaflet.css"

    .blur
        -webkit-filter: blur(2px)
        -moz-filter: blur(2px)
        -o-filter: blur(2px)
        -ms-filter: blur(2px)
        filter: blur(2px)
    .error-icon
        font-size: 50px

    .error-text
        font-size: 30px
    #map
        width: 100%
        height: 500px
        z-index: 2

    .map-error
        position: absolute
        width: 100%
        height: 500px
        top: 0
        z-index: 3
        background-color: rgba(0, 0, 0, 0.3)

    .map-container
        position: relative


</style>