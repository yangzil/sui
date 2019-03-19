import STableColumn from './table-column.vue'


STableColumn.install = function (Vue) {
	if (this.install.installed) return
	Vue.component(STableColumn.name, STableColumn)
}

export default STableColumn