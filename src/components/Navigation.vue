<template>
  <footer id="foot" fixed>
    <!-- 光标问题： 跳转问题没有解决了  但不知道如何解决的-->
    <van-tabbar route>
      <van-tabbar-item  to="/index">
        <span>首页</span>
        <template #icon="props">
          <van-icon size="25" :name="props.active ? 'wap-home' : 'home-o'" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/Classify">
        <span>商品分类</span>
        <template #icon="props">
          <van-icon size="25" :name="props.active ? 'goods-collect' : 'goods-collect-o'" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/Trolley">
        <span>购物车</span>
        <template #icon="props">
          <van-icon size="25" :name="props.active ? 'shopping-cart' : 'shopping-cart-o'" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/Personal">
        <span>个人中心</span>
        <template #icon="props">
          <van-icon size="25" :name="props.active ? 'friends' : 'friends-o'" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </footer>
</template>
<script>
import { Notify } from "vant";
export default {
  data() {
    return {

    };
  },
  methods: {
  
  },
  watch: {
    
  }
};
</script>
<style>
*{
  content : '';
}
</style>