<template>
  <div id="app">
    <div class="container-fluid px-0">
        <lateral-menu />
        <div id="content-main-zone">
          <div class="title-zone border-bottom pb-3 pl-3">
            <h1 class="h4">Centro de ayuda Seif</h1>
          </div>
          <router-view />
        </div>
    </div>
  </div>
</template>

<script>
import LateralMenu from './components/LateralMenu.vue'

export default {
  components: { LateralMenu },
  name: 'App',
  created() {
    this.$router.replace('/')
  }
}
</script>

<style>
  * {
    margin: 0
  }
  .light-background {
    background: #f3f3f3
  }
  .content-page {
    min-height: 100vh;
  }
  .router-link-active:hover {
    text-decoration: none
  }
  #content-main-zone {
    margin-left: 5%;
  }
</style>
