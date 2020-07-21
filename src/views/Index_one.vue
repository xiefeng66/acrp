<template>
  
    <div class="login_bg">
    <!-- 主页 -->
      <div id="logo">
        <img src="../assets/images/kdy.png" alt width="100"/>
      </div>
      <router-link class="login_btn" to='/login'>登&nbsp;&nbsp;录</router-link>
      <router-link class="login_btn" to='/register'>立&nbsp;&nbsp;刻&nbsp;&nbsp;注&nbsp;&nbsp;册</router-link>
      <!-- <a class="login_btn" href="Javascript:;">登&nbsp;&nbsp;录</a> -->
      <!-- <a class="login_btn" href="Javascript:;">立&nbsp;&nbsp;刻&nbsp;&nbsp;注&nbsp;&nbsp;册</a> -->
      <div class="other_login">
        <div class="other"></div>
        <span>其他方式登录</span>
        <div class="other"></div>
      </div>
      <div class="other_choose">
        <a href="Javascript:;">
          <img src="../assets/images/qq.png" alt />
        </a>
        <a href="Javascript:;">
          <img src="../assets/images/wx.png" alt />
        </a>
        <a href="Javascript:;">
          <img src="../assets/images/wb.png" alt />
        </a>
        
      </div>
      <div>
      <van-button to="/index" color="#ddcacc" size="mini">稍后登录</van-button>
        <!-- <a>稍后登录</a> -->
      </div>
    </div>

</template>

<script>
export default {};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #374782;
  /* color: white; */
}
input {
  outline: none;
}

.login_bg{
    width:100%;
    min-height: 100%;
    text-align: center;
    background: url("../assets/images/open.png");
    position: absolute;
}
#logo{
    margin: 11% auto;
    /* width: 100%; */
}
.login_btn{
    width: 80%;
    margin: 10%;
    display: block;
    padding:3% 0 ;
    -webkit-box-shadow: #8f9bad 0px 0px 20px;
    -moz-box-shadow: #8f9bad 0px 0px 20px;
    box-shadow: #8f9bad 0px 0px 20px;
}
.login_btn {
    width: 80%;
    margin: 10%;
}
.other_login{
    padding-top: 40px;
    width: 80%;
    height: 140px;
    /* position: absolute; */
    top:67%;
    margin: 0 10%;
}
.other_login .other,.other_login span{
    display: inline-block;
    vertical-align: middle;
}
.other_login .other{
    width: 28%;
    height: 8px;
    border-bottom:1px solid #2f2c59;
}
.other_login span{
    width:40%;
}
.other_choose{
    width: 74%;
    top:67.5%;
    position: absolute;
    margin: 0 13%;
}
.login_bg .other_choose a{
    display: block;
    float: left;
    border: 2px solid #505887;
    /* -webkit-border-radius: 50%;
    -moz-border-radius: 50%; */
    border-radius: 50%;
    position: absolute;
}
.other_choose a:nth-child(2) {
    left:42%;
}
.other_choose a:nth-child(3) {
    left:80%;
}
.other_choose a img{
    width: 60%;
    padding: 14% 0;
}
</style>