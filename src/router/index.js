import VueRouter from 'vue-router'

import about from '../components/about.vue'
import home from '../components/home.vue'
import routerQuery from '../components/routerQuery.vue'
const router = new VueRouter({
  routes: [
    {
      name: 'about',
      path: '/about',
      component: about,
      children: [
        {
          path: 'routerQuery',
          name: 'routerQuery1',
          component: routerQuery,
        },
      ],
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: 'routerQuery',
          name: 'routerQuery',
          component: routerQuery,
        },
      ],
    },
  ],
})
router.beforeEach((to, from, next) => {
  if (localStorage.getItem('inf') === 'lgl2') {
    console.log(to)
    console.log(from)
    next()
  } else {
    alert('无权限')
  }
})
export default router
