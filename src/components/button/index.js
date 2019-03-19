import SButton from './button.vue'

SButton.install = function (Vue) {
  if (this.install.installed) return
  Vue.component(SButton.name, Button)
}

export default SButton
