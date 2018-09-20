<template>
    <div class="map-container">
        <div class="shadow" id="map">

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

    #map
        width: 100%
        height: 500px
        z-index: 2



</style>