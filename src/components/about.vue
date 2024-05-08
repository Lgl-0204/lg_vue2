<template>
  <div class="about">
    <h1>about</h1>
  </div>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {}
  },
  created() {
    let obj = {
      name: '小红',
      age: 18,
      haveFun() {
        alert('看电视')
      },
      // worinidema nigechusheng
      hobby: ['吃饭', '睡觉'],
      boyFriend: {
        name: '小明',
        age: 18,
        hobby: ['抽烟', '喝酒'],
        girlFriend: {
          name: '老兰',
          age: 80,
          hobby: ['吃药', '狗带'],
          boyFriend: { name: '良哥' },
        },
      },
    }
  },
}
</script>

<style></style>
