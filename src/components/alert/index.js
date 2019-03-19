import Alert from './Alert.vue'

Alert.install = function (Vue) {
  if (this.install.installed) return
  Vue.component(Alert.name, Alert)
}

export default Alert
