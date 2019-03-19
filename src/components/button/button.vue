<template>
	<button
    class="s-button"
		:class="[
			type ? `${classPrefix+type}` : '',
			size ? `${classPrefix+size}` : '',
			disabled ? 'is-disabled' : '',
			round ? 'is-round' : '',
			outline ? 'is-outline' : '',
			circle ? 'is-circle' : '',
		]"
		@click="handleClick"
		@mouseenter="handlerMouseEnter"
		@mouseleave="handlerMouseLeave"
		@mouseover="handlerMouseOver"
		@mouseout="handlerMouseOut"
		>
		<span class="s-button__content"><slot></slot></span>
	</button>
</template>

<script>
export default {
	name: 's-button',

	props: {
		type: {
			type: String,
			default: 'default'
		},
		size: String,
		disabled: Boolean,
		outline: Boolean,
		round: Boolean,
		circle: Boolean,
	},

	data () {
		return {
			classPrefix: 's-button--'
		}
	},
	
	methods: {
		handleClick (e) {
			this.$emit('click', e)
		},
		handlerMouseEnter (e) {
			this.$emit('mouseenter', e)
		},
		handlerMouseLeave (e) {
			this.$emit('mouseleave', e)
		},
		handlerMouseOver (e) {
			this.$emit('mouseover', e)
		},
		handlerMouseOut (e) {
			this.$emit('mouseout', e)
		}
  	}
}
</script>

