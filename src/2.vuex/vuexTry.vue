<template>
  <div class="main">
    <slot></slot>
    <button @click="addNum">增加Num</button>
    <div @click="showInf($event, 1)" style="background: red">
      1
      <div @click="showInf($event, 2)" style="background: blue">
        2
        <div @click="showInf($event, 3)" style="background: saddlebrown">3</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vuexTry',
  methods: {
    addNum() {
      this.$store.commit('numAdd', 1)
    },
    showInf(e, num) {
      // e.stopPropagation()
      console.log(num)
    },
  },
  mounted() {
    var str = {
      name: '李白',
      age: 12,
      hobby: ['basket', 'sleep'],
    }
  },
}
</script>

<style scoped>
.main {
  width: 400px;
  height: 400px;
  background-color: steelblue;
}
</style>
