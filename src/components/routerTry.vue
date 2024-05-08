<template>
  <div>
    <router-link to="/about">about页面</router-link> <br />
    <router-link to="/home">home页面</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'routerTry',
  data() {
    return {
      name: 'routerTry',
    }
  },
}
</script>
<style scoped></style>
