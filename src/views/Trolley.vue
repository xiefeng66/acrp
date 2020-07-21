<template>
  <div class="Trolley">
    <!-- 购物车 -->
    <!-- 复选框开始 -->
    <van-nav-bar
      title="标题"
      left-text="返回"
      @click-left="onClickLeft"
      :right-text="righttext"
      @click-right="righttext=='删除' ? shanchu() : onClickRight()"
    />
    <van-checkbox-group max="10" v-model="result" ref="checkboxGroup" icon-size="20px">
      <div>
        <!-- <p>{{result}}</p> -->
        <!-- <div class="list-chex">
          <van-checkbox name="a"></van-checkbox>
          <span>艾畅旗舰店</span>
          <div class="chex-div">
            <a href="#">领券</a>
            <a href="#">编辑</a>
          </div>
        </div>-->
        <div class="list-lie">
          <h3 v-if="kong!=''">{{kong}}</h3>
          <ul v-else>
            <li v-for="(p,i) in pack" :key="i">
              <div class="lie-div">
                <van-checkbox :name="i"></van-checkbox>
                <div class="div-img">
                  <a href>
                    <img :src="pack[i].picture" alt />
                  </a>
                </div>
                <div class="div-a">
                  <h4>
                    <a href>{{pack[i].product_name}}</a>
                  </h4>
                  <div class>
                    <span>{{pack[i].specifica}}</span>
                  </div>
                  <div class>
                    <div class>
                      总价:￥
                      <b class="price">{{(pack[i].totalprices*0.1).toFixed(2)}}</b>
                    </div>
                    <van-stepper
                      v-model="pack[i].product_quantity"
                      theme="round"
                      button-size="22px"
                      min="1"
                      max="9"
                      disable-input
                      @plus="plus(i)"
                      @minus="minus(i)"
                    />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </van-checkbox-group>
    <!-- 复选框结束 -->
    <!-- 商品列表开始 -->
    <router-view v-if="isRouterAlive"></router-view>
    <!-- 商品列表结束 -->

    <!--  监听全选按钮,是否全选 -->
    <van-submit-bar :price="zhongjiao*10" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked" @click="checkeds()">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送,
        <span @click="onClickEditAddress">修改地址</span>
      </template>
    </van-submit-bar>
    <my-foot></my-foot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 显示管理按钮,点击管理按钮变删除
      righttext: "管理",
      // 第一次所有商品数量
      diyichi: [],
      // 购物车里空空的,快去查看商品吧
      kong: "",
      // 防屌丝,多次切换页面  第一次所有商品数量
      diao: [],
      // 购物车商品汇总
      pack: [],
      //购物车商品数量
      mes: 0,
      result: [],
      checked: false,
      inputsu: 1,
      // 删除数据后更新
      isRouterAlive: true,
      zhongjiao:0,
    };
  },
  mounted() {
    // 获取用户信息
    //需要刷新后才能获取
    let con = this.$store.state.con[0];
    this.axios.get("/trolley2?username=" + con.username).then(res => {
      this.mes = res.data.mes;
      this.pack = res.data.result1;
      console.log(this.pack);
      // 按数量顺序防止多次请求
      // res.data.code==444 购物车没有商品
      if (res.data.code == 444) {
        this.kong = res.data.message;
      } else {
        this.pack.forEach(e => {
          this.diao.push(e.product_quantity);
      });
        
      }
    });
  },
  watch: {
    result() {
      if (this.result.length == this.mes) {
        this.checked = true;
         let a = 0;
      this.result.forEach(i => {
        a =a +this.pack[i].totalprices
      });
      this.zhongjiao = a;
      } else if (this.result.length != this.mes) {
        this.checked = false;
         let a = 0;
      this.result.forEach(i => {
        a =a +this.pack[i].totalprices
      });
      this.zhongjiao = a;
      }
    }
    //监听底部选项卡的变化
    //监听全选按钮,是否全选
  },
  //离开当前页面显示
  //离开当前页面后发送请求修改商品数量
  destroyed() {
    var one = [];
    for (let i in this.pack) {
      let a = [];
      // id   数量    总价
      a.push(
        this.pack[i].nid,
        this.pack[i].product_quantity,
        this.pack[i].totalprices
      );
      one.push(a);
    }
    // console.log(one);
    // 二维数组传参
    // var parm =  JSON.stringify(one);
    // console.log(parm);
    var sql = "UPDATE td_orderlist SET product_quantity = CASE nid ";
    var c = "END, totalprices = CASE nid ";
    var y = "";
    var z = "";
    var p = "";
    for (let i = 0; i < one.length; i++) {
      var b = `WHEN ${one[i][0]} THEN ${one[i][1]} `;
      var d = `WHEN ${one[i][0]} THEN ${one[i][2]} `;
      y = y + b;
      z = z + d;
      if (i < one.length - 1) {
        p = p + one[i][0] + ",";
      } else {
        p = p + one[i][0];
      }
    }
    var f = `END WHERE nid IN (${p}) `;
    sql = sql + y + c + z + f;
    var sga = [];
    for (const key in one) {
      console.log(this.diao[key], one[key][1]);
      sga.push(this.diao[key] == one[key][1] ? 1 : 2);
    }
    console.log(sga);
    console.log(Math.max.apply(null, sga) == Math.min.apply(null, sga));
    console.log(this.kong);
    if (Math.max.apply(null, sga) === Math.min.apply(null, sga) &&sga.length != 1) {
      console.log("所有数量相同");
    } else {
      if (this.kong == "") {
        this.axios.get("/trolley3?sql=" + sql).then(res => {
          console.log(res);
        });
      }
    }
  },
  methods: {
    // 显示删除按钮开始
    onClickRight() {
      this.righttext = "删除";
      console.log("显示删除按钮");
    },
    onClickLeft() {
      this.righttext = "管理";
    },
    shanchu() {
      if (this.result.length != 0) {
        var ase = [];
        console.log(this.result.sort()); 
        this.result.forEach(et => {
          console.log(et);
          ase.push(this.pack[et].nid);
        });
        console.log(ase);
        // 删除购物车数据 delete array[1];
        this.axios.get("/trolley4?resu=" + ase).then(res => {
          //根据下标删除数组
           for (const et in this.result) {
            console.log(et);
            if (et==0) {
             this.pack.shift()
            }else{
              console.log(et);
              this.pack.splice(et, 1);
            }
        }
        this.result=[];
        // console.log(this.pack);
          if (this.result[0] == 0) {
            this.kong = "购物车里空空的,快去查看商品吧";
          }
          this.result = [];
          console.log(res);
        });
      } else {
        console.log("666");
      }
    },
    // 显示删除按钮结束
    checkeds() {
      if (this.checked == true) {
        this.$refs.checkboxGroup.toggleAll(true);
      } else if (this.checked == false) {
        this.$refs.checkboxGroup.toggleAll();
        console.log(this.checked);
      }
    },
    // 提交订单
    onSubmit() {
      var a=[];
      for (const key in this.result) {
        a.push(this.pack[key])
      }
      console.log(a);
      // var parm =  JSON.stringify(a);
      this.$router.push({path: '/Order', query: {cbc: a,value:this.zhongjiao}}).catch(err => err);
    },
    // 修改地址
    onClickEditAddress() {
      // this.$refs.checkboxGroup.toggleAll(true);
    },
    plus(v) {
      //修改商品加减数量的  总价和数量
      this.pack[v].product_quantity++;
      this.pack[v].totalprices =
        this.pack[v].product_quantity * this.pack[v].product_price;

      let a = 0;
      this.result.forEach(i => {
        a =a +this.pack[i].totalprices
      });
      this.zhongjiao = a;
    },
    minus(v) {
      //修改商品加减数量的  总价和数量
      this.pack[v].product_quantity--;
      this.pack[v].totalprices =
        this.pack[v].product_quantity * this.pack[v].product_price;
      
      let a = 0;
      this.result.forEach(i => {
        a =a +this.pack[i].totalprices
      });
      this.zhongjiao = a;
    }
  }
};
</script>
<style scoped>
.Trolley {
  background: white;
}
/* 使购物车向下移动 */
.van-checkbox-group {
  padding-top: 48px;
}
/* 将购物车头变色 */
.van-nav-bar {
  position: fixed;
}
/* 将购物车头顶置 */
.van-nav-bar {
  width: 100%;
}

