<template>
  <div>

    <!-- 购物车 -->
<van-submit-bar
  disabled
  :price="3050"
  button-text="提交订单"
  tip="你的收货地址不支持同城送, 我们已为你推荐快递"
  tip-icon="info-o"
  @submit="onSubmit"
/>

  </div>
</template>