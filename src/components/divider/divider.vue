<template>
	<div class="s-divider"
		:class="[
			content ? 'is-text' : '',
			contentAlign ? `is-${contentAlign}` : '',
			lineStyle ? `is-${lineStyle}` : ''
		]">
		<span v-if="content" class="s-divider__text"> {{ content }}</span>
	</div>
</template>

<script>
export default {
	name: 's-divider',
	props: {
		content: String,
		contentAlign: String,
		lineStyle: String
	}
	
}
</script>
