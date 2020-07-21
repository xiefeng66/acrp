<template>
  <div class="aui-container">
    <van-nav-bar title="设置" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="aui-page">
      <div class="aui-page-my">
        <div class="aui-my-info">
          <div class="aui-my-info-back"></div>
          <img :src="img" class="aui-my-avatar" />
          <div class="aui-mt-location aui-l-red"></div>
        </div>
        <div class="aui-l-content">
          <div class="aui-menu-list aui-menu-list-clear">
            <ul>
              <li class="b-line">
                <!-- <router-link to="/set"></router-link> -->
                <router-link to="/AboutMeS">
                  <div class="aui-icon">
                    <img src="../assets/images/my-in1.png" />
                  </div>
                  <h3>基本信息</h3>
                  <div class="aui-time">
                    <!-- 箭头 -->
                    <i class="aui-jump"></i>
                  </div>
                </router-link>
              </li>
              <li class="b-line">
                <router-link to="/set">
                  <div class="aui-icon">
                    <img src="../assets/images/my-in3.png" />
                  </div>
                  <h3>安全中心</h3>
                  <div class="aui-time">
                    <i class="aui-jump"></i>
                  </div>
                </router-link>
              </li>
              <li class="b-line">
                <router-link to="/set">
                  <div class="aui-icon">
                    <img src="../assets/images/my-in4.png" />
                  </div>
                  <h3>收货地址</h3>
                  <div class="aui-time">
                    <i class="aui-jump"></i>
                  </div>
                </router-link>
              </li>
              <li class="b-line">
                <router-link to="/set">
                  <div class="aui-icon">
                    <img src="../assets/images/my-in5.png" />
                  </div>
                  <h3>支付设置</h3>
                  <div class="aui-time">
                    <i class="aui-jump"></i>
                  </div>
                </router-link>
              </li>
              <li class="b-line">
                <router-link to="/set">
                  <div class="aui-icon">
                    <img src="../assets/images/my-in6.png" />
                  </div>
                  <h3>隐私</h3>
                  <div class="aui-time">
                    <i class="aui-jump"></i>
                  </div>
                </router-link>
              </li>
              <li class="b-line">
                <router-link to="/set">
                  <div class="aui-icon">
                    <img src="../assets/images/my-in8.png" />
                  </div>
                  <h3>关于应用</h3>
                  <div class="aui-time">
                    <i class="aui-jump"></i>
                  </div>
                </router-link>
              </li>
              <li class="b-line">
                <router-link to="/set">
                  <div class="aui-icon">
                    <img src="../assets/images/my-in8.png" />
                  </div>
                  <h3>退出登录</h3>
                  <div class="aui-time">
                    <i class="aui-jump"></i>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      img:'',
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push("/Personal").catch(err => err);
    }
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
};
</script>
<style scoped>
/* 设置 顶部导航栏高度*/
.van-nav-bar {
  height: 38px;
}
/* 背景 + 头像开始 */
.aui-my-info {
  position: relative;
  overflow: hidden;
}
/* 背景 */
.aui-my-info-back {
  background-image: url(../assets/images/my-bj.png);
  width: 100%;
  min-height: 220px;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
  -webkit-filter: blur(5px);
  filter: blur(5px);
}
.aui-my-avatar {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 98px;
  height: 100px;
  margin: -49px 0 0 -49px;
  border-radius: 50%;
  /* 设置头像边框为白色 */
  border: solid 4px #ffffff;
}
.aui-l-red {
  /* 砖石图标 */
  background-image: url(data:image/png;base64,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);
}
.aui-mt-location {
  background-size: 40px;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 30px 0 0 19px;
}
/* 列表背景 */
.aui-menu-list-clear {
  background: #fff;
}
ul {
  list-style: none;
}
ul {
  margin-block-end: 1em;
  padding-inline-start: 40px;
}
.aui-l-content .aui-menu-list ul li {
  display: flex;
}
.aui-menu-list li {
  padding: 12px 15px;
}
.b-line {
  position: relative;
}
.b-line:before {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid rgba(207, 207, 207, 0.95);
  color: rgba(207, 207, 207, 0.95);
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.501);
  transform: scaleY(0.501);
}
.aui-l-content .aui-menu-list-clear ul li a {
  display: flex;
  width: 100%;
  align-items: center;
}
.aui-page-my .aui-icon {
  width: 22px;
  height: 20px;
  margin-right: 10px;
}
.aui-icon img {
  width: 100%;
  display: block;
  border: none;
}
/* h3字体大小 */
.aui-page-my .aui-menu-list ul li h3 {
  color: #4f4f4f;
  font-size: 14px;
}
.aui-l-content .aui-menu-list-clear ul li h3 {
  width: 98%;
}
.aui-l-content .aui-menu-list ul li h3 {
  width: 60%;
  color: #4f4f4f;
  
}
.aui-menu-list li h3 {
  width: 99%;
  font-weight: normal;
  font-size: 14px;
  line-height: 32px;
  -webkit-box-orient: vertical;
}
.aui-time {
  position: absolute;
  right: 15px;
  bottom: 16px;
  color: #b8b7b7;
}
.aui-jump {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAB2klEQVR4nO3XsU0DQRhEYZfgDqAkd+ASdlbXgEMy0wFEtGF3gEMSICBGIFGASUyCENwellY38z5p85Ge/pNusQAAAJFqrWtJW0nbWuu69x6ckaSdpOO3t5O07L0N/yRp80Pcr3dP5JmT9PxLYCLP3R9xiTx3kg5ENiZpNTIwkedK0i2RzRE5AJEDEDkAkQMQOQCRAxA5AJEDEDkAkQMQOQCRAxA5AJEDEDkAkQMQOQCRAxA5AJEDEDkAkQMQOQCRAxA5AJEDEDkAkQMQOQCRAxA5AJEDEDkAkQMQOQCRAxA5AJEDEDkAkQMQOQCRAxA5AJEDtESutT4ReYYaL/ml915M0BK5lHLVey8mGBu5lPLQeysmkHQz8oofe29Fo4a4R0l3vfeiQUvcUspH771o0Hi5r8MwXPTejJEa4x74B54R4hojrjHiGiOuMeIaI64x4hojrjHiGiOuMeIaI64x4hojrjHiGiOuMeIaI64x4hojrjHiGiOuMeIaI64x4hojrjHiGiOuMeIaI64x4hojrjHiGiOuMeIaI64x4hojrjHiGiOuMeIaI64x4hojrjFJK+Iak/RGXFOSLolrjrjmJO2Ja+z0mX4nrjFJS0nXp2veS9r03gQAAHAOn71XAAnbrp0BAAAAAElFTkSuQmCC);
  background-size: 22px;
  width: 22px;
  height: 22px;
  display: block;
  background-repeat: no-repeat;
}
</style>