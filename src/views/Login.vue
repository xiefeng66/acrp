<template>
  <div class="login_bg">
    <van-nav-bar
      title="登录"
      left-arrow
      left-text="返回"
      right-text="注册"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    ></van-nav-bar>
    <div id="div_denglu">
      <h2>烈火狂徒科技</h2>
      <span class="icon_wo"></span>
      <input type="text" v-model="username" placeholder="账号" maxlength="11" />
      <span class="icon_suo"></span>
      <!-- <p>{{username}}</p> -->
      <input type="password" v-model="password" placeholder="密码" maxlength="11" />
      <!-- <span class="icon_duan"></span> -->
      <!-- <input type="password"  placeholder="验证码" maxlength="6" > -->
      <a href="JavaScript:;">忘记密码</a>
      <van-button
        @click="denglu()"
        type="primary"
        size="large"
        color="linear-gradient(to right, #4bb0ff, #6149f6)"
      >登录</van-button>
      <div class="other_login">
        <div class="other"></div>
        <span>其他方式登录</span>
        <div class="other"></div>
      </div>
      <div class="other_choose choose">
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
    </div>
  </div>

</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      // 账号
      username: "",
      // 密码
      password: "",
      // Result:[]
    };
  },
  //在挂载完成后执行的业务代码
  mounted() {
    //发送AJAX请求
    // this.axios.get("/longins?username="+this.username+"&password="+this.password).then(res=>{
    //   console.log(res);
    // })
  },
  computed:{
    // ...mapState(['Result'])
  },
  methods: {
    onClickLeft() {
      this.$router.push("/").catch(err => err);
    },
    onClickRight() {
      this.$router.push("/Register").catch(err => err);
    },
    denglu() {

      this.axios.get("/longins?username="+this.username+"&password="+this.password).then(res=>{
        console.log(res.data.fuwu);
        console.log(res);
        this.res = res.data.result;
        let con = res.data.result;
        //验证密码是否正确  正确直接跳转
        if(res.data.fuwu == 404){
          alert('登录失败')
        }else if(res.data.fuwu == 200){
           // 登录成功,提示成功信息，然后跳转到首页，同时将token保存到localstorage中, 将登录名使用vuex传递到Home页面
           // 将登录名使用vuex传递到personal页面

          //点跳转到显示详细信息界面，跳转到显示详情页面，并将输入的内容传过去
          this.$store.commit("adds", con);
          this.$router.push("/Personal").catch(err => err);
        }else{
          alert('登录失败')
        }
      })
    }
  }
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
}
#div_denglu input {
  height: 25px;
  width: 200px;
  padding-left: 25px;
  margin: 13px 0 13px 0px;
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
#div_denglu a {
  display: block;
  text-align: right;
  margin-top: 20px;
  margin-bottom: 20px;
  color: rgb(3, 127, 228);
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
.other_choose {
  width: 74%;
  position: absolute;
  margin: 0 13%;
}
.choose {
  top: 85.5%;
}
#div_denglu .other_choose a {
  text-align: center;
}
</style>