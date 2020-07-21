<template>
  <div id="Personal">
    <!-- 个人中心---名字设置 -->
    <div class="Personal_div1">
      <!-- <van-image round width="60px" height="60px" :src="require('../assets/images/cat.png')" /> -->
      <van-image v-if="con!=''" round width="60px" height="60px" :src="con.head_pic" />
      <van-image round width="60px" height="60px" :src="require('../assets/images/cat.png')" v-else />
      <div class="Personal_div1_1">
        <p>{{con!=''? con.nick_name : "游客"}}</p>
        <!-- 取的名字  {{par.nick_name!=''? par.nick_name : "游客"}}-->
        <!-- if判断是否绑定手机号  绑定就不显示 -->
        <!-- <p class="pbang" >已绑定手机号</p> -->
        <p class="pbang" v-if="con!=''">黄金会员</p>
        <van-button v-else round size="mini" color="#c61e11">未登录</van-button>
      </div>
      <div id="Personal_div1_2" to="/set">
        <router-link to="/set">
          <van-icon name="setting-o" size="25px" to="/set" />
        </router-link>
      </div>
    </div>
    <!-- 个人中心---名字设置结束 -->

    <!-- 当前余额  当前佣金   优惠价开始-->
    <van-grid :border="false" :column-num="3" id="Personal_div2">
      <van-grid-item>
        <p>当前余额</p>
        <!--{{par.money}}  {{par.points}}-->
        <span>{{con!=''? con.money : "00"}}</span>
      </van-grid-item>
      <van-grid-item>
        <p>当前佣金</p>
        <span>{{con!=''? con.points : "00"}}</span>
      </van-grid-item>
      <van-grid-item>
        <p>优惠劵</p>
        <span>2</span>
      </van-grid-item>
    </van-grid>
    <!-- 当前余额  当前佣金   优惠价结束-->
    <!-- 优惠券单元格开始   我的订单-->
    <div class="Personal_div3">
      <!-- <van-coupon-cell title="我的订单"  chosen-coupon="number"/> -->
      <van-cell title="我的订单" is-link value="全部订单" />
      <van-grid :border="false" :column-num="5" class="Personal_div3_1">
        <van-grid-item>
          <van-icon name="balance-list-o" size="33px" />
          <span>待付款</span>
        </van-grid-item>
        <van-grid-item>
          <van-icon name="underway-o" size="33px" />
          <span>待发货</span>
        </van-grid-item>
        <van-grid-item>
          <van-icon name="shop-collect-o" size="33px" />
          <span>待收货</span>
        </van-grid-item>
        <van-grid-item>
          <van-icon name="flower-o" size="33px" />
          <span>待评价</span>
        </van-grid-item>
        <van-grid-item>
          <van-icon name="service-o" size="33px" />
          <span>售后/退款</span>
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 优惠券单元格结束 我的订单-->
    <!-- 列表开始 -->
    <div class="Personal_div4">
      <van-cell title="会员中心" is-link icon="gem" />
      <van-cell title="我的卡劵" is-link icon="coupon" />
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <van-cell title="收藏商品" is-link icon="star" />
      <van-cell title="地址管理" is-link to="/Profile" icon="location" right-icon="location" />
      <van-cell title="其他" >
        <!-- 使用 right-icon 插槽来自定义右侧图标 shop-o-->
        <template #right-icon>
          <van-icon name="location" style="line-height: inherit;" />
        </template>
      </van-cell>
    </div>
    <!-- 列表结束 -->
    <my-foot></my-foot>
    <!-- <my-ajsi></my-ajsi> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      con: {},
      pic: 1
    };
  },
  mounted() {
    // 获取用户信息
    // console.log(this.$store.state.con[0]);
    if (this.$store.state.con[0]) {
      this.con = this.$store.state.con[0];
      console.log(this.con);
      // 截取字符串第一位, 不等于a说明没有拼接
      // console.log(this.con.head_pic.slice(0,1));
      if (this.con.head_pic.slice(0, 1) != "/") {
        this.con.head_pic = require("../../../server/imgas/ioc/" + this.con.head_pic);
        this.pic = 0;
      }
    }else{
      this.con ='';
    }
  },
  methods: {}
};
</script>
<style>
#Personal {
  background: whitesmoke;
  width: 100%;
  height: 100%;
}
/* #Personal div{
  background: gray;
} */
/*  个人中心---名字设置 */
.Personal_div1 {
  height: 10%;
  /* width: 100%; */
  min-height: 100%;
  background: #01c07a;
  /* 设置圆角边框 */
  border-radius: 0 0 40px 40px;
}
/* 绑定手机号字体大小 */
.pbang {
  color: rgb(255, 217, 0);
  font-size: 12px;
}
.Personal_div1:nth-child(1) {
  padding: 20px;
}
.Personal_div1_1 {
  font-size: 15px;
  width: 80px;
  height: 30px;
  margin-top: -46px;
  margin-left: 66px;
  text-align: center;
  /* 绝对定位 */
  position: absolute;
  color: white;
}
#Personal_div1_2 {
  /* 浮动设置图标移动到最右边 */
  float: right;
  margin-right: 0px;
}

/* 当前余额  当前佣金   优惠价 */
#Personal_div2 {
  background: white;
  width: 95%;
  /* 绝对定位 */
  position: absolute;

  margin: -16px 0 0 3%;
}
.Personal_div3 {
  width: 94%;
  margin-top: 64px;
  margin-left: 3%;
}
/*   优惠券单元格结束 我的订单 设置字体大小，上外边距*/
.Personal_div3_1 {
  font-size: 12px;
}
.Personal_div3_1 span {
  margin-top: 3px;
}
/*  列表开始  */
/* 同Personal_div3对齐 */
.Personal_div4 {
  width: 94%;
  margin-top: 10px;
  margin-left: 3%;
}
</style>