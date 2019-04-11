<template>
  <div>
    <div class="status"></div>
    <div class="garden-right">
      <img src="../../../static/garden-right.png" mode>
    </div>
    <div class="garden-left">
      <img src="../../../static/garden-left.png" mode>
    </div>
    <div class="login-text">骉族</div>
    <div class="subtitle">BiaoHong Technology</div>
    <form class="form-login" @submit.prevent="submit">
      <label for="userName">ID/手机号</label>
      <div class="form-row">
        <input
          id="userName"
          name="mobile"
          focus
          class="login-input"
          type="span"
          v-model="userName"
          placeholder="请输入ID/手机号"
        >
        <div @click="closeInput">
          <img src="../../../static/close.png" mode="widthFix">
        </div>
      </div>
      <label for>密码</label>
      <div class="form-row">
        <input
          class="login-input"
          name="password"
          v-model="passWord"
          :type="showType?'span':'password'"
          value="1"
          placeholder="请输入密码"
        >
        <img src="../../../static/psd-switch.png" mode="widthFix" @click="psdShow">
      </div>
      <div class="psd-register form-row" style="border: none;">
        <span @click="goOtherPage('forget-psd')">忘记密码？</span>
        <span style="color: #e60012;" @click="goOtherPage('register')">新用户注册</span>
      </div>
      <div style="text-align: center;">
        <button type="submit" class="login-btn">登录</button>
      </div>
      <router-link to="/news-list" tag="div" class="assent">
        登录即代表阅读并同意
        <span style="color: #e60012;">《服务条款》</span>
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "13307487013",
      passWord: "1",
      showType: false
    };
  },
  onLoad: function(option) {},
  methods: {
    goOtherPage(url) {
      this.$router.push(url);
    },
    closeInput(e) {
      this.userName = "";
    },
    psdShow() {
      this.showType = !this.showType;
    },
    submit() {
      let that = this;
      // this.$router.push('/');
      this.myAjax.noTokenPost(
        "user/login?mobile=" + this.userName + "&password=" + this.passWord,
        function(result) {
          that.$toast("登录成功");
          localStorage.token = result.resultData.token;
          setTimeout(function() {
            that.$router.push("/");
          }, 2000);
        },
        function(result) {
          that.$toast(result.resMsg);
        }
      );
      return false;
    }
  }
};
</script>

<style>
</style>
