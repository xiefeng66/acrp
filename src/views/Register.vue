<template>
  <div class="login_bg">
    <van-nav-bar title="登录" left-text="返回" right-text="登录" 
     @click-left="onClickLeft" @click-right="onClickRight" left-arrow></van-nav-bar>
    <div id="div_denglu">
      <h2>烈火狂徒科技</h2>
      
        <span class="icon_wo"></span>
        <input type="text" placeholder="账号" maxlength="11" />
        <span class="icon_suo"></span>
        <input type="password" placeholder="密码" maxlength="11" />
        <span class="icon_suo"></span>
        <input type="password" placeholder="确认密码" maxlength="11" />
        <span class="icon_duan"></span>
        <input type="password" placeholder="验证码" maxlength="6" />
        <van-button round type="info" size="small" id="icon_yan">获取验证码</van-button>
        <van-button type="primary" size="large"
          color="linear-gradient(to right, #4bb0ff, #6149f6)" id="zhuce_xia">注册</van-button>
      
    </div>
  </div>
</template>

<script>
export default {
   methods: {
    onClickLeft() {
     this.$router.push('/').catch(err => err);
    },
    onClickRight() {
      this.$router.push('/login').catch(err => err);
    },
  },
};
</script>

<style>
#div_denglu {
  width: 80%;
  height: 70%;
  margin: 10%;
  border-radius: 20px;
  /* background-color:rgba(245, 89, 89, 0.2); */
  position: absolute;
}
#div_denglu h2 {
  margin-top: 10%;
  margin-bottom: 20px;
}

#div_denglu div input {
  height: 25px;
  width: 200px;
  padding-left: 25px;
  margin: 10px 0 10px 0px;
  /* transpanrent是背景色为透明色 src="../assets/images/yanke.png"*/
  background: transparent;
  border: 0px;
  /* 下边框属性 */
  border-bottom: 1px solid gray;
  /* 设置为字母数字间距： */
  letter-spacing: 1.6px;
  /* 字体颜色 */
  color: black;
}

.icon_wo {
  width: 14%;
  height: 3rem;
  background: url(../assets/images/wo.png) no-repeat center;
  background-size: 50%;
  display: block;
  float: left;
  position: absolute;
  margin-left: 9.5%;
}
.icon_suo {
  width: 14%;
  height: 3rem;
  background: url(../assets/images/suo.png) no-repeat center;
  background-size: 50%;
  display: block;
  float: left;
  position: absolute;
  margin-left: 9.5%;
}
.icon_duan {
  width: 12%;
  height: 3rem;
  background: url(../assets/images/duan.png) no-repeat center;
  background-size: 50%;
  display: block;
  float: left;
  position: absolute;
  margin-left: 9.5%;
}
/* .other_choose {
  width: 74%;
  position: absolute;
  margin: 0 13%;
} */
.choose {
  top: 85.5%;
}
/* #div_denglu div .other_choose a{ text-align: center;}      */
#icon_yan {
  width: 26.5%;
  background-size: 50%;
  display: block;
  float: right;
  position: absolute;
  margin-left: 60%;
  margin-top: -50px;
  border: none;
}
#zhuce_xia{
    margin-top: 20px;
}
</style>