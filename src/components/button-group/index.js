import SButtonGroup from './button-group.vue'

SButtonGroup.install = function (Vue) {
	if (this.install.installed) return 
	Vue.component(SButtonGroup.name, ButtonGroup)
}

export default SButtonGroup