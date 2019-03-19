export default {
	name: 's-row',
  
	props: {
	  gutter: Number,
	  type: String,
	  tag: {
		type: String,
		default: 'div'
	  },
	  justify: {
		type: String,
		default: 'start'
	  },
	  align: {
		type: String,
		default: 'top'
	  }
	},
  
	computed: {
	  style () {
		let ret = {}
  
		if (this.gutter) {
		  ret.marginLeft = `-${this.gutter / 2}px`
		  ret.marginRight = ret.marginLeft
		}
  
		return ret
	  }
	},
  
	render (h) {
	  return h(this.tag, {
		class: [
		  's-row',
		  this.justify !== 'start' ? `is-justify-${this.justify}` : '',
		  this.align !== 'top' ? `is-align-${this.align}` : '',
		  { 's-row--flex': this.type === 'flex' }
		],
		style: this.style
	  }, this.$slots.default)
	}
  }
  