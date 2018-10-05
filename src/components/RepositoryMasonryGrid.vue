<template>
    <div v-images-loaded:on.progress="imageProgress">
        <div v-masonry gutter="10" transition-duration="0.3s" item-selector=".item">
            <div v-masonry-tile class="item" v-for="item in blocks">
                <b-card :title="item.title"
                        :img-src="require('../assets/img/thingi/'+item.image)"
                        img-top
                        tag="article"
                        class="masonry-card mb-2"
                        style="max-width: 19rem;">
                    <p>
                        by <span class="font-weight-bold">{{item.creator}}</span>

                    </p>
                    <p class="card-text">
                        {{ item.description }}

                    </p>
                    <p class="card-text">
                        <span class="d-block"> <font-awesome-icon class="mr-2"
                                                                  :icon="{prefix: 'fas', iconName: 'download'}"/>
                            {{ item.downloads }} downloads </span>
                        <span class="d-block"> <font-awesome-icon class="mr-2"
                                                                  :icon="{prefix: 'far', iconName: 'thumbs-up'}"/>
                            {{ item.likes }} likes </span>
                        <span class="d-block"> <font-awesome-icon class="mr-2"
                                                                  :icon="{prefix: 'fas', iconName: 'eye'}"/>
                            {{ item.views }} views </span>
                    </p>

                </b-card>
            </div>
        </div>
    </div>
</template>
<script>
    import imagesLoaded from 'vue-images-loaded'

    export default {
        name: 'masonry-grid',
        directives: {
            imagesLoaded
        },
        methods: {
            imageProgress(instance, image) {
                const result = image.isLoaded ? 'loaded' : 'broken';
                console.log('image is ' + result + ' for ' + image.img.src);
            }
        },
        data() {
            return {

                blocks: [
                    {
                        date: '24-Jun-18',
                        title: 'Puzzle Cube (easy print no support)',
                        image: 'thingi1.jpg',
                        creator: 'WildRoseBuilds',
                        description: 'This puzzle was heavily inspired by a gif of pacificpuzzleworks slideways' +
                            ' puzzle cube. He has since made a thingiverse account and shared his files here',
                        downloads: 30404,
                        likes: 4099,
                        views: 207370
                    },
                    {
                        date: '14-Aug-18',
                        title: 'Xbox One controller mini wheel',
                        image: 'thingi2.jpg',
                        description: 'A big thanks to those who tried to tip! I don\'t have it enabled:' +
                            '( Rack and pinion steering for your xbox controller. 100 degrees of rotation. ',
                        creator: 'pixel2',
                        downloads: 18278,
                        likes: 2691,
                        views: 184283
                    },
                    {
                        date: '22-Jul-18',
                        title: 'Turboprop Engine',
                        image: 'thingi3.jpg',
                        description: 'This is a cutaway model of Turboprop Engine having following features for' +
                            ' educational purposes. ',
                        creator: 'konchan77',
                        downloads: 5880,
                        likes: 1900,
                        views: 75593
                    },
                    {
                        date: '18-Aug-18',
                        title: 'Fantasy Mini Collection (multiple poses)',
                        image: 'thingi4.jpg',
                        description: 'Collection of fantasy miniatures for tabletop gaming! These minis were' +
                            ' created in DesktopHero, which allows you to customize miniatures and export the STLs' +
                            ' for free.',
                        creator: 'stockto',
                        downloads: 7275,
                        likes: 1552,
                        views: 49118
                    },
                    {
                        date: '15-Jul-18',
                        title: 'DIY Dremel CNC #1 design and parts (Arduino, aluminum profiles, 3D printed parts)',
                        image: 'thingi5.jpg',
                        description: 'DIY CNC machine is a very popular project on the internet, a lot of people made' +
                            ' different versions but I want to show you how I made my own CNC machine with a Dremel' +
                            ' as a spindle.',
                        creator: 'NikodemBartnik',
                        downloads: 3978,
                        likes: 2241,
                        views: 56307
                    },
                    {
                        date: '10-Jun-18',
                        title: 'Curved honeycomp vase',
                        creator: 'eggnot',
                        image: 'thingi6.jpg',
                        description: 'Just a couple of modifiers to give Honeycomb vase(by radus)' +
                            ' more stable bottom. Also i think it looks more organic. Done in Blender 3d',
                        downloads: 63850,
                        likes: 9599,
                        views: 285671
                    },
                    // {
                    //     date: '9-Apr-15',
                    //     title: '#3DBenchy - The jolly 3D printed testing boat',
                    //     creator: 'CreativeTools',
                    //     image: 'thingi7.jpg',
                    //     description: 'A 3D model designed by us at specifically for testing and benchmarking' +
                    //         ' 3D printers. ',
                    //     downloads: 898771,
                    //     likes: 23332,
                    //     views: 1242712
                    // },
                ]
            }
        }

    }
</script>
<style>
</style>