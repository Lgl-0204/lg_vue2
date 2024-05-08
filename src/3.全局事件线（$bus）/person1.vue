<template>
  <div class="person1">
    <div>{{ name }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '第一个人',
      bird: {
        size: 'small',
      },
      mouse: {
        small: 'sadsda',
      },
    }
  },
  mounted() {
    this.$bus.$on('hello', () => {
      console.log(this.name)
      // js优先解析 [],之后解析语句  == this.mouse.small
      // console.log(this.mouse[this.bird.size])
      let num = new Number(4)
      console.log(num)
    })
  },
}
</script>

<style scoped>
.person1 {
  width: 400px;
  height: 400px;
  background-color: sandybrown;
}
</style>
