import Button from './components/button/index'
import Alert from './components/alert/index'
import Col from './components/col/index'
import Row from './components/row/index'
import Divider from './components/divider/index'
import Table from './components/table/index'
import TableColumn from './components/table-column/index'
import ButtonGroup from './components/button-group/index'

// global
import Loading from './components/loading/index'

// directive
import SLoading from './directives/loading'

const Sui = {
  Button,
  Alert,
  Col,
  Row,
  Divider,
  Table,
  TableColumn,
  ButtonGroup,
  Loading
}

const install = function (Vue, opts = {}) {
  if (install.installed) return
  Object.keys(Sui).forEach((key) => {
    const name = Sui[key].name ? Sui[key].name : key
    Vue.component(name, Sui[key])
  })

  Vue.prototype.$loading = Loading
}

const SD = {
  SLoading
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const Component = {
  install,
  Sui,
  SD
}

export default Component
