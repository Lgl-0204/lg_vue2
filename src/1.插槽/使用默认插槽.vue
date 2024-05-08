<template>
  <div class="main">
    <moren>234 </moren>
    <moren>
      <ul v-if="films">
        <li v-for="(item, index) in films" :key="index">
          {{ item }}
        </li>
      </ul>
    </moren>
    <moren>
      <template v-slot:footer>
        <div>1234567890</div>
      </template>
    </moren>
  </div>
</template>
<script>
import moren from './默认插槽.vue'
export default {
  name: 'useMoren',
  data() {
    return {
      films: ['猫和老鼠', '大头儿子', '熊出没'],
    }
  },
  components: { moren },
}
</script>

<style scoped>
.main {
  display: flex;
  justify-content: space-between;
}
</style>
