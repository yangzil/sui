import Button from './button.vue'

Button.install = function (Vue) {
  if (this.install.installed) return
  Vue.component(Button.name, Button)
}

export default Button