/* 购物车*/
.van-checkbox {
  float: left;
  margin-top: 6px;
}
/* 购物车店铺名一列 */
.list-chex {
  line-height: 30px;
  height: 30px;
}
/* 领券编辑  所在的div浮动使它一列 */
.list-chex div:last-child {
  float: right;
}
/* 设置字体颜色并加上图标,图标随着字体的大小而变化 */
.list-chex > span {
  /* float: left; */
  font-size: 15px;
  background: url(../assets/images/icon-kin.png) no-repeat left center;
  background-size: 20px 20px;
  padding-left: 25px;
  margin-left: 10px;
  font-weight: inherit;
}
/* 设置字体颜色,使它们分开有边距 */
.chex-div a {
  font-size: 12px;
  color: black;
  margin-right: 6px;
}
/* 商品图片,使用商品首页图标 */
.div-img {
  float: left;
  width: 80px;
  height: 80px;
}
.div-img a img {
  width: 80px;
  height: 80px;
}
/* 商品标题,把商品标题想右移动29vw宽度 */
.div-a {
  margin-left: 29vw;
  /* 让商品标题文字满后才向下换行 */
  padding: 1px 0;
}
/* 商品标题,把商品标题 字体大小 */
.div-a h4 a {
  font-size: 12px;
  color: black;
}
.div-a div span {
  font-size: 12px;
  color: gray;
}
/* 设置价格颜色 */
.div-a div:first-child {
  color: red;
  float: left;
  /* margin-left: 20px; */
}
.van-stepper {
  margin-right: 8px;
  text-align: right;
}
/* .list-lie ul li:last-child {
  margin-bottom: 2px;
  margin-top: 30px;
} */
.list-lie ul li {
  height: 87px;
}
.list-lie ul li:last-child {
  margin-bottom: 135px;
}
/* 提交订单 栏 卡片之间的间距 */
.van-checkbox {
  /* margin-bottom: 10px; */
}
/* 把提交订单向上移动,显示出底部导航栏 */
.van-submit-bar {
  padding-bottom: 50px;
  background: #fafafa;
  z-index: 0;
}
/* 把 提交订单 高度增加 */
.van-submit-bar__bar {
  height: 60px;
}
.lie-div > .van-checkbox {
  margin-top: 20px;
}
</style>