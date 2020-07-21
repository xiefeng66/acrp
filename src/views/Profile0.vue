<template>
  <div>
    <div class="Particulars_1">
      <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
    </div>
    <p>提示：{{this.$route.query.cbc}}</p>
    <!-- 修改用户地址 -->
    <van-address-edit
      show-delete
      :area-list="areaList"
      :address-info="AddressInfo"
      detail-maxlength="30"
      show-set-default
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>
<script>
import areas from "./area.js";
export default {
  data() {
    return {
      searchResult: [],
      areaList: areas,
      AddressInfo: {}
    };
  },
  mounted() {
    //当获取用户id的时候就给他值,没有就不给值
    console.log(this.$route.query.cbc);
    if (this.$route.query.cbc == undefined) {
      console.log("没有就不给值");
      this.AddressInfo = {};
    } else {
      this.axios.get("/Profile01?id=" + this.$route.query.cbc).then(res => {
        let asd = res.data.result[0];
        console.log(asd);
        var a;
        if (asd.province == asd.cityid) {
          a = asd.cityid + "/" + asd.areaid;
        } else {
          this.AddressInfo = {
            name: asd.alias, //姓名
            tel: asd.phone, //电话
            province: "", //省份
            city: "", //城市
            country: "", //区县
            areaCode: asd.provinceid, //地址code：ID
            addressDetail: asd.address, //详细地址
            isDefault: asd.is_default == 1 ? true : false
          };
        }
      });
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push("/Profile").catch(err => err);
    },
    onSave(content) {
      console.log("点击保存按钮时触发");
      let con = this.$store.state.con[0];
      let ahio = [];
      ahio.push(con.username); //账号
      ahio.push(con.nick_name); //账号名
      ahio.push(content.addressDetail); //详细地址
      ahio.push(content.city); //市
      ahio.push(content.county); //区县
      ahio.push(content.areaCode); //邮政编码
      ahio.push(content.isDefault == true ? 1 : 0); //是否为默认地址1默认 0
      ahio.push(content.tel); //电话
      ahio.push(content.name); //姓名
      ahio.push(content.province); //省份
      console.log(ahio);
      this.axios.get("/Profile0?ahio=" + ahio).then(res => {
        console.log(res);
      });
    },
    onDelete() {
      console.log("确认删除地址时触发");
    },
    onChangeDetail(val) {
      console.log("修改详细地址时触发");
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  }
};
</script>
<style scoped>
</style>