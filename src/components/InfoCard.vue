<template>
    <div class="card info-card">
        <h5 class="card-header">
            <font-awesome-icon
                    :icon="{prefix: 'fas', iconName:icon}"/>
            {{title}}
        </h5>
        <div class="card-body">
            <p class="card-text">{{text}}</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'info-card',
        props: ['title', 'text', 'icon']
    }
</script>