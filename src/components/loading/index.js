import SLoading from './loading.vue'

SLoading.install = function (Vue) {
	if (this.install.installed) return
	Vue.component(SLoading.name, SLoading)
}

export default SLoading