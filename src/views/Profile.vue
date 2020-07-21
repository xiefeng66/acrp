<template>
  <div>
    <div class="Particulars_1">
      <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
    </div>
    <!-- 用户地址 -->
    <van-address-list v-model="chosenAddressId" :list="list" default-tag-text="默认" 
    @add="onAdd" @edit="onEdit"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chosenAddressId: '1',
      list: [],
      id:'',
    };
  },
  mounted() {
    let con = this.$store.state.con[0];
    this.axios.get('/Profile?aosp='+con.username).then(res => {
        //验证密码是否正确  正确直接跳转
        if(res.data.fuwu == 404){
          console.log('查找失败');
        }else if(res.data.fuwu == 200){
          console.log('查找成功');
          console.log(res.data.result);
          var asd = res.data.result;
         for (let i = 0; i < asd.length; i++) {
            var obj = {};
            obj.address=asd[i].province+''+asd[i].cityid+asd[i].areaid+asd[i].address;
            obj.id= asd[i].id;
            obj.name= asd[i].alias;
            obj.tel= asd[i].phone;
            obj.isDefault= asd[i].is_default ? true:false;
            console.log(obj);
            this.list.push(obj);
            console.log(this.list);
          }   
          let list = [];


        }else{
          alert('查找失败')
        }
    })
  },
  methods: {
    onAdd() {
      console.log('新增地址');
      this.$router.push("/Profile0").catch(err => err);
    },
    onEdit(item, index) {
      console.log('编辑地址:' + index);
      // {path: '/Profile0', query: {selected: "2"}}
      this.$router.push({path: '/Profile0', query: {cbc: this.list[index].id}}).catch(err => err);
    },
    onClickLeft(){
      this.$router.push("/Personal").catch(err => err);
    }
  },
};
</script>
<style scoped>

</style>