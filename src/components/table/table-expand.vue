<script>
import TCheckbox from '../../components/checkbox/index'
import ArrayHelper from '../../mixins/arrayHelper'

export default {
  components: {
    TCheckbox
  },

  mixins: [ArrayHelper],

  name: 's-table-expand',

  data () {
    return {
    }
  },

  props: {
    row: {},
    col: {},
    idx: {},
    width: {}
  },

  render (h) {
    return h('div', {
      class: 's-table__expand',
      style: {
        width: this.width
      }
    }, [this.col.$scopedSlots.default({
      row: this.row,
      idx: this.idx
    })])
  }
}
</script>

<style scoped>

</style>
