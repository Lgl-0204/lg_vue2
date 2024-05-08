<template>
  <div>
    <slot name="header"></slot>
    <slot name="footer" :data="dataList"></slot>
  </div>
</template>

<script>
export default {
  name: 'zuoyongyu',
  data() {
    return {
      dataList: ['猫和老鼠', '蜡笔小新', '熊出没'],
    }
  },
}
</script>

<style></style>
