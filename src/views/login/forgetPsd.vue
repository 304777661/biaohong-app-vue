<template>
  <div>
    <headerpage :title_page="title_page='找回密码'" :backBtn="backBtn=1"></headerpage>
    <form class="form-login" @submit.prevent="formSubmit">
      <label for="userName">ID/手机号</label>
      <div class="form-row">
        <input
          id="userName"
          name="username"
          focus
          class="login-input"
          type="text"
          v-model="userName"
          placeholder="请输入ID/手机号"
        >
        <img src="../../../static/close.png" mode="widthFix" @click="closeInput">
      </div>
      <label for>验证码</label>
      <div class="form-row">
        <input
          class="login-input"
          v-model="verifCode"
          name="verifCode"
          type="text"
          value
          placeholder="验证码(1分钟内有效)"
        >
        <img class="verif-code" src="../../../static/verif-code.png" @click="sendCode">
      </div>
      <label for>新密码</label>
      <div class="form-row">
        <input
          class="login-input"
          v-model="password"
          name="password"
          :type="showType?'text':'password'"
          placeholder="至少6位数"
        >
        <img src="../../../static/psd-switch.png" mode="widthFix" @click="psdShow">
      </div>
      <div class="go-login" @click="loginPage">去登录</div>
      <button class="login-btn">确定</button>
    </form>
  </div>
</template>

<script>
import headerpage from "../../components/header";
export default {
  components: {
    headerpage
  },
  data() {
    return {
      userName: "",
      password: "",
      verifCode: "",
      showType: false
    };
  },
  methods: {
    closeInput(e) {
      this.userName = "";
    },
    psdShow() {
      this.showType = !this.showType;
    },
    sendCode() {
      let that = this;
      // this.$router.push('/');
      this.myAjax.noTokenPost(
        "user/sendSms?mobile=" + this.userName + "&type=2",
        function(result) {
          that.$toast(result.resultMsg);
        },
        function(result) {
          that.$toast(result.resultMsg);
        }
      );
    },
    formSubmit() {
      let that = this;
      // this.$router.push('/');
      this.myAjax.noTokenPost(
        "user/forgetPass?mobile=" +
          this.userName +
          "&password=" +
          this.password +
          "&verCode=" +
          this.verifCode,
        function(result) {
          that.$toast(result.resultMsg);
        },
        function(result) {
          that.$toast(result.resultMsg);
        }
      );
      //   uni.request({
      //     url: appRequest.getRequestUrl() + "module=Login",
      //     data: JSON.stringify(e.detail.value),
      //     method: "POST",
      //     header: {
      //       "content-type": "application/x-www-form-urlencoded"
      //     },
      //     success: result => {
      //       if (result.statusCode == 200) {
      //         let loginInfo = result.data;
      //         if (loginInfo.error != "0") {
      //           uni.showToast({
      //             icon: "none",
      //             title: loginInfo.msg
      //           });
      //         } else {
      //           service.setToken(loginInfo.Token);
      //           this.toMain(this.mobile);
      //         }
      //       }
      //     }
      //   });
      return false;
    },
    loginPage() {
      this.$router.push("/login");
    }
  }
};
</script>

<style scope>
.login-btn {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
input {
  text-indent: 20px;
}
</style>
