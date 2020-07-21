<template>
  <div id="order">
    <!-- white  #f2f2f2   -->
    <van-nav-bar title="购买" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!-- 默认地址开始 -->
    <div class="order_dz">
      <van-icon name="map-marked" color="#fe5203" size="45px" />
      <div>
        <p>
          {{name}}
          <span>{{phone}}</span>
        </p>
        <p>{{diz}}</p>
      </div>
      <van-icon name="arrow" />
    </div>
    <!-- 默认地址结束   v-for="(p,i) in duer" :key="i"-->
    <ul>
      <li v-for="(p,i) in duer" :key="i">
        <div class="order_sp">
          <div class="order_sp1">
            <img
              width="25px"
              src="//gw.alicdn.com/tfs/TB1CzD7SXXXXXXJaXXXXXXXXXXX-32-32.png_40x40q90_.webp"
            />
            <span>水心店铺</span>
          </div>
          <div class="order_sp2">
            <div>
              <img width="90px" height="100px" :src="duer[i].picture" />
            </div>
            <div class="span_t">
              <span>{{duer[i].product_name}}</span>
            </div>
            <div class="span_t1">
              <!-- +'：'+ duer[8] -->
              <span>颜色和内存容量：{{duer[i].specifica }}</span>
            </div>
            <div class="span_t2">
              <p>￥{{(duer[i].totalprices)*0.1}}</p>
              <p>x{{duer[i].product_quantity}}</p>
            </div>
          </div>
          <div class="order_sp3">
            <span>七天无理由退换</span>
            <van-cell value="内容" is-link>
              <!-- 使用 title 插槽来自定义标题 -->
              <template #title>
                <span class="custom-title">售后服务</span>
                <span style=" margin-left: 10px; color: #999999">全国联保</span>
              </template>
            </van-cell>
            <!--  -->
            <van-cell value="快递免邮" is-link>
              <!-- 使用 title 插槽来自定义标题 -->
              <template #title>
                <span class="custom-title">配送方式</span>
                <span style=" margin-left: 10px; color: #999999">普通配送</span>
              </template>
            </van-cell>
            <!--  -->
            <van-cell is-link>
              <!-- 使用 title 插槽来自定义标题 -->
              <template #title>
                <span class="custom-title">开具发票</span>
                <span style=" margin-left: 10px; color: #999999">增值税电子普通发票-明细-个人-个人</span>
              </template>
            </van-cell>
            <van-cell-group>
              <van-field label-width="4em" v-model="group" label="订单备注" placeholder="选填,请先和商家协商一致" />
            </van-cell-group>
          </div>
        </div>
      </li>
    </ul>
    <!-- <button @click="showop = true">qjhwp1</button> -->
    <van-popup v-model="showop" position="bottom" :style="{ height: '70%' }" />
    <van-submit-bar
      :price="value*10"
      @click="showop = true"
      button-text="提交订单"
      @submit="onSubmit"
    />
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      // 总价
      qwe:'',
      showop: false,
      // 选填,请先和商家协商一致  订单备注
      group: "",
      // 商品数据
      duer: [],
      // 地址数据
      name: "",
      phone: "",
      diz: "",
      // 地址ID
      aid: "",
      value:0,
    };
  },
  mounted() {
    //商品数据
    this.duer = this.$route.query.cbc;
    this.value = this.$route.query.value;
    console.log(this.duer);
    let id = this.duer[0].username;
    // let id = this.duer[7]
    // this.duer[1] = (this.duer[1]*0.1).toFixed(2);
    // console.log(this.duer[1]);
    // console.log(this.duer);
    if (id == undefined) {
      Toast("请重新购买谢谢");
      setTimeout(() =>{
        // console.log("3秒钟之后执行了");
        this.$router.push("/Trolley").catch(err => err);
      }, 3000);
      // 
    } else {
      this.axios.get("/Order?id=" + id).then(res => {
        this.aid = res.data.result[0].id;
        this.name = res.data.result[0].alias;
        this.phone = res.data.result[0].phone;
        let sde = res.data.result[0];
        if (sde.province == sde.cityid) {
          this.diz = "" + sde.cityid + sde.areaid + sde.address;
        } else {
          this.diz = sde.province + "" + sde.cityid + sde.areaid + sde.address;
        }
        console.log(this.diz);
      });
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push("/index").catch(err => err);
    },
    onSubmit() {
      console.log("qweqw");
      // this.duer.push(this.aid);
      let duer = this.duer;
      console.log(duer);
      //存储容量另行传递:  前端传参给后台，里面有特殊字符加号，传输过程中变成空格，解决了
      //例如： 8+128G  加号不见
      //duer = encodeURIComponent(duer); //在传参的过程中进行编码
      for (const key in duer) {
        duer[key].specifica = encodeURIComponent(duer[key].specifica); 
      }
      duer =  JSON.stringify(duer);
                                                  //  地址id
      // this.axios.get("/Order1?saio=" + duer+'&id='+this.aid).then(res => {
      //   console.log(res);
      // });
    }
  }
};
</script>
<style scoped>
#order {
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
  /* 设置后背景颜色变了 */
  /* position: fixed; */
}
/* 订单页面地址 */
.van-nav-bar {
  background-color: #f5f5f5;
}
.order_dz {
  height: 99px;
  margin: 1px 3%;
  border-radius: 10px;
  background: white;
}
.order_dz > i {
  line-height: 90px;
  float: left;
}
.order_dz > i:last-child {
  line-height: 0px;
  float: left;
  margin-left: 280px;
  margin-top: -35px;
}
.order_dz > div {
  height: 60px;
  width: 90%;
  padding-top: 28px;
}
.order_dz div > p {
  padding-left: 60px;
  font-size: 14px;
}
.order_dz div > p span {
  font-size: 12px;
  color: gray;
}
.order_dz div > p:last-child {
  font-size: 12px;
}
/* 订单页面地址 */
.order_sp {
  height: 60%;
  margin: 1px 3%;
  margin-top: 9px;
  border-radius: 10px;
  background: white;
}
.order_sp1 {
  margin-left: 10px;
  padding-top: 15px;
}
.order_sp1 img {
  vertical-align: middle; /* 居中对齐， */
}
.order_sp2 {
  margin-top: 12px;
  margin-left: 9px;
}
.order_sp2 div:first-child {
  float: left;
}
.span_t {
  width: 55%;
  margin-left: 92px;
  font-size: 12px;
  word-break: break-all;
  display: -webkit-box; /**对象作为伸缩盒子模型展示**/
  -webkit-box-orient: vertical; /**设置或检索伸缩盒子对象的子元素的排列方式**/
  -webkit-line-clamp: 2; /**显示的行数**/
  overflow: hidden; /**隐藏超出的内容**/
}
.span_t1 {
  margin-top: 8px;
  width: 55%;
  background-color: #fafafa;
  font-size: 12px;
  color: gray;
  word-break: break-all;
  display: -webkit-box; /**对象作为伸缩盒子模型展示**/
  -webkit-box-orient: vertical; /**设置或检索伸缩盒子对象的子元素的排列方式**/
  -webkit-line-clamp: 3; /**显示的行数**/
  overflow: hidden; /**隐藏超出的内容**/
  float: left;
}
.span_t2 {
  font-size: 13px;
  text-align: right;
  margin-top: -34px;
  padding-right: 3px;
}
.order_sp3 {
  margin-top: 74px;
}
.order_sp3 > span {
  color: #ff5000;
  margin-left: 95px;
  font-size: 14px;
}
.van-cell__title {
  width: 1px !important;
}
</style>