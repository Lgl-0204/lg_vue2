<template>
  <div>
    <ul>
      <li>我的名字是: {{ this.$route.query.name }}</li>
      <li>
        我的爱好是:
        <span v-for="(item, index) in this.$route.query.hobby" :key="index">
          {{ item }}
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'routerQuery',
  data() {
    return {}
  },
  mounted() {},
}
</script>
<style scoped></style>
