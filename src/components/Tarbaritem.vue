<template>
  <div class="tab-bar-item">
    <slot name="item-icon"></slot>
    <slot name="item-icon-active"></slot>
    <slot name="item-text"></slot>
<!--    <img src="../assets/img/Tabbar/test.jpg" alt="">-->
<!--    <div>首页</div>-->
  </div>
</template>

<script>
export default {
  name: 'Tarbaritem'
}
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img{
    height: 24px;
    width: 24px;
  }
</style>
