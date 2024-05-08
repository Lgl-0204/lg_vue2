<template>
  <div class="person2">
    <div>{{ name }}</div>
    <button @click="getInf">p2点击</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '第二个人',
    }
  },
  methods: {
    getInf() {
      this.$bus.$emit('hello')
    },
  },
}
</script>

<style scoped>
.person2 {
  width: 400px;
  height: 400px;
  background-color: forestgreen;
}
</style>
