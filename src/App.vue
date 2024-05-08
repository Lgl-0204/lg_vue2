<template>
  <div id="app">
    <routerTry id="aa"></routerTry>
  </div>
</template>

<script>
import routerTry from './components/routerTry.vue'
export default {
  name: 'App',
  components: {
    routerTry,
  },
  mounted() {
    this.$store.state.fun()
    console.dir(document.getElementById('aa').__vue__)
  },
  created() {},
}
</script>

<style>
.flexBox {
  display: flex;
}
</style>
