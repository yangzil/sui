<template>
  <div id='app'>
    <header>大大的head</header>
    <aside>侧栏</aside>
    <div class="content">内容展示区
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import './assets/styles/app.scss';
  @import '../src/styles/index.scss';
</style>
