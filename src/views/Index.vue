<template>
  <!-- 轮播图出现bug显示屏幕加载不满的情况下，是需要获取屏幕尺寸，才出现的bug -->
  <div class="shou">
    <!-- 首页 -->
    <!-- 首页搜索框开始 -->
    <div class="index_shou1">
      <!-- <van-icon name="shop" size="33" /> -->
      <van-search
        v-model="value"
        show-action
        label="地址"
        background="#4fc08d"
        placeholder="请输入搜索关键词"
        @search="onSearch"
      >
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
    </div>
    <!-- 首页搜索框结束 -->
    <!-- 首页轮播图开始 require-->
    <div class="index_shou2">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img :src="require('../assets/images/lunbo-1.png')" height="180" width="100%" />
        </van-swipe-item>
        <van-swipe-item>
          <img :src="require('../assets/images/lunbo-2.png')" height="180" width="100%" />
        </van-swipe-item>
        <van-swipe-item>
          <img :src="require('../assets/images/lunbo-3.png')" height="180" width="100%" />
        </van-swipe-item>
        <van-swipe-item>
          <img :src="require('../assets/images/lunbo-4.png')" height="180" width="100%" />
        </van-swipe-item>
        <van-swipe-item>
          <img :src="require('../assets/images/lunbo-5.png')" height="180" width="100%" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 首页轮播图结束 -->
    <!-- 首页图标开始 -->
    <div class="index_shou3">
      <van-grid :border="false" :column-num="4">
        <!-- 上一列 -->
        <van-grid-item to="/Classify">
          <van-image :src="require('../assets/images/shouyetubiao-1.png')" />
          <p>全部分类</p>
        </van-grid-item>
        <van-grid-item>
          <van-image :src="require('../assets/images/shouyetubiao-2.png')" />
          <p>数码电器</p>
        </van-grid-item>
        <van-grid-item>
          <van-image :src="require('../assets/images/shouyetubiao-3.png')" />
          <p>本周新品</p>
        </van-grid-item>
        <van-grid-item>
          <van-image :src="require('../assets/images/shouyetubiao-4.png')" />
          <p>本周爆款</p>
        </van-grid-item>
        <!-- 下一列 -->
        <van-grid-item>
          <van-image :src="require('../assets/images/shouyetubiao-5.png')" />
          <p>我的订单</p>
        </van-grid-item>
        <van-grid-item to="/Trolley">
          <van-image :src="require('../assets/images/shouyetubiao-6.png')" />
          <p>购物车</p>
        </van-grid-item>
        <van-grid-item>
          <van-image :src="require('../assets/images/shouyetubiao-7.png')" />
          <p>聚灵阵</p>
        </van-grid-item>
        <van-grid-item>
          <van-image :src="require('../assets/images/shouyetubiao-8.png')" />
          <p>会员中心</p>
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 首页图标结束 -->
    <!-- 首页大图标开始 -->
    <!-- <div class="index_shou4">
      <van-grid clickable :column-num="2">
        <van-grid-item>
          <img src="../assets/images/tujian-one-2.png" width="100%" />
        </van-grid-item>
        <van-grid-item>
          <img src="../assets/images/tujian-one-1.png" width="100%" />
        </van-grid-item>
      </van-grid>
    </div> -->
    <!-- 首页大图标结束 -->
    <!-- 首页推荐开始 -->
    <div class="index_shou5">
      <div v-for="(p,i) in shop.length" :key="i">
        <!-- <img src="../assets/images/cat.png" alt="" width="100%"> -->
        <div>
          <!-- <router-link :to="`/Particulars/${shop[i].id}`"> -->
          <!-- <router-link :to="{path:`/Particulars/?`,query:{id: shop[i].id}}"> -->
          <router-link :to="`/Particulars/${shop[i].id}`">
            <!-- <img v-lazy="shop[i].image" width="168px" height="130px" /> -->
            <!-- <van-image lazy-load :src="require(shop[i].image)"/> -->
            <van-image lazy-load :src="shop[i].image"  width="168" height="130" />
          </router-link>
        </div>

        <!--title="商品标题" <van-image src="https://img.yzcdn.cn/vant/cat.jpeg" width="100%" height="7rem"/> -->
        <!-- ture false  禁用  :price="shop[i].prices"-->
        <van-card
          :price="shop[i].price"
          :desc="shop[i].title"
        ></van-card>
      </div>
    </div>
    <!-- 首页推荐结束 -->
    <my-foot></my-foot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      images: [
        "../assets/images/qq.png",
        "https://img.yzcdn.cn/vant/apple-2.png"
      ],
      // 首页商品列表所有数据
      shop: {},
      id: ""
    };
  },
  //在挂载完成后执行的业务代码
  mounted() {
    //发送AJAX请求
    this.axios.get("/index").then(res => {
      this.shop = res.data.result;
      console.log(res.data.result);
    });
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("取消");
    }
  }
};
</script>
<style scoped>
/* van-swipe__track */
/* -------------------- */
.shou {
  background: whitesmoke;
  content: "";
  /* height: 100%; */
}
.index_shou1 {
  width: 100%;
  background: #1abd7e;
}
.index_shou:nth-child(1) {
  float: left;
}
.my-swipe {
  border-radius: 12px;
}
.my-swipe:first-child {
  width: 100%;
}
.index_shou3 p {
  font-size: 12px;
}
.index_shou4 {
  margin-top: 10px;
}
.index_shou5 {
  /* display: flex; */
  margin-top: 15px;
  background: white;
  /* float: left; */
}

/* .index_shou5>div{
  float: left;
  display: flex;
} */
.index_shou5 > div:not(:last-child) {
  margin: 0 0 0 12px;
  width: 45%;
  /* display: flex;  */
  float: left;
  margin-top: 6px;
  /* height: 188px !important; */
  /* border: 1px solid red; */
}
.index_shou5 > div:last-child {
  margin: 0 0 0 12px;
  width: 45%;
  float: left;
  margin-top: 6px;
  margin-bottom: 55px;
  /* border: 1px solid red; */
}
.van-card__content {
  /* padding: 8px -1px !important; */
  min-height: 0px !important;
}
.van-card {
  padding: 0 !important;
}
.van-card:not(:first-child) {
  /* !important 无限权重 */
  margin-top: 0 !important;
}
/* 让图标栏变大 */
.van-image {
  width: 32px;
  height: 35px;
}
/* 设置图标上下的间距 */
.van-grid-item__content {
  padding: 8px !important;
}
/* 卡片价格字体颜色 */
.van-card__price {
  color: red;
}
</style>