<template>
  <div class="classify">
    <!-- 分类E:\xiangmu\app\src\assets\classify\shipin-one-1.png -->
    <van-tree-select height="100%" :items="items" :main-active-index.sync="active">
      <template #content height="600px">
        <div v-if="active === 0">
          <div class>
            <div class>
              <img src="../assets/images/cf-4.png" alt width="100%" />
            </div>
            <h2 class>热门推荐</h2>
            <section class>
              <div class>
                <a href class="text-a">
                  <i class>
                    <img src="../assets/images/x-sf-1.png" alt />
                  </i>
                  <p class="text-p">手机数码</p>
                </a>
                <a href class="text-a">
                  <i class>
                    <img src="../assets/images/x-sf-2.png" alt />
                  </i>
                  <p class="text-p">笔记本</p>
                </a>
                <a href class="text-a">
                  <i class>
                    <img src="../assets/images/x-sf-3.png" alt />
                  </i>
                  <p class="text-p">空调</p>
                </a>
                <a href class="text-a">
                  <i class>
                    <img src="../assets/images/x-sf-4.png" alt />
                  </i>
                  <p class="text-p">儿童文学</p>
                </a>
                <a href class="text-a">
                  <i class>
                    <img src="../assets/images/x-sf-5.png" alt />
                  </i>
                  <p class="text-p">啤酒</p>
                </a>
                <a href class="text-a">
                  <i class>
                    <img src="../assets/images/x-sf-6.png" alt />
                  </i>
                  <p class="text-p">海参</p>
                </a>
                <a href="#" class="text-a">
                  <i class>
                    <img src="../assets/images/x-sf-7.png" alt />
                  </i>
                  <p class="text-p">床</p>
                </a>
                <a href="#" class="text-a">
                  <i class>
                    <img src="../assets/images/x-sf-8.png" alt />
                  </i>
                  <p class="text-p">衣物清洁</p>
                </a>
                <a href="#" class="text-a">
                  <i class>
                    <img src="../assets/images/x-sf-9.png" alt />
                  </i>
                  <p class="text-p">羽绒服</p>
                </a>
              </div>
            </section>
          </div>
        </div>
        <div v-if="active === 1">
          <div class="classify-1">
            <h2 class>手机</h2>
            <div>
              <a href="#" class="text-a">
                <i class>
                  <img src="../assets/images/x-sf-7.png" alt />
                </i>
                <p class="text-p">床</p>
              </a>
            </div>
          </div>
        </div>
        <div v-if="active === 2">
          <div class="classify-1">
            <h2 class>百货</h2>
            <div class>
              <a href="#" class="text-a">
                <i class>
                  <img src="../assets/images/x-sf-7.png" alt />
                </i>
                <p class="text-p">床</p>
              </a>
            </div>
          </div>
        </div>
        <div v-if="active === 3">
          <div class="classify-1">
            <h2 class>女装</h2>
            <div class>
              <a href="#" class="text-a">
                <i class>
                  <img src="../assets/images/x-sf-7.png" alt />
                </i>
                <p class="text-p">床</p>
              </a>
            </div>
          </div>
        </div>
        <div v-for="(p,i) in actives" :key="i">
          <div v-if="active === p">
            <div class>
              <div class="aui-class-img">
                <img src="../assets/images/cf-4.png" alt width="100%" />
              </div>
              <!-- <h2 class="">热门推荐</h2> -->
              <section class="aui-grid-content">
                <div class>
                  <a href class="text-a">
                    <i class>
                      <img src="../assets/images/x-sf-1.png" alt />
                    </i>
                    <p class="text-p">手机数码</p>
                  </a>
                  <a href class="text-a">
                    <i class>
                      <img src="../assets/images/x-sf-2.png" alt />
                    </i>
                    <p class="text-p">笔记本</p>
                  </a>
                  <a href class="text-a">
                    <i class>
                      <img src="../assets/images/x-sf-3.png" alt />
                    </i>
                    <p class="text-p">空调</p>
                  </a>
                  <a href class="text-a">
                    <i class>
                      <img src="../assets/images/x-sf-4.png" alt />
                    </i>
                    <p class="text-p">儿童文学</p>
                  </a>
                  <a href class="text-a">
                    <i class>
                      <img src="../assets/images/x-sf-5.png" alt />
                    </i>
                    <p class="text-p">啤酒</p>
                  </a>
                  <a href class="text-a">
                    <i class>
                      <img src="../assets/images/x-sf-6.png" alt />
                    </i>
                    <p class="text-p">海参</p>
                  </a>
                  <a href="#" class="text-a">
                    <i class>
                      <img src="../assets/images/x-sf-7.png" alt />
                    </i>
                    <p class="text-p">床</p>
                  </a>
                  <a href="#" class="text-a">
                    <i class>
                      <img src="../assets/images/x-sf-8.png" alt />
                    </i>
                    <p class="text-p">衣物清洁</p>
                  </a>
                  <a href="#" class="text-a">
                    <i class>
                      <img src="../assets/images/x-sf-9.png" alt />
                    </i>
                    <p class="text-p">羽绒服</p>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </template>
    </van-tree-select>
    <my-foot></my-foot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      items: [ { text: "热门推荐" }, { text: "手机" }, { text: "百货" },
        { text: "女装" }, { text: "箱包" }, { text: "医药" }, { text: "电器" },
        { text: "数码" },  { text: "食品" }, { text: "进口" } ],
      actives: [4, 5, 6, 7, 8, 9]
    };
  }
};
</script>
<style scoped>
.van-tree-select__content {
  width: 100%;
  height: 100%;
  /* background: #e5e5e5 !important; */
}
.van-tree-select__nav {
  /* 使这个变为默认值,让列表框宽度变小 */
  flex: inherit;
}
h2 {
  color: gray;
}
.text-a {
  width: 33.333%;
  /* display: table-cell;
    position: relative; */
  text-align: center;
  vertical-align: middle;
  /* 外边距 */
  margin: 0.4rem 0;
  /* padding: 0.4rem 0; */
  /* 浮动 */
  float: left;
}
.text-a i img {
  /* 限制图标大小 */
  width: 60px;
  height: 60px;
}
</style>