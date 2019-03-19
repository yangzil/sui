<template>
	<div></div>
</template>

<script>
import Emitter from '../../mixins/emitter.js'

export default {
	name: 's-table-column',

	mixins: [Emitter],

	props: {
		prop: String,
		label: {
			type: String,
			default: ''
		},
	},

	created () {
		this.$on('table-resize', this.registerColumn)
	},

	mounted () {
		this.registerColumn()
	},

  	methods: {
		registerColumn () {
			this.dispatch('s-table', 'table-column-register', this)
		}
  	}
}
</script>

