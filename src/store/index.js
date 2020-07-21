import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //公共数据源,共享数据都统一放着里面
    // 解决后（页面刷新保留store数据）
    // localStorage 是永久存储，浏览器关闭后数据不会丢失，除非主动删除数据。当关闭页面后重新打开，会读取上一次打开的页面数据
    // sessionStorage 在当前浏览器窗口关闭后自动删除。
    con: JSON.parse(sessionStorage.getItem("con")) || '',
    id: JSON.parse(sessionStorage.getItem("id")) || '',

  },
  //只有utations中调用方法修改Store数据,虽然操作繁琐但是集中
   //不要在mutations函数中,执行异步操作
  mutations: {
   adds(state,stmp){
    // localStorage.setItem('factor', JSON.stringify(stmp))
    //暂时保存
    sessionStorage.setItem('con', JSON.stringify(stmp))    
    // 因为上面的暂时保存需要刷新后才实现的,所以先用保存
    state.con = stmp
   },
   adds1(state,stmp){
    sessionStorage.setItem('id', JSON.stringify(stmp))
   },

  },
  //getters 用于对Store中的数据进行加工处理之后形成新的数据,类似于Vue的计算属性
  //store的数据变化,getters也会随之变化
  //使用getters第一种方法: this.$store.getters.名称
  getters: {
    showCon(state){
      return state.con
    }
  },
  //处理异步操作
  // 专门发送ajax请求
  //如果通过异步操作变更数据,必须通过actions,不能使用mutations,但是actions中还是要触发mutations的方式间接变更数据
  actions: {
    
  },
  modules: {
    
  },

})
