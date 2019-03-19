import SCheckBox from './checkbox.vue'
import Vue from 'vue'

SCheckBox.install = function () {
  if (this.install.installed) return
  Vue.component(SCheckBox.name, CheckBox)
}

export default SCheckBox
