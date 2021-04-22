<template>
  <div id="app">
    <tab-bar>
      <tar-bar-item>
        <img slot="item-icon" src="./assets/img/Tabbar/test.jpg" alt="">
        <div slot="item-text">首页</div>
      </tar-bar-item>
      <tar-bar-item>
        <img slot="item-icon" src="./assets/img/Tabbar/test.jpg" alt="">
        <div slot="item-text">分类</div>
      </tar-bar-item>
      <tar-bar-item>
        <img slot="item-icon" src="./assets/img/Tabbar/test.jpg" alt="">
        <div slot="item-text">购物车</div>
      </tar-bar-item>
      <tar-bar-item>
        <img slot="item-icon" src="./assets/img/Tabbar/test.jpg" alt="">
        <div slot="item-text">我的</div>
      </tar-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './components/Tabbar'
import TarBarItem from './components/Tarbaritem'
export default {
  name: 'App',
  components: {
    TabBar,
    TarBarItem
  }
}
</script>

<style lang="less">
  @import "./assets/css/base.css";

</style>
