<template>
  <div id="moveCar">
    <div class="top">
      <p>
        <span>
          骉圈发布
          <i class="iconfont iconsanjiaoyou"></i>
        </span>
        <span>
          发布广告
          <i class="iconfont iconsanjiaoyou"></i>
        </span>
      </p>
      <p>
        <span>看看大家都在干啥</span>
        <span>看看合伙人发布的广告</span>
      </p>
    </div>
    <div class="content">
      <p>
        <img src="../../../static/city-friend.png" alt>
        <span>同城好友</span>
      </p>
      <p>
        <img src="../../../static/call-movecar.png" alt>
        <span>呼叫挪车</span>
      </p>
    </div>
    <div class="footer" @click="blackPage">
      <i class="iconfont iconguanbi"></i>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    blackPage() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scope>
#moveCar {
  height: 100%;
  padding: 110px 140px;
  display: flex;
  flex-direction: column;
  .top {
    > p:nth-of-type(1) {
      font-size: 30px;
      color: #333333;
      display: flex;
      justify-content: space-between;
      padding: 0 24px;
      i {
        font-size: 20px;
        color: rgb(250, 51, 56);
      }
    }
    > p:nth-of-type(2) {
      font-size: 23px;
      color: #999999;
      display: flex;
      justify-content: space-between;
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    flex: 1;
    align-items: flex-end;
    padding-bottom: 100px;
    > p {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      font-size: 28px;
      color: #333;
      text-align: center;
      img {
        width: 154px;
      }
      span {
        margin-top: 25px;
      }
    }
  }
  .footer {
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
}
</style>

