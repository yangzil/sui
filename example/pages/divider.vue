<template>
  <div>
    <guide title="Divider 分割线" des="用于分割内容"/>
    <div class="demo-block">
      <div class="title">基本用法</div>
      <div class="sub-title">按钮的基本样式和基本用法</div>
      <div class="source">
        <div class="panel">
          <s-divider line-style="dashed"/>
        </div>
        <div class="panel">
          <s-divider content="这是带有文字的分割线" line-style="dotted"/>
        </div>
        <div class="panel">
          <s-divider content="文字在左边" content-align="left" line-style="inset"/>
        </div>
        <div class="panel">
          <s-divider content="文字在右边" content-align="right" line-style="double"/>
        </div>
      </div>
      <divider-normal/>
    </div>

    <div class="api-docs">
      <s-divider content="Attributes" class="documens-divider"/>
      <div class="source">
        <s-table :data="dividerApis">
          <s-table-column label="属性" prop="name"/>
          <s-table-column label="描述" prop="desc"/>
          <s-table-column label="类型" prop="type"/>
          <s-table-column label="可选值" prop="choice"/>
          <s-table-column label="默认值" prop="default"/>
        </s-table>
      </div>
    </div>
  </div>
</template>

<script>
import DividerNormal from '../docs/divider/divider-normal.md'

export default {
  components: {
    DividerNormal
  },
  data () {
    return {
      dividerApis: [
        {name: 'content', desc: '分割线文本', type: 'String', choice: '—', default: '—'},
        {name: 'content-align', desc: '分割线文本定位', type: 'left/center/right', choice: '—', default: 'center'},
        {name: 'list-style', desc: '分割线样式', type: 'String', choice: 'solod/dashed/dotted', default: 'solid'}
      ]
    }
  }
}
</script>

<style></style>
