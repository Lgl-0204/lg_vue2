<template>
  <div>
    <zuoyongyu>
      <template slot="footer" scope="{data}">
        <button @click="showInf(data)">点击</button>
        <!-- <button @click="yibu">异步</button> -->
        <h3 v-for="(item, index) in data" :key="index">
          {{ item }}
        </h3>
      </template>
    </zuoyongyu>
  </div>
</template>

<script>
import zuoyongyu from './作用域插槽.vue'
export default {
  name: 'useZuoYongYu',
  methods: {
    showInf(data) {
      console.log(data)
    },
    // yibu() {},
  },
  components: {
    zuoyongyu,
  },
}
</script>

<style></style>
