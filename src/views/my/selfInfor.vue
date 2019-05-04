<template>
  <div>
    <headerpage :title_page="title_page='账号'" :backBtn="backBtn=1"></headerpage>
    <div id="selfInfor">
      <ul class="user-info">
        <li>
          <span>名称</span>
          <span>
            柠檬木有枝&nbsp;&nbsp;
            <i class="iconfont iconbianji"></i>
          </span>
        </li>
        <li>
          <span>手机号码</span>
          <span>17680144882</span>
        </li>
        <li>
          <span>重置密码</span>
          <span>
            点击重置&nbsp;&nbsp;
            <img src="../../../static/rg-arrow.png" alt>
          </span>
        </li>
      </ul>
      <div class="guanl">关联第三方社交账号</div>
      <div class="guanl-wechat">
        <span>
          <i class="iconfont iconweixinzhanghao"></i>&nbsp;&nbsp; 微信账号
        </span>
        <mt-switch v-model="value"></mt-switch>
      </div>
      <div class="exit">
        <button @click="exitLogin">退出登录</button>
      </div>
    </div>
  </div>
</template>
<script>
import headerpage from "../../components/header";
export default {
  name: "selfInfor",
  components: {
    headerpage
  },
  data() {
    return {
      value: false
    };
  },
  methods: {
    exitLogin() {
      localStorage.token = "";
      this.$router.push("/login");
    }
  },
  mounted() {
    console.log(this.$route.params);
  }
};
</script>
<style lang="scss" scoped>
#selfInfor {
  .exit {
    text-align: center;
    margin-top: 70px;
    button {
      background-color: #fa3338;
      border-radius: 31px;
      width: 706px;
      text-align: center;
      height: 84px;
      line-height: 84px;
      font-size: 33px;
      color: #fefefe;
    }
  }
  padding: 40px 20px;
  ul.user-info {
    background-color: #ffffff;
    box-shadow: 0px 2px 17px 0px rgba(51, 51, 51, 0.5);
    border-radius: 14px;
    > li {
      font-size: 32px;
      color: #333333;
      padding: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #e5e5e5;
      i {
        font-size: 34px;
      }
      img {
        width: 15px;
        height: 25px;
        vertical-align: middle;
      }
    }
  }
  .guanl {
    font-size: 29px;
    color: #333333;
    height: 80px;
    line-height: 80px;
  }
  .guanl-wechat {
    box-shadow: 0px 2px 17px 0px rgba(51, 51, 51, 0.5);
    border-radius: 14px;
    height: 98px;
    line-height: 98px;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    i {
      color: #fa3338;
    }
    label {
      display: inline-block;
    }
  }
  /deep/ span.mint-switch-core:after {
    content: "";
  }
  /deep/ span.mint-switch-core:before {
    content: "";
  }
  /deep/ .mint-switch-input:checked + .mint-switch-core:after {
    content: "";
  }
}
</style>
