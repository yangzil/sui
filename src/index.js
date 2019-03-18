import Button from './components/button/index'

const Tui = {
  Button
}

const install = function (Vue, opts = {}) {
  if (install.installed) return
  Object.keys(Tui).forEach((key) => {
    const name = Tui[key].name ? Tui[key].name : key
    Vue.component(name, Tui[key])
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const INFO = {
  version: process.env.version
}

console.log(INFO, 'in')
const Component = {
  install,
  // INFO,
  Tui
}

export default Component
