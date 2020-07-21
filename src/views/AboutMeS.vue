<template>
  <div class="page page-profile">
    <van-nav-bar
      title="个人资料"
      left-text="返回"
      right-text="保存"
      left-arrow
      @click-left="onClickLeft"
      @click-right="Dialog"
    />
    <div class="container">
      <van-cell-group>
        <van-cell title="更改头像" is-link>
          <van-uploader :after-read="onRead" accept="image/png, image/jpg, image/jpeg">
            <van-image width="40px" height="40px" round :src="img" />
            
          </van-uploader>
        </van-cell>
        <!-- 调起纯数字键盘 :placeholder="con.phone"-->
        <!-- 账号 -->
        <van-field readonly maxlength="11" v-model="con.username" type="digit" label="账号" />
        <van-field v-model="con.nick_name" maxlength="8" label="昵称" />
        <!-- 输入任意文本 -->
        <van-field v-model="con.phone" maxlength="11" type="digit" label="手机号" />
        <!-- 输入手机号，调起手机号键盘 -->
        <van-field v-model="con.email" maxlength="11" type="digit" label="邮箱" />
        <div data-v-7948ae28 class="van-cell van-field">
          <div class="van-cell__title van-field__label">
            <span>性别</span>
          </div>
          <div class="van-cell__value van-field__value">
            <div class="van-field__body">
              <van-radio-group v-model="con.sex" direction="horizontal">
                <van-radio name="0">女</van-radio>
                <van-radio name="1">男</van-radio>
              </van-radio-group>
            </div>
          </div>
        </div>
        <van-field maxlength="12" v-model="con.birthday" label="出生日期" @click="showPopup" />
        <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
          <van-datetime-picker
            v-model="currentDate"
            type="date"
            title="选择年月日"
            :min-date="minDate"
            :max-date="maxDate"
            @confirm="confirm"
            @cancel="cancel"
            :formatter="formatter"
          />
        </van-popup>
        <van-field v-model="con.regions" maxlength="8" label="地区" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  //隐藏手机号中间四位,  手机号隐藏4位数 ，过滤
  filters: {
    phoneFilter(val) {
      let reg = /^(.{3}).*(.{4})$/;
      if (val != null) {
        let a = val.replace(reg, "$1****$2");
        return a;
      }
    }
  },
  data() {
    return {
      img: "",
      // 日期开始结束
      show: false, //开始时间弹窗
      minDate: new Date(1990, 1, 1), //最小时间
      maxDate: new Date(), //最大时间
      currentDate: new Date(), //开始标准时间
      show: false,
      // 日期开始结束
      con: {},
      aba: {},
      one: [],
      // head_pic: ""
    };
  },
  mounted() {
    // 获取用户信息
    //需要刷新后才能获取
     this.aba = this.$store.state.con;
    this.con = this.$store.state.con[0];
    console.log(this.con);
    this.con.birthday = this.con.birthday.slice("T", 10);
    console.log(this.con.head_pic.slice(0,1));
    // if (this.con.head_pic.slice(0,1) == 'a') {
      this.img = require("../../../server/imgas/ioc/" + this.con.head_pic);
      console.log(this.img);
    // }else{
    //   this.img = this.con.head_pic;
    //   console.log(this.img);
    // }
    
  },
  methods: {
    //传入file文件
    //图片上传前事件 上传图片
    onRead(file) {
      console.log(file); //file文件如下图
      //通过FormData构造函数创建一个空对象
      var formdata = new FormData();
      //可以通过append()方法来追加数据
      formdata.append("files", file.file);
      //通过get方法对值进行读取
      console.log(formdata.get("files"));
      this.img = file.content;
      formdata.append("username", this.con.username);
      this.axios.post("/single", formdata).then(res => {
        console.log(res, 11);
        this.aba[0].head_pic = res.data.fame;
        // console.log(this.aba[0].head_pic);
        this.$store.commit("adds", this.aba);
      });
    },
    // 日期开始结束

    // 选择开始时间
    start() {
      this.show = true;
    },
    confirm() {
      this.show = false;
      // 截取最后两位数,使月份为一位数的时候加0
      let month = ("0" + (Number(this.currentDate.getMonth()) + 1)).slice(-2);
      let date = ("0" + this.currentDate.getDate()).slice(-2);
      this.con.birthday =
        this.currentDate.getFullYear() + "-" + month + "-" + date;
    },
    // 点击取消
    cancel() {
      this.show = false;
    },
    // 处理控件显示的时间格式
    formatter(type, value) {
      // 格式化选择器日期
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      } else if (type === "day") {
        return `${value}日`;
      }
      return value;
    },
    // 日期开始结束
    showPopup() {
      this.show = true;
    },
    onClickLeft() {
      this.$router.push("/set").catch(err => err);
    },
    //（确认、取消）的弹出框@click-right="Dialog"
    Dialog() {
      this.$dialog
        .confirm({
          title: "标题",
          message: "是否保存",
          confirmButtonColor: "red"
        })
        .catch(() => {
          console.log("点击了取消");
        })
        .then(() => {
          console.log("点击了确认");       
          let one = [];
          this.one.push(
            this.con.nick_name, // nick_name: "",//账号名
            this.con.phone,// phone: "",//电话
            this.con.email,// email: "",//邮箱
            this.con.sex, //  sex: "1",//性别
            this.con.birthday,   // birthday: "",//出生日期
            this.con.regions,// regions: "",//地区
            this.con.username//username 账号
          );
          if (
            this.con.nick_name != "" &&
            this.con.phone != "" &&
            this.con.email != "" &&
            this.con.birthday != "" &&
            this.con.regions != ""
          ) {
            console.log(this.one);
            this.axios.get("/AboutMeS?one=" + this.one).then(res => {
              console.log(res);
              this.$store.commit("adds", res.data.result2);
            });
          } else {
            alert("个人资料不能为空");
          }
        });
    }
  }
};
</script>
<style scoped>
.van-cell:first-child {
  /* line-height: 20px; */
  /* 头像的下边距清零 */
  padding: 10px 10px 0 16px;
  /* border-radius: 50%; */
}
.van-cell:first-child > .van-cell__title {
  /* 更改头像上下居中,用内边距填充 */
  padding-top: 10px;
}
.van-cell:first-child > .van-cell__right-icon {
  /* 更改头像上下居中,用内边距填充 */
  padding-top: 10px;
}
/*  */
.div_span {
  -webkit-box-flex: 0;
  -webkit-flex: none;
  flex: none;
  box-sizing: border-box;
  width: 90px;
  text-align: left;
}
</style>