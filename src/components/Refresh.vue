<template>
  <div>
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
  </div>
</template>
<script>
export default {
    data() {
    return {
      //顶部轮播图数据
      barcode:{},
      arrParse: {},
      item_desc: {},
      showop: false,
      quota: 9, //限购数量 库存旁边显示限购数
      show: false, //sku的框的显示 false不会自动弹出购买框
      goods:  {
         // 默认商品 sku 缩略图
        picture:"" 
      },
       sku: {
        // 商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色",
            k_s: "s1",
            // skuKeyStr：value 值会是从属于当前类目的一个规格值 id
            v: [
              {
                id: "30349",
                name: "天蓝色",
                imgUrl:
                  "https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg"
              },
              {
                id: "1215",
                name: "白色",
                imgUrl:"https://img.yzcdn.cn/vant/cat.jpeg"
              }
            ],
            
          },
          {
            k: "尺寸",
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
            k_s: "s2",
          }
        ],
        // 所有 sku 的组合列表，如下是：白色1、白色2、天蓝色1、天蓝色2
        list: [
          {
            id: 2259,
            price: 120, //价格以分为单位
            s1: "1215",// 规格类目 白色1 对应规格值 id
            s2: "1193",// 规格类目 白色2 对应规格值 id
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
            id: 2257,
            price: 1300, //价格以分为单位
            s1: "30349",// 规格类目 天蓝色1 对应规格值 id
            s2: "1193",// 规格类目 天蓝色2 对应规格值 id
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
        stock_num: 227, // 商品总库存
      },
    };
  },
   methods: {
    onBuyClicked(sku) {
      this.$toast("buy:" + JSON.stringify(sku));
      console.log(JSON.stringify(sku));
    },
    onAddCartClicked(sku) {
      this.$toast("add cart:" + JSON.stringify(sku));
    },
    propValue(q) {
      
      console.log(q);
      
    }
  },
};
</script>