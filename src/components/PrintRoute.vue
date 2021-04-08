<template>
    <div class="pl-3">
        <p>
            <span v-for="route in routes" v-bind:key="route.id"><router-link :to="route.to">{{ route.title }}</router-link> > </span>
            {{ currentRoute }}
        </p>
    </div>
</template>

<script>
export default {
    props: {
        currentRoute: String,
        routes: Array
    },
    name: 'print-route',
    data() {
        return{
            test: 'A'
        }
    }
}
</script>
