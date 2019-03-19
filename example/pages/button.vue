<template>
  <div>
    <guide title="Button 按钮" des="常用的操作按钮"/>
    <div class="demo-block">
      <div class="title">基本用法</div>
      <div class="sub-title">按钮的基本样式和基本用法</div>
      <div class="source">
        <div class="row">
          <div class="col" :span="24">
            <s-button type="primary">Primary</s-button>
            <s-button type="success">Success</s-button>
            <s-button type="info">Info</s-button>
            <s-button type="warning">Warning</s-button>
            <s-button type="danger">Danger</s-button>
            <s-button>Default</s-button>
          </div>
          <div class="col" :span="24" style="margin-top: 20px">
            <s-button type="primary" outline>Primary</s-button>
            <s-button type="success" outline>Success</s-button>
            <s-button type="info" outline>Info</s-button>
            <s-button type="warning" outline>Warning</s-button>
            <s-button type="danger" outline>Danger</s-button>
            <s-button outline>Default</s-button>
          </div>
          <div class="col" :span="24" style="margin-top: 20px">
            <s-button type="primary" round>Primary</s-button>
            <s-button type="success" round>Success</s-button>
            <s-button type="info" round>Info</s-button>
            <s-button type="warning" round>Warning</s-button>
            <s-button type="danger" round>Danger</s-button>
            <s-button round>Default</s-button>
          </div>
          <div class="col" :span="24" style="margin-top: 20px">
            <s-button type="primary" circle icon="fa fa-search"/>
            <s-button type="success" circle icon="fa fa-check"/>
            <s-button type="info" circle icon="fa fa-envelope"/>
            <s-button type="warning" circle icon="fa fa-star"/>
            <s-button type="danger" circle icon="fa fa-trash-alt"/>
          </div>
        </div>
      </div>
      <button-md/>
    </div>
    <div class="demo-block">
      <div class="title">禁用状态</div>
      <div class="sub-title">禁用状态的按钮不可点击</div>
      <div class="source">
        <div class="row">
          <div class="col" :span="24">
            <s-button type="primary" disabled>Primary</s-button>
            <s-button type="success" disabled>Success</s-button>
            <s-button type="info" disabled>Info</s-button>
            <s-button type="warning" disabled>Warning</s-button>
            <s-button type="danger" disabled>Danger</s-button>
            <s-button disabled>Default</s-button>
          </div>
        </div>
      </div>
      <button-disabled/>
    </div>

    <div class="demo-block">
      <div class="title">文字按钮</div>
      <div class="sub-title">外观是文字，实际是按钮哦</div>
      <div class="source">
        <s-button type="text">Text-Button</s-button>
        <s-button type="text" disabled>Text-Button</s-button>
      </div>
      <button-text/>
    </div>

    <div class="demo-block">
      <div class="title">按钮组</div>
      <div class="sub-title">以按钮组的方式出现，可用于相似操作按钮的组合</div>
      <div class="source">
        <s-button-group>
          <s-button type="primary" icon="fa fa-chevron-left">上一页</s-button>
          <s-button type="primary" icon="fa fa-chevron-right" icon-right>下一页</s-button>
        </s-button-group>
        <s-button-group>
          <s-button type="primary" icon="fa fa-star"/>
          <s-button type="primary" icon="fa fa-heart"/>
          <s-button type="primary" icon="fa fa-eye"/>
        </s-button-group>
      </div>
      <button-group/>
    </div>

    <div class="demo-block">
      <div class="title">加载按钮</div>
      <div class="sub-title">加载状态的按钮，可用于操作等待的友好提示</div>
      <div class="source">
        <s-button type="primary" loading disabled>Loading...</s-button>
      </div>
      <button-loading/>
    </div>

    <div class="api-docs">
      <s-divider content="Attributes" class="document-divider"/>
      <div class="source">
        <s-table :data="apis">
          <s-table-column label="属性" prop="name" :width="120"/>
          <s-table-column label="描述" prop="desc" :width="120"/>
          <s-table-column label="类型" prop="type" :width="120"/>
          <s-table-column label="可选值" prop="choice" :width="350"/>
          <s-table-column label="默认值" prop="default"/>
        </s-table>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonMd from '../docs/button/button.md'
import ButtonDisabled from '../docs/button/button-diabled.md'
import ButtonText from '../docs/button/button-text.md'
import ButtonGroup from '../docs/button/button-group.md'
import ButtonLoading from '../docs/button/button-loading.md'

export default {
  components: {
    ButtonMd,
    ButtonDisabled,
    ButtonText,
    ButtonGroup,
    ButtonLoading
  },

  data () {
    return {
      apis: [
        {name: 'type', desc: '按钮类型', type: 'String', choice: 'default/primary/success/warning/danger/info/text', default: 'default'},
        {name: 'size', desc: '按钮尺寸', type: 'String', choice: 'lg/sm/mini', default: '—'},
        {name: 'icon', desc: '图标类名', type: 'String', choice: '—', default: '—'},
        {name: 'native-type', desc: '原生type', type: 'String', choice: 'button/submit/reset', default: 'button'},
        {name: 'round', desc: '弧形按钮', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'loading', desc: '加载状态', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'disabled', desc: '禁用状态', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'outline', desc: '边框按钮', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'circle', desc: '圆形按钮', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'icon-right', desc: '图标位于右侧', type: 'Boolean', choice: '—', default: 'false'}
      ]
    }
  }
}
</script>
