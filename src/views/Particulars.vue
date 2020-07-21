<template>
  <!-- 购物详情 -->
  <!-- vue中style lang="scss" scoped中的scoped
lang="scss" scoped
  表示局部部署 , 没有的话里面的css样式会在所有组件中进行渲染-->
  <div class="Particulars">
    <!-- 第一个div  标题开始 -->
    <div class="Particulars_1">
      <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
    </div>
    <!-- 第一个div  标题结束 -->
    <!-- 第二个div  轮播图开始 -->
    <div class="Particulars_2">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(p,i) in barcode" :key="i">
          <img :src="barcode[i]" height="250" width="100%" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 第二个div  轮播图结束 -->
    <!-- 第三个div  轮播图开始 -->
    <div class="Particulars_3">
      <van-card :price="arrParse.price" :origin-price="arrParse.prices" :title="arrParse.title" />
    </div>

    <!-- 第三个div  轮播图结束 -->
    <!-- 第四个div  发货地（旁边月销），运费，规格（选择），属性（参数）  开始 -->
    <div class="Particulars_4">
      <div class="Particulars_4-1">
        <div class="Part">
          <div>
            <span>快递: 免运费</span>
          </div>
          <div>
            <span>月销{{arrParse.sales}}</span>
          </div>
          <div>
            <span>{{arrParse.sell_point}}</span>
          </div>
        </div>
        <div class="Part">
          <div>
            <span>保障</span>
          </div>
          <div style="left: 91px;color:#2c3e50;">
            <span>假一倍十·15天价保·极速退货</span>
          </div>
          <div>
            <span></span>
          </div>
        </div>
        <div class="Part2">
          <div class="Part2-1">规格</div>
          <!-- 请选择分类点击跳出购物车 -->
          <van-cell title="请选择分类" is-link @click="show = true" />
        </div>
        <div class="Part2">
          <div class="Part2-1">参数</div>
          <van-cell title="参数" is-link @click="showop = true" />
          <!-- 自定义图标  下面弹出白框-->
          <van-popup
            v-model="showop"
            closeable
            close-icon="close"
            position="bottom"
            round
            :style="{ height: '70%' }"
          >
            <div class="product0">产品参数</div>
            <div class="product">
              <!-- <ul class="product-ul">
                <li>
                  <div>材质</div>
                  <div>陶</div>
                </li>
                <li>
                  <div>3</div>
                  <div>3</div>
                </li>
                <li>
                  <div>2</div>
                  <div>2</div>
                </li>
                <li>
                  <div>4</div>
                  <div>4</div>
                </li>
                <li>
                  <div>5</div>
                  <div>5</div>
                </li>
              </ul>-->
              <table>
                <tr v-for="(item,name,index) in spec" :key="index">
                  <td class="xiangq1">{{name}}</td>
                  <td class="xiangq2">{{item}}</td>
                </tr>
              </table>
            </div>
          </van-popup>
        </div>
      </div>
      <!-- 商品评价 -->
      <div class="Particulars_4-2">
        <van-cell title="商品评价(2135)" is-link value="查看全部" />
        <div>
          <van-icon name="manager" />
          <span>名字</span>
          <p>评价: 基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过</p>
        </div>
        <div>
          <van-icon name="manager" />
          <span>名字</span>
          <p>评价: 基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过</p>
        </div>
      </div>
      <div class="Particulars_4-2">
        <div>
          <!-- <img src="" alt=""> -->
          <van-image
            width="3.5rem"
            height="3.5rem"
            fit="contain"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <div class="dianpu">
            <!-- <van-grid clickable :column-num="1">
              <van-grid-item icon="home-o" text="路由跳转" />style="float: left;"
            </van-grid>-->
            <span>店铺名字详情</span>
            <van-icon name="hot" size="24px" />
            <van-icon name="hot" size="24px" />
            <van-icon name="hot" size="24px" />
          </div>
        </div>

        <div>
          <van-row style="font-size: 15px;">
            <van-col span="8">
              宝贝描述
              <span style="color:#ff5000;">4.9高</span>
            </van-col>
            <van-col span="8">
              卖家服务
              <span style="color:#ff5000;">4.9高</span>
            </van-col>
            <van-col span="8">
              物流服务
              <span style="color:#ff5000;">4.9高</span>
            </van-col>
          </van-row>
        </div>
      </div>
      <!-- 商品图片开始 -->
      <div class="Particulars_4-3">
        <div class="detail-desc">
          <div class="divide-bar">
            <span class="line"></span>
            <div class="icon-info">
              <span class="taobao-iconfont">----</span>
              <span class="icon-text">详情</span>
              <span class="taobao-iconfont">----</span>
            </div>
            <span class="line"></span>
          </div>
          <van-image
            v-for="(p,i) in item_desc"
            :key="i"
            lazy-load
            class="desc-img"
            :src="item_desc[i]"
          />
          <img
            class="desc-img"
            src="//gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar"
            alt="价格说明"
          />
        </div>
      </div>
      <!-- 商品图片结束 -->
      <p>{{this.$route.params.id}}</p>
    </div>
    <!-- 商品显示规格类型 -->
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :quota="quota"
      :hide-stock="sku.hide_stock"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
      @sku-selected="propValue"
    />
    <!-- 第四个div  发货地（旁边月销），规格（选择），属性（参数），运费  结束 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <!-- <van-goods-action-button type="warning" text="加入购物车" @click="show = true" /> -->
      <van-goods-action-button type="danger" text="立即购买" @click="show = true" />
    </van-goods-action>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 购物车图片地址
      imgUrl: "",
      //商品规格
      datum1: "", //机身颜色
      datum2: "", //内存容量
      // 商品参数
      spec: {},
      //顶部轮播图数据
      barcode: {},
      arrParse: {},
      item_desc: {},
      showop: false,
      quota: 9, //限购数量 库存旁边显示限购数
      show: false, //sku的框的显示 false不会自动弹出购买框
      goods: {
        // 默认商品 sku 缩略图
        picture: ""
      },
      sku: {
        // 商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "",
            v: [
              {
                id: "30349",
                name: "",
                imgUrl: "https://img.yzcdn.cn/vant/tree.jpg"
              },
              {
                id: "1215",
                name: "",
                imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg"
              },
              {
                id: "1255",
                name: "",
                imgUrl: "https://img.yzcdn.cn/vant/leaf.jpg"
              }
            ],
            k_s: "s1"
          },
          {
            k: "",
            v: [
              {
                id: "1193",
                name: "1"
              },
              {
                id: "1194",
                name: "2"
              }
            ],
            k_s: "s2"
          }
        ],
        // 所有 sku 的组合列表，如下是：白色1、白色2、天蓝色1、天蓝色2
        list: [
          {
            id: 2259,
            price: 0, //价格以分为单位
            s1: "1215", // 规格类目 白色1 对应规格值 id
            s2: "1193", // 规格类目 白色2 对应规格值 id
            stock_num: 20, //库存
            goods_id: 946755
          },
          {
            id: 2260,
            price: 110, //价格以分为单位
            s1: "1215",
            s2: "1194",
            stock_num: 2, //库存
            goods_id: 946755
          },
          {
            id: 2259,
            price: 3330, //价格以分为单位
            s1: "1255", // 规格类目 白色1 对应规格值 id
            s2: "1193", // 规格类目 白色2 对应规格值 id
            stock_num: 20, //库存
            goods_id: 946755
          },
          {
            id: 2260,
            price: 9990, //价格以分为单位
            s1: "1255",
            s2: "1194",
            stock_num: 2, //库存
            goods_id: 946755
          },
          {
            id: 2257,
            price: 1300, //价格以分为单位
            s1: "30349", // 规格类目 天蓝色1 对应规格值 id
            s2: "1193", // 规格类目 天蓝色2 对应规格值 id
            stock_num: 40, //库存天蓝色1
            goods_id: 946755
          },
          {
            id: 2258,
            price: 100, //价格以分为单位
            s1: "30349",
            s2: "1194",
            stock_num: 50, //库存天蓝色2
            goods_id: 946755
          }
        ],
        price: "5.00", // 显示未选择类型的价格
        stock_num: 227 // 商品总库存
      }
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/index").catch(err => err);
    },
    propValue(datum) {
      // console.log(datum);

      if (datum.skuValue.skuKeyStr == "s1") {
        this.imgUrl = datum.skuValue.imgUrl;
        this.datum1 = datum.skuValue.name;
      } else if (datum.skuValue.skuKeyStr == "s2") {
        this.datum2 = datum.skuValue.name;
      }
    },
    // 立即购买
    onBuyClicked(sku) {
      let trolley = [];
      // 商品编号
      var id = this.$route.params.id;
      //总价
      let totalprices = sku.selectedSkuComb.price * sku.selectedNum;
      console.log(totalprices);
      // 用户账号.username  从vuex里面获取
      let con = this.$store.state.con[0].username;
      console.log(con);
     // 图片地址  价格  机身颜色   标题  数量  总价 商品编号  用户账号
      trolley.push(this.imgUrl,sku.selectedSkuComb.price,this.datum1,
      this.arrParse.title,sku.selectedNum,totalprices,id,con,this.datum2);
      // console.log(trolley);
      //存储容量另行传递:  前端传参给后台，里面有特殊字符加号，传输过程中变成空格，解决了
      // var datum2 = encodeURIComponent(`${this.datum2}`); //在传参的过程中进行编码
      //  console.log(datum2);
       var parm =  JSON.stringify(trolley);
      this.$router.push({path: '/Order', query: {cbc: parm}}).catch(err => err);

    },
    // 加入购物车
    onAddCartClicked(sku) {
      console.log(sku.selectedNum);
      let trolley = [];
      // 商品编号
      var id = this.$route.params.id;
      //总价
      let totalprices = sku.selectedSkuComb.price * sku.selectedNum;
      // 用户账号.username  从vuex里面获取
      let con = this.$store.state.con[0].username;
      console.log(con);
      console.log(sku.selectedNum);
      // 图片地址  价格  机身颜色   标题  数量  总价 商品编号  用户账号
      trolley.push(this.imgUrl,sku.selectedSkuComb.price,this.datum1,
      this.arrParse.title,sku.selectedNum,totalprices,id,con);
      console.log(trolley);
      // this.datum2
      //存储容量另行传递:  前端传参给后台，里面有特殊字符加号，传输过程中变成空格，解决了
      var datum2 = encodeURIComponent(`${this.datum2}`); //在传参的过程中进行编码
      this.axios.get("/trolley1?trolley=" + trolley + "&datum2=" + datum2).then(res => {
          this.show = false;
          console.log(res.data);
        });
    }
  },
  mounted() {
    // 获取用户信息
    //在挂载完成后执行的业务代码
    //请求WEB服务器中以当前地址栏ID为条件的文章标题、正文及相关信息
    var id = this.$route.params.id;
    //发送AJAX请求
    this.axios.get("/Particulars?id=" + id).then(res => {
      this.arrParse = res.data.article;
      console.log(res.data);
      // 商品显示规格类型开始
      this.goods.picture = res.data.article.image;
      // 商品显示规格类型结束
      // 将图片链接字符串转换为数组
      this.item_desc = JSON.parse(res.data.article.item_desc);
      this.barcode = JSON.parse(res.data.article.barcode);
      //价格
      this.spec = JSON.parse(res.data.article.spec);
      let a = JSON.parse(res.data.article.pitchup);
      this.sku.price =Math.max.apply(null, a)*0.1; 
      console.log(a);
      for (let i = 0; i < a.length; i++) {
        this.sku.list[i].price = a[i];
      }
      //储存容量
      let b = JSON.parse(res.data.article.genre);
      this.sku.tree[1].k = b[0][0];
      for (let i = 0; i < b[1].length; i++) {
        this.sku.tree[1].v[i].name = b[1][i];
      }
      //机身颜色
      let c = JSON.parse(res.data.article.created);
      this.sku.tree[0].k = c[0][0];
      for (let i = 0; i < c[1].length; i++) {
        this.sku.tree[0].v[i].name = c[1][i];
      }
      // 将字符串转换为对象
      // res.data.article.sales
      this.$store.commit("adds1", id);
    });
  }
};
</script>
<style scoped>
.Particulars {
  background: whitesmoke;
}
.Particulars_1 {
  width: 100%;
  height: 30px;
  /* border-bottom: 1px solid rgb(179, 176, 176); */
  /* background: whitesmoke; */
  background: red;
  position: fixed;
}
.Particulars_2 {
  /* display: none; */
  position: inherit;
}
/* 卡片中间的空隙 */
.van-card {
  padding: 0 !important;
  background: white;
}
/* !important 无限权重 */
.van-card:not(:first-child) {
  margin-top: 0 !important;
}
.van-card__content {
  min-height: 0px !important;
}
.desc-img >>> .van-image__error {
  position: inherit !important;
}
/* 设置价格,标题，介绍   颜色 字体 */
.van-card__price {
  font-size: 22px;
  color: red;
}
/* 价格向右偏移 */
.van-card__bottom {
  line-height: 20px;
  margin-left: 8px;
}
.van-card__title {
  font-size: 15px;
  color: #000;
  font-weight: bold;
  margin-left: 10px;
  margin-right: 10px;
}
.van-card__origin-price {
  font-size: 15px;
}
/* -----------发货地（旁边月销）运费----------------- */
.Part {
  position: relative;
  height: 40px;
  background-color: rgb(255, 255, 255);
}
.Part div:nth-child(1) {
  position: absolute;
  margin-left: 12px;
  font-size: 13px;
  top: 12px;
  color: rgb(153, 153, 153);
}
.Part div:nth-child(2) {
  position: absolute;
  font-size: 13px;
  overflow: hidden;
  left: 167.266px;
  top: 12px;
  color: rgb(153, 153, 153);
}
.Part div:nth-child(3) {
  position: absolute;
  margin-right: 12px;
  font-size: 13px;
  right: 0px;
  top: 12px;
  color: rgb(153, 153, 153);
}
/* ---------发货地（旁边月销）运费------------ */
.Part2 {
  width: 100%;
  height: 36px;
}
.Part2-1 {
  line-height: 36px;
  padding-left: 15px;
  width: 16%;
  height: 36px;
  background: white;
  float: left;
  font-size: 14px;
  color: gray;
}
.Part2 .van-cell {
  width: 79%;
  padding: 6px 16px;
}
/* 改变默认的position属性*/
.van-cell {
  position: initial !important;
}
.van-image {
  position: initial !important;
}
.van-cell__value {
  position: initial !important;
}
.van-icon {
  position: initial !important;
}
/* 商品评价开始 */
.Particulars_4-2 {
  margin-top: 10px;
  background: white;
}
.Particulars_4-2 div span {
  font-size: 15px;
  color: gray;
}
.Particulars_4-2 div p {
  font-size: 12px;
  margin-bottom: 10px;
}
.dianpu {
  width: 100px;
  height: 50px;
  float: right;
  margin-right: 200px;
}
/* 商品评价结束 */
/* 图片大小调整 */
/* .Particulars_4-3{
  width: 100%;
} */
.Particulars_4-3 {
  background-color: #fff;
}

/* 深度查找 */
.Particulars_4-3 >>> .detail-desc img {
  width: 100%;
}

.Particulars_4-3 >>> .detail-desc img:last-child {
  margin-bottom: -4px;
}
/* 产品参数 */
/* 商品参数向右移动 */
.product {
  margin-left: 25px;
}
.product-ul li div {
  float: left;
  height: 38px;
}
.product-ul > li div:first-child {
  width: 20%;
  color: #999;
}
.product-ul > li div:last-child {
  width: 80%;
  text-align: left;
}
.product0 {
  height: 15%;
  line-height: 60px;
  text-align: center;
}
/* 商品图片详情文字 */
.divide-bar {
  background-color: #f2f2f2;
  color: #999;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  padding: 0.08rem 0;
  /* font-size: 0; */
}
/* van-image__loading  需要刷新的时候不要跳出一张没有加载的图片*/
.van-image >>> .van-image__loading {
  position: inherit !important;
}
/* 商品参数详情 */
.xiangq1 {
  width: 47px;
  padding-bottom: 10px;
}
.xiangq2 {
  padding-bottom: 10px;
}
</style>