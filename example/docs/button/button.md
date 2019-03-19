::: demo
> 使用 `type` 、`outline` 、`round` 和 `circle` 属性来定义按钮的样式，可组合使用。
```html
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
```
:::
