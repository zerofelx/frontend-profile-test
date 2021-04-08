<template>
    <div id="lateral-menu" class="h-100 text-center pt-2">
        <div class="h2 mb-0 home-button">
            <router-link class="link-wc rounded px-2 pb-1" to="/">
                <b-icon-house-door-fill></b-icon-house-door-fill>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'lateral-menu'
}
</script>

<style>
#lateral-menu {
    background-color: #15ADC7;
    position: fixed;
    width: 5%;
}
.link-wc {
    color: #15ADC7;
    background-color: #424242;
    transition: background-color .2s;
    transition: color .2s;
}
.link-wc:hover{
    color: #82B1FF;
    background-color: #575757;
    transition: color .2s;
    transition: background-color .2s;
    cursor: pointer;
}
</style>