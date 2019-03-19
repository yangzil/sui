import Vue from 'vue'
import App from './App'
import router from './router'

import highlight from 'highlightjs'
import DemoPanel from './components/DemoPanel'
import Markdown from './components/Markdown'
import Guide from './components/Guide'

import Tui from '../src/index.js'
Vue.use(Tui)

Vue.directive('hlt', function (el) {
  let blocks = el.querySelectorAll('pre code')
  Array.prototype.forEach.call(blocks, highlight.highlightBlock)
})


Vue.component('demo-panel', DemoPanel)
Vue.component('markdown', Markdown)
Vue.component('guide', Guide)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
