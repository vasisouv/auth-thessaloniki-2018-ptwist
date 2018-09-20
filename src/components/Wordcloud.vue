<template>
    <div id="app">
        <wordcloud
                :data="words"
                nameKey="name"
                valueKey="value">
        </wordcloud>
    </div>

</template>
<script>
    import wordcloud from 'vue-wordcloud'

    export default {
        name: 'ptwist-wordcloud',
        components: {
            wordcloud
        },
        props: {
            words: {
                type: Array
            }
        }
    }
</script>