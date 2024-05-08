import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)

const actions = {
  numAdd(context, value) {
    context.commit('numAdd', value)
  },
  waitReduceNum(context, value) {
    setTimeout(() => {
      context.commit('waitReduceNum', value)
    }, 500)
  },
}
const mutations = {
  numAdd(state, value) {
    state.num += value
    console.log(this.getters.bigNum)
  },
  waitReduceNum(state, value) {
    state.num - value <= -1 ? alert('再减就小于0了') : (state.num -= value)
  },
}
const state = {
  num: 0,
  fun: function () {
    console.log(this)
  },
}

const getters = {
  bigNum(state) {
    return state.num * 10
  },
}
const store = new vuex.Store({
  actions,
  mutations,
  state,
  getters,
})
export default store
