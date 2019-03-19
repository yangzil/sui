<template>
  <div>
    <guide title="Alert 提示" des="用于一些提示信息展示的组件"/>
	<div class="demo-block">
      <div class="title">基本用法</div>
      <div class="sub-title">不同状态的提示信息</div>
      <div class="source">
        <s-row :gutter="20">
          <s-col :span="24"><s-alert content="默认提示文案"/></s-col>
          <s-col :span="24"><s-alert content="success 提示文案" type="success"/></s-col>
          <s-col :span="24"><s-alert content="info 提示文案" type="info"/></s-col>
          <s-col :span="24"><s-alert content="warning 提示文案" type="warning"/></s-col>
          <s-col :span="24"><s-alert content="danger 提示文案" type="danger"/></s-col>
        </s-row>
      </div>
      <alert-normal/>
    </div>

	<div class="demo-block">
      <div class="title">更多用法</div>
      <div class="sub-title">下面介绍更详尽的组件属性</div>
      <div class="source">
        <s-row :gutter="20">
          <s-col :span="24"><s-alert content="不可关闭的警告" :closable="false"/></s-col>
          <s-col :span="24"><s-alert content="自定义 close-text" type="warning" closeText="关闭"/></s-col>
          <s-col :span="24"><s-alert content="设置回调" type="danger" @close="closeHandler"/></s-col>
        </s-row>
      </div>
      <alert-more/>
    </div>

	<div class="demo-block">
      <div class="title">提示图标</div>
      <div class="sub-title">带有图标的提示组件</div>
      <div class="source">
        <s-row :gutter="20">
          <s-col :span="24"><s-alert content="自定义 Icon" icon="fa fa-question-circle" show-icon/></s-col>
          <s-col :span="24"><s-alert content="默认文案提示文案" type="success" show-icon/></s-col>
          <s-col :span="24"><s-alert content="info 文案提示文案" type="info" show-icon/></s-col>
          <s-col :span="24"><s-alert content="warning 文案提示文案" type="warning" show-icon/></s-col>
          <s-col :span="24"><s-alert content="danger 文案提示文案" type="danger" show-icon/></s-col>
        </s-row>
      </div>
      <alert-icon/>
    </div>

     <div class="demo-block">
      <div class="title">消息居中</div>
      <div class="sub-title">内容居中的提示组件</div>
      <div class="source">
        <s-row :gutter="20">
          <s-col :span="24"><s-alert content="默认文案提示文案" show-icon text-center/></s-col>
          <s-col :span="24"><s-alert content="info 文案提示文案" type="info" show-icon text-center/></s-col>
          <s-col :span="24"><s-alert content="warning 文案提示文案" type="warning" show-icon text-center/></s-col>
          <s-col :span="24"><s-alert content="danger 文案提示文案" type="danger" show-icon text-center/></s-col>
        </s-row>
      </div>
      <alert-center/>
    </div>

	<div class="demo-block">
      <div class="title">辅助文案</div>
      <div class="sub-title">带有辅助文案的提示组件</div>
      <div class="source">
        <s-row :gutter="20">
          <s-col :span="24"><s-alert content="国足世界杯赢得首胜" sub="在2888年世界杯小组赛中，中国队对阵巴西已 4 - 0 的比分赢取首胜，胡金宝上演帽子戏法，开场仅27分钟就连续打入三球让巴西队陷入懵逼状态....."/></s-col>
          <s-col :span="24" style="margin-top: 20px"><s-alert type="warning" content="国足世界杯赢得首胜" sub="在2888年世界杯小组赛中，中国队对阵巴西已 4 - 0 的比分赢取首胜，胡金宝上演帽子戏法，开场仅27分钟就连续打入三球让巴西队陷入懵逼状态，简直是大快国人之心....." text-center/></s-col>
          <s-col :span="24" style="margin-top: 20px"><s-alert type="info" content="国足世界杯赢得首胜" sub="在2888年世界杯小组赛中，中国队对阵巴西已 4 - 0 的比分赢取首胜，胡金宝上演帽子戏法，开场仅27分钟就连续打入三球让巴西队陷入懵逼状态....." text-center show-icon/></s-col>
        </s-row>
      </div>
      <alert-sub/>
    </div>

    <div class="api-docs">
      <s-divider content="Attributes" class="document-divider"/>
      <div class="source">
        <s-table :data="alertApis">
          <s-table-column label="属性" prop="name" :width="150"/>
          <s-table-column label="描述" prop="desc" :width="150"/>
          <s-table-column label="类型" prop="type" :width="150"/>
          <s-table-column label="可选值" prop="choice" :width="250"/>
          <s-table-column label="默认值" prop="default"/>
        </s-table>
      </div>
    </div>
  </div>
</template>
<script>
import AlertNormal from '../docs/alert/alert-normal.md'
import AlertMore from '../docs/alert/alert-more.md'
import AlertIcon from '../docs/alert/alert-icon.md'
import AlertCenter from '../docs/alert/alert-center.md'
import AlertSub from '../docs/alert/alert-sub.md'

export default {
  components: {
	AlertNormal,
    AlertCenter,
    AlertIcon,
    AlertMore,
    AlertSub
  },
  methods: {
    closeHandler () {
      console.log('警告框被关闭')
    }
  },
  data () {
    return {
      alertApis: [
        {name: 'content', desc: '提示主文本', type: 'String', choice: '—', default: '—'},
        {name: 'sub', desc: '辅助文本', type: 'String', choice: '—', default: '—'},
        {name: 'type', desc: '提示框类型', type: 'String', choice: 'success/info/warning/danger', default: '—'},
        {name: 'closeText', desc: '关闭文本', type: 'String', choice: '—', default: '—'},
        {name: 'icon', desc: '自定义图标类名', type: 'String', choice: '—', default: '—'},
        {name: 'closable', desc: '是否可关闭', type: 'Boolean', choice: '—', default: 'true'},
        {name: 'showIcon', desc: '是否显示Icon', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'textCenter', desc: '文本居中', type: 'Boolean', choice: '—', default: 'false'}
      ]
    }
  }
}
</script>
