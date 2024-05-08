<template>
  <div class="main">
    <span>{{ num }} </span> <br />
    <span>放大十倍{{ bigNum }} </span>
    <button @click="waitRedueNum(person)">0.5秒后减少Num</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'vuexTry',
  data() {
    return {
      person: {
        name: '小明',
        age: 18,
        gender: '男',
      },
    }
  },
  computed: {
    ...mapState(['num']),
    ...mapGetters(['bigNum']),
  },
  methods: {
    waitRedueNum({ name, age }) {
      // console.log(name)
      // console.log(age)
      if (this.num >= 0) {
        this.$store.dispatch('waitReduceNum', 1)
      } else {
        alert('别减')
      }
    },
  },
}
</script>

<style scoped>
.main {
  width: 400px;
  height: 400px;
  background-color: sandybrown;
}
</style>
