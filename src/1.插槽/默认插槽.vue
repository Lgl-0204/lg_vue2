<template>
  <div class="main">
    <!-- <ul v-if="dataList">
      <li v-for="(item, index) in dataList" :key="index">
        {{ item }}
      </li>
    </ul> -->
    <slot>如果没传递插槽的值,show me</slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'moren',
  // props: ['dataList'],
}
</script>

<style scoped>
.main {
  width: 300px;
  height: 500px;
  background-color: coral;
}
</style>
