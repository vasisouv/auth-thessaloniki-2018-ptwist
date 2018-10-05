<template>
    <div v-images-loaded:on.progress="imageProgress">
        <div v-masonry gutter="10" transition-duration="0.3s" item-selector=".item">
            <div v-masonry-tile class="item" v-for="tweet in blocks">

                <b-card
                        img-top
                        :img-src="tweet.image ? require('../assets/img/top-tweets/'+tweet.image) : ''"
                        tag="article"
                        class="shadow masonry-card mb-2"
                        style="max-width: 19rem;">


                    <div class="row">
                        <div class="col-md-3">
                            <img class="rounded tweet-profile"
                                 :src="require('../assets/img/top-tweets/'+tweet.profile_image)">
                        </div>
                        <div class="col-md-9">
                            <span class="font-weight-bold">{{tweet.name}}</span>
                            <span class="twitter-screen-name d-block">@{{tweet.screen_name}}</span>
                        </div>
                    </div>

                    <div class="mt-3 border-top tweet-text">
                        {{ tweet.text }}
                    </div>
                    <div class="mt-3 tweet-footer">
                        <font-awesome-icon class="mr-1" :icon="{prefix: 'far', iconName: 'heart'}"/>
                        {{tweet.favorites}}K favorites
                        <font-awesome-icon class="ml-2 mr-1" :icon="{prefix: 'far', iconName: 'comment'}"/>
                        {{tweet.comments}}K comments

                    </div>
                </b-card>
            </div>
        </div>
    </div>
</template>
<script>
    import imagesLoaded from 'vue-images-loaded'

    export default {
        name: 'masonry-grid',
        props: ['tweets'],
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
                        profile_image: 'top_tweets_2_profile.jpg',
                        image: 'top_tweets_2_image.jpg',
                        name: 'Nathalie Gordon',
                        screen_name: 'awlilnatty',
                        text: 'If only nature would find a way to cover these oranges so we' +
                            ' didn\'t need to waste so much plastic on them.',
                        comments: 105,
                        favorites: 107
                    },
                    {
                        profile_image: 'top_tweets_1_profile.jpg',
                        name: 'Alicia Pearce',
                        screen_name: 'aliciapearce',
                        text: 'We dump a garbage truck full of plastic into the ocean every MINUTE and it\'s expected' +
                            ' to double by 2030. By 2050 there will be more plastic than fish in our oceans.' +
                            ' Please reduce your use of plastic. 🐟♻️🌎💚 The Earth will thank you.',
                        comments: 84.9,
                        favorites: 132
                    },
                    {
                        profile_image: 'top_tweets_3_profile.jpg',
                        image: 'top_tweets_3_image.jpg',
                        name: 'Bailey Thomson',
                        screen_name: 'bailey1987',
                        text: 'a mother whale lost her baby due to plastic pollution and carried her baby’s dead body' +
                            ' with her for days before giving up and we can’t even carry our plastic to a recycle bin',
                        comments: 61.3,
                        favorites: 21.1
                    },
                    {
                        profile_image: 'top_tweets_4_profile.jpg',
                        image: 'top_tweets_4_image.jpg',
                        name: 'CNN',
                        screen_name: 'cnn',
                        text: 'This man built a floating bicycle so he could clean trash from a river in order to' +
                            ' raise awareness about plastic pollution ',
                        comments: 145.3,
                        favorites: 133
                    },
                    {
                        profile_image: 'top_tweets_5_profile.jpg',
                        image: 'top_tweets_5_image.jpg',
                        name: 'James Woods',
                        screen_name: 'RealJamesWoods',
                        text: '29 whales were found dead on the shores of Germany, their stomachs filled with' +
                            ' plastic waste dumped in the sea.',
                        comments: 13.4,
                        favorites: 10
                    },
                    {
                        profile_image: 'top_tweets_6_profile.jpg',
                        image: 'top_tweets_6_image.jpg',
                        name: 'Ellen DeGeneres',
                        screen_name: 'TheEllenShow',
                        text: 'It’s #WorldOceansDay. By 2050, there will be more plastic waste in the sea than fish.' +
                            ' We can change this. Sign here. #NoMorePlastic',
                        comments: 13.4,
                        favorites: 10
                    },
                    {
                        profile_image: 'top_tweets_7_profile.jpg',
                        name: 'António Guterres',
                        screen_name: 'antonioguterres',
                        text: 'Our world is swamped by harmful plastic waste. By 2050, there could be more plastic in' +
                            ' the ocean than fish. On World Environment Day, let’s all do our part to' +
                            ' #BeatPlasticPollution.',
                        comments: 13.4,
                        favorites: 10
                    }
                ]
            }
        }

    }
</script>
<style>
</style>