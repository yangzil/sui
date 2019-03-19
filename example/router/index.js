import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/docs/index.vue'
import Guide from '@/pages/guide.vue'
import Button from '../pages/button.vue'
import Alert from '@/pages/alert.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/alert',
      name: 'Alert',
      component: Alert
    },
  ]
})
