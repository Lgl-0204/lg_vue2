<template>
  <div class="home">
    <h1>home</h1>
    <div v-for="(item, index) in personList" :key="index">
      <router-link
        :to="{
          path: '/home/routerQuery',
          query: {
            name: item.name,
            hobby: item.hobby,
          },
        }"
      >
        {{ item.name }}
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      personList: [
        { name: '李白', hobby: ['吃饭', '写诗'] },
        { name: '杜甫', hobby: ['睡觉', '打豆豆'] },
      ],
    }
  },
  created() {
    // for (var i = 0; i < 10; i++) {
    //   if (i == 5) {
    //     break
    //   }
    //   console.log(i)
    // }
  },
}
</script>

<style></style>
