import Table from './table.vue'

Table.install = function (Vue) {
	if (this.install.installed) return
	Vue.component(Table.name, Table)
}

export default Table