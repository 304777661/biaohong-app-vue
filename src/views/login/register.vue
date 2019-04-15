<template>
    <div>
		<div class="status"></div>
		<div class="garden-right"><img src="../../../static/garden-right.png"></div>
		<div class="garden-left"><img src="../../../static/garden-left.png"></div>
		<div class="login-text">骉族</div>
		<div class="subtitle">BiaoHong  Technology</div>
		<form class="form-login" @submit.prevent="formSubmit">
			<label for="userName">ID/手机号</label>
			<div class="form-row">
				<input id="userName" name="mobile" focus v-model="phone" class="login-input" type="text" placeholder="请输入ID/手机号"/>
				<div @click="phoneInput"><img src="../../../static/close.png" mode="widthFix"></div>
			</div>
			<label for="">密码</label>
			<div class="form-row">
				<input class="login-input" name="password" v-model="passWord" :type="showType?'text':'password'" value="" placeholder="请输入密码"/>
				<div @click="psdShow"><img src="../../../static/psd-switch.png" mode="widthFix"></div>
			</div>
			<!-- <label for="">验证码</label>
			<div class="form-row">
				<input class="login-input" name="verifCode" type="text" value="" placeholder="验证码"/>
				<div @click="sendCode"><img class="verif-code" src="../../../static/verif-code.png" mode="widthFix"></div>
			</div> -->
			<label for="userName">用户名</label>
			<div class="form-row">
				<input name="userName" focus class="login-input" type="text" v-model="userName" placeholder="选填"/>
				<div @click="closeInput"><img src="../../../static/close.png" mode="widthFix"></div>
			</div>
			<label for="">推荐人</label>
			<div class="form-row">
				<input class="login-input" v-model="TJUserCode" name="TJUserCode" type="text" value="" placeholder="选填项"/>
			</div>
			<div class="go-login" @click="loginPage">已有账号去登录</div>
			<button form-type="submit" type="warn" class="login-btn">注册</button>
			<div class="assent">注册即代表阅读并同意<span style="color: #e60012;">《服务条款》</span></div>
		</form>
	</div>
</template>
<script>
export default {
  name: "register",
  data() {
    return {
      userName: "",
      showType: false,
      TJUserCode: "",
      phone: "",
      passWord: ""
    };
  },
  methods: {
    closeInput(e) {
      this.userName = "";
    },
    phoneInput() {
      this.phone = "";
    },
    psdShow() {
      this.showType = !this.showType;
    },
    sendCode() {},
    formSubmit() {
      let that = this;
      // this.$router.push('/');
      this.myAjax.noTokenPost(
        "user/register?mobile=" +
          this.phone +
          "&password=" +
          this.passWord +
          "&TJUserCode=" +
          this.TJUserCode +
          "&userName=" +
          this.userName,
        function(result) {
          that.$toast(result.resultMsg);
          setTimeout(function() {
            that.$router.push("/login");
          }, 1000);
        },
        function(result) {
          // that.$toast(result.resultMsg);
        }
      );
      return false;
    },
    loginPage() {
      this.$router.push("/login");
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.login-btn {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
